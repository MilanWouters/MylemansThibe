"""Build compact homepage images from the existing source photos with Pillow."""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "fotos/web/optimized"
IMAGES = [
    ("home-boomverzorging", "fotos/web/boom-klimwerk-2.jpg", (320, 640, 960), 3 / 2, (0.5, 0.5)),
    ("home-haagsnoei", "fotos/IMG_3059.jpeg", (320, 640, 960), 3 / 2, (0.5, 0.5)),
    ("home-tuinaanleg", "fotos/IMG_3270.jpeg", (320, 640, 960), 3 / 2, (0.5, 0.65)),
    ("home-bosbouw", "fotos/web/bosbouw-hakselaar-bos.jpg", (480, 768, 1200), 4 / 3, (0.5, 0.5)),
    ("home-grondwerken", "fotos/web/tuinaanleg-kraan-1.jpg", (480, 768, 1000), 4 / 3, (0.5, 0.5)),
    ("home-gazononderhoud", "fotos/web/tuinonderhoud-machinaal.jpg", (480, 768, 1000), 4 / 3, (0.5, 0.5)),
]


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name, source, widths, ratio, center in IMAGES:
        with Image.open(ROOT / source) as original:
            photo = ImageOps.exif_transpose(original).convert("RGB")
            for width in widths:
                size = (width, round(width / ratio))
                image = ImageOps.fit(photo, size, Image.Resampling.LANCZOS, centering=center)
                image.save(OUTPUT / f"{name}-{width}.webp", "WEBP", quality=82, method=6)
                image.save(OUTPUT / f"{name}-{width}.avif", "AVIF", quality=65, speed=6)

    with Image.open(ROOT / "fotos/web/hero-boomwerken-canopy.jpg") as original:
        photo = ImageOps.exif_transpose(original).convert("RGB")
        photo.save(OUTPUT / "home-hero-boomverzorging-1536.avif", "AVIF", quality=65, speed=6)
        # Match the existing centered mobile background without transferring the hidden sides.
        mobile = ImageOps.fit(photo, (576, 864), Image.Resampling.LANCZOS, centering=(0.5, 0))
        mobile.save(OUTPUT / "home-hero-boomverzorging-mobiel-576.webp", "WEBP", quality=82, method=6)
        mobile.save(OUTPUT / "home-hero-boomverzorging-mobiel-576.avif", "AVIF", quality=55, speed=6)


if __name__ == "__main__":
    main()
