from PIL import Image
import os

DIR = "public/images/agabaritic"
KEEP = ["1","2","3","4","5","6","7","8","9Lili","11Lili"]

def crop_black(img):
    rgb = img.convert("RGB")
    w, h = rgb.size
    px = list(rgb.getdata())
    top = next((max(0,y-5) for y in range(h) if sum(r+g+b for r,g,b in px[y*w:(y+1)*w])/(3*w)>25), 0)
    bot = next((min(h,y+5) for y in range(h-1,0,-1) if sum(r+g+b for r,g,b in px[y*w:(y+1)*w])/(3*w)>25), h)
    return img.crop((0,top,w,bot)) if top>0 or bot<h else img

for n in KEEP:
    src = f"{DIR}/{n}.png"
    if os.path.exists(src):
        img = Image.open(src)
        crop_black(img).convert("RGB").save(f"{DIR}/{n}.jpg","JPEG",quality=88,optimize=True)
        print(f"OK {n}.jpg")

for f in [f"{n}.png" for n in KEEP] + [f"{i}Lili.jpeg" for i in range(10,22)]:
    p = f"{DIR}/{f}"
    if os.path.exists(p): os.remove(p)

print("Done:", sorted(os.listdir(DIR)))
