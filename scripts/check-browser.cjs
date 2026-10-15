// Run with Playwright installed and BASE_URL pointing at a local preview.
// Formspree is always intercepted: this script never sends real enquiries.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const base = process.env.BASE_URL || 'http://127.0.0.1:8010';
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'tmp');
fs.mkdirSync(output, { recursive: true });

async function main() {
    for (const file of fs.readdirSync(path.join(root, 'javascript'))) {
        if (file.endsWith('.js')) new vm.Script(fs.readFileSync(path.join(root, 'javascript', file), 'utf8'), { filename:file });
    }
    const files = fs.readdirSync(root).filter(file=>file.endsWith('.html'));
    for (const file of files) {
        const html = fs.readFileSync(path.join(root,file),'utf8');
        for (const [, attrs, code] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
            if (!attrs.includes('application/ld+json') && code.trim()) new vm.Script(code, {filename:file});
        }
    }
    const browser = await chromium.launch({ headless:true, channel:process.env.BROWSER_CHANNEL || 'msedge' });
    const results = [];
    try {
        for (const width of [320,390,768,1024,1440]) {
            const context = await browser.newContext({ viewport:{width,height:900}, deviceScaleFactor:1 });
            await context.addInitScript(()=>localStorage.setItem('cookieConsent','declined'));
            const page = await context.newPage();
            const errors = [];
            page.on('pageerror',error=>errors.push(error.message));
            for (const file of files) {
                const response = await page.goto(`${base}/${file}`, {waitUntil:'networkidle'});
                assert.equal(response.status(),200,file);
                const state = await page.evaluate(()=>({
                    h1Count:document.querySelectorAll('h1').length,
                    visibleH1:document.querySelector('h1').getBoundingClientRect().height>0,
                    mains:document.querySelectorAll('main').length,
                    overflow:document.documentElement.scrollWidth>innerWidth,
                    brokenImages:[...document.images].filter(im=>im.complete&&!im.naturalWidth).map(im=>im.src)
                }));
                assert.equal(state.h1Count,1,`${file}/${width}: H1 count`);
                assert.equal(state.visibleH1,true,`${file}/${width}: hidden H1`);
                assert.equal(state.mains,1,`${file}/${width}: main count`);
                assert.equal(state.overflow,false,`${file}/${width}: horizontal overflow`);
                assert.deepEqual(state.brokenImages,[],`${file}/${width}: broken images`);
                results.push({file,width,...state});
                if ([390,1440].includes(width) && ['index.html','contact.html','werkgebied.html','haag-scheren.html'].includes(file)) {
                    await page.screenshot({path:path.join(output,`seo-after-${file.replace('.html','')}-${width}.png`)});
                }
                for (const image of await page.locator('img').all()) {
                    if (await image.isVisible()) {
                        await image.scrollIntoViewIfNeeded();
                        await image.evaluate(im=>im.decode());
                    }
                }
            }
            assert.deepEqual(errors,[],`JavaScript errors at ${width}`);
            if (width===768) {
                await page.goto(`${base}/index.html`);
                const menu = page.locator('.hamburger');
                await menu.click();
                assert.equal(await menu.getAttribute('aria-expanded'),'true');
                await page.setViewportSize({width:900,height:900});
                assert.equal(await menu.getAttribute('aria-expanded'),'true');
                await page.keyboard.press('Escape');
                assert.equal(await menu.getAttribute('aria-expanded'),'false');
                await menu.click();
                await page.locator('.nav-overlay').click({position:{x:10,y:200}});
                assert.equal(await menu.getAttribute('aria-expanded'),'false');
            }
            console.log(`Checked ${files.length} pages at ${width}px`);
            await context.close();
        }

        const context = await browser.newContext({viewport:{width:390,height:844}});
        const page = await context.newPage();
        let posts = 0;
        let mode = 'success';
        let submitted = '';
        await context.route('https://formspree.io/**', async route=>{
            posts++;
            submitted = route.request().postData() || '';
            if(mode==='network') return route.abort('failed');
            await route.fulfill({status:mode==='success'?200:422,contentType:'application/json',body:JSON.stringify(mode==='success'?{ok:true}:{errors:[{message:'Mock failure'}]})});
        });
        await context.addInitScript(()=>localStorage.setItem('cookieConsent','declined'));
        await page.goto(`${base}/contact.html?dienst=haag-scheren#contact-form`,{waitUntil:'networkidle'});
        assert.equal(await page.locator('#subject').inputValue(),'Hagen scheren');
        await page.locator('.submit-btn').click();
        assert.equal(posts,0,'Empty form must not submit');
        async function fill() {
            await page.locator('#name').fill('Lokale formuliercontrole');
            await page.locator('#email').fill('test@example.invalid');
            await page.locator('#gemeente').fill('Vremde');
            await page.locator('#subject').selectOption('Hagen scheren');
            await page.locator('#message').fill('Lokale test; deze aanvraag wordt onderschept en niet verstuurd.');
        }
        await fill();
        await page.locator('#name').fill('   ');
        await page.locator('.submit-btn').click();
        assert.equal(posts,0,'Whitespace-only name must not submit');
        assert.equal(await page.locator('#name').getAttribute('aria-invalid'),'true');
        await fill();
        await page.locator('.submit-btn').click();
        await page.locator('#form-status.success').waitFor();
        assert.equal(posts,1);
        assert.ok(submitted.includes('Vremde'));
        assert.equal(await page.locator('#name').inputValue(),'');
        mode='error';
        await fill();
        await page.locator('.submit-btn').click();
        await page.locator('#form-status.error').waitFor();
        assert.equal(await page.locator('#name').inputValue(),'Lokale formuliercontrole');
        assert.equal(await page.locator('.submit-btn').isEnabled(),true);
        mode='network';
        await page.locator('.submit-btn').click();
        await page.locator('#form-status.error').waitFor();
        await page.waitForFunction(()=>!document.querySelector('.submit-btn').disabled);
        assert.equal(await page.locator('#name').inputValue(),'Lokale formuliercontrole');
        await page.goto(`${base}/contact.html?dienst=%3Cscript%3E`);
        assert.equal(await page.locator('#subject').inputValue(),'');
        await context.close();
        const report = {page_checks:results.length,viewports:[320,390,768,1024,1440],form:'validation, prefill, success, server error and network error passed; all submissions intercepted',menu:'keyboard, overlay and breakpoint checks passed',results};
        fs.writeFileSync(path.join(output,'seo-browser-results.json'),JSON.stringify(report,null,2));
        console.log(JSON.stringify({page_checks:results.length,form:report.form,menu:report.menu}));
    } finally {
        await browser.close();
    }
}
main().catch(error=>{console.error(error);process.exitCode=1;});
