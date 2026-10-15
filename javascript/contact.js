// Preserve the existing Formspree endpoint and support service-specific requests.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const status = document.getElementById('form-status');
    const submitBtn = form.querySelector('.submit-btn');
    const subject = document.getElementById('subject');
    const services = {
        'boomverzorging': 'Boomverzorging',
        'bomen-vellen': 'Bomen vellen',
        'stronkenfrezen': 'Stronkenfrezen',
        'tuinonderhoud': 'Tuinonderhoud',
        'haag-scheren': 'Hagen scheren',
        'tuinaanleg': 'Tuinaanleg',
        'tuinwerken': 'Ander tuinproject'
    };
    const requested = new URLSearchParams(window.location.search).get('dienst');
    if (Object.prototype.hasOwnProperty.call(services, requested)) {
        subject.value = services[requested];
    }

    function clearErrors() {
        form.querySelectorAll('.form-error').forEach(error => error.classList.remove('show'));
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.classList.remove('error', 'success');
            input.removeAttribute('aria-invalid');
        });
    }

    function validateForm() {
        clearErrors();
        let firstInvalid = null;
        for (const id of ['name', 'email', 'gemeente', 'subject', 'message']) {
            const field = document.getElementById(id);
            const valid = field.value.trim() && field.checkValidity();
            if (!valid) {
                document.getElementById(id + '-error').classList.add('show');
                field.classList.add('error');
                field.setAttribute('aria-invalid', 'true');
                firstInvalid = firstInvalid || field;
            } else {
                field.classList.add('success');
            }
        }
        if (firstInvalid) firstInvalid.focus();
        return !firstInvalid;
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (!validateForm()) {
            status.className = 'error';
            status.textContent = 'Gelieve alle verplichte velden correct in te vullen.';
            return;
        }
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Verzenden…';
        status.className = '';
        status.textContent = '';
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                status.className = 'success';
                status.textContent = 'Bedankt! Je aanvraag is verzonden. We nemen zo snel mogelijk contact met je op.';
                form.reset();
                clearErrors();
            } else {
                status.className = 'error';
                status.textContent = 'Je aanvraag kon niet verzonden worden. Probeer opnieuw of bel +32 474 19 20 92.';
            }
        } catch (error) {
            status.className = 'error';
            status.textContent = 'Je aanvraag kon niet verzonden worden. Controleer je verbinding of bel +32 474 19 20 92.';
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Verstuur je aanvraag';
        }
    });
});
