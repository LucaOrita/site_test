from PIL import Image, ImageDraw, ImageFont
import os

img = Image.new("RGB",(1200,630),(13,31,60))
d = ImageDraw.Draw(img)
for i in range(-630,1830,80): d.line([(i,0),(i+630,630)],fill=(30,50,80),width=1)
d.rectangle([(0,0),(10,630)],fill=(232,147,26))
d.rectangle([(0,622),(1200,630)],fill=(232,147,26))
try:
    fb=ImageFont.truetype("public/fonts/satoshi/Satoshi-Bold.otf",110)
    fm=ImageFont.truetype("public/fonts/satoshi/Satoshi-Medium.otf",38)
    fr=ImageFont.truetype("public/fonts/satoshi/Satoshi-Regular.otf",28)
except:
    fb=fm=fr=ImageFont.load_default()
d.text((80,130),"DACODA",font=fb,fill=(232,147,26))
d.rectangle([(80,270),(500,274)],fill=(232,147,26))
d.text((80,295),"Transport Rutier International",font=fm,fill=(255,255,255))
d.text((80,350),"Europa . CSI . Asia  .  Capital 100% romanesc  .  Din 1993",font=fr,fill=(160,175,195))
for i,(v,l) in enumerate([("32 ani","experienta"),("40+","tari acoperite"),("1.100+","clienti activi")]):
    x=80+i*220; d.text((x,440),v,font=fm,fill=(232,147,26)); d.text((x,488),l,font=fr,fill=(160,175,195))
d.text((80,560),"dacoda.ro  .  +40 785 225 446",font=fr,fill=(160,175,195))
img.save("public/og-image.jpg","JPEG",quality=92,optimize=True)
print("OK og-image.jpg")
