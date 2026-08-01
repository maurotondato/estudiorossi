"""One-off image optimization pass for the premium redesign.
Run once locally with Pillow; not part of any site runtime."""
from PIL import Image, ImageOps
import os

SRC = "images"

def save_pair(im, base, max_w, jpg_q=78, webp_q=76, jpg_ext="jpg"):
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size
    if w > max_w:
        new_h = round(h * (max_w / w))
        im = im.resize((max_w, new_h), Image.LANCZOS)
    im.save(f"{SRC}/{base}.{jpg_ext}", "JPEG", quality=jpg_q, optimize=True, progressive=True)
    im.save(f"{SRC}/{base}.webp", "WEBP", quality=webp_q, method=6)
    print(base, im.size,
          os.path.getsize(f"{SRC}/{base}.{jpg_ext}") // 1024, "KB jpg",
          os.path.getsize(f"{SRC}/{base}.webp") // 1024, "KB webp")

# 1. Home hero — dark moody gavel/book/scale (bannerhome.jpg)
save_pair(Image.open(f"{SRC}/bannerhome.jpg"), "hero-home", 1920, jpg_q=74, webp_q=70)

# 2. Warm hands+scale — used as Seguros/AboutUs supporting image
save_pair(Image.open(f"{SRC}/hero-bg.jpg"), "hero-warm", 1400, jpg_q=76, webp_q=72)

# 3-6. Contextual card images
save_pair(Image.open(f"{SRC}/bannerhome1.jpg"), "img-legal-1", 900, jpg_q=76, webp_q=72)
save_pair(Image.open(f"{SRC}/bannerhome2.jpg"), "img-scale-gold", 900, jpg_q=76, webp_q=72)
save_pair(Image.open(f"{SRC}/bannerhome3.jpg"), "img-handshake-1", 900, jpg_q=76, webp_q=72)
save_pair(Image.open(f"{SRC}/bannerhome4.jpg"), "img-handshake-2", 900, jpg_q=76, webp_q=72)

# 7. Team photo — crop out the redundant logo banner glued to the bottom
team = Image.open(f"{SRC}/aboutus.jpeg")
team = ImageOps.exif_transpose(team)
team = team.crop((0, 0, team.width, 3155))
save_pair(team, "equipo", 1400, jpg_q=80, webp_q=76)

# 8-10. Product photos: drop needless (fully-opaque) alpha, PNG -> JPEG+WEBP
for src_name, base in [
    ("segurovida.png", "seguro-vida"),
    ("seguroauto.png", "seguro-auto"),
    ("segurohogar.png", "seguro-hogar"),
]:
    save_pair(Image.open(f"{SRC}/{src_name}"), base, 900, jpg_q=80, webp_q=76)

# 11. Logo — re-encode small + clean navbar asset
logo = ImageOps.exif_transpose(Image.open(f"{SRC}/logo.jpeg")).convert("RGB")
logo_small = logo.resize((480, 480), Image.LANCZOS)
logo_small.save(f"{SRC}/logo.png", "PNG", optimize=True)
logo_small.save(f"{SRC}/logo.webp", "WEBP", quality=90, method=6)

# 12. Favicon set — crop tight around the "R" monogram (top of the square mark)
w, h = logo.size
mark = logo.crop((round(w*0.30), round(h*0.12), round(w*0.68), round(h*0.50)))
mark = ImageOps.pad(mark, (max(mark.size),) * 2, color=(11, 15, 20))
mark.save(f"{SRC}/favicon-src.png", "PNG")

sizes = [16, 32, 48, 180, 192, 512]
imgs = {}
for s in sizes:
    resized = mark.resize((s, s), Image.LANCZOS)
    imgs[s] = resized
    if s in (16, 32):
        resized.save(f"{SRC}/favicon-{s}.png", "PNG")
    elif s == 180:
        resized.save(f"{SRC}/apple-touch-icon.png", "PNG")
    elif s in (192, 512):
        resized.save(f"{SRC}/icon-{s}.png", "PNG")

imgs[256] = mark.resize((256, 256), Image.LANCZOS)
imgs[16].save(
    f"{SRC}/favicon.ico", format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48), (256, 256)],
)

print("done")
