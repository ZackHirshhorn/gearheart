# GEARHEART Issue #1: "Coming Home" | AI Image Prompt Pack

Scope: Prologue splash, Pages 1-3 and Page 7 (18 panels). Theme line: "We never stopped inventing. We stopped making." Art is generated WITHOUT lettering. The only legible text allowed in any image is: the rusted sign "ASHFORD STEEL - EST. 1911" and the banner "COMING HOME: AMERICAN MANUFACTURING INITIATIVE" on the splash, and "MERIDIAN PACIFIC CONSORTIUM" on the wall screens in P3 Panel 1 (the third permitted text). The file on P3 Panel 4 stays unlettered. All captions, dialogue and sound effects are added later in post.

---

## 1. Style Guide

**Look:** flat graphic comic art. Strong, simple silhouettes, hard-edged shapes, minimal texture, dramatic rim lighting that separates figures from dark backgrounds. Everything is real, machined, physical metal: this is a story about making things, not about gadgets or energy.

### Palette

| Role | Name | Hex |
|---|---|---|
| Base metal | Steel gray | `#5B6670` |
| Light metal | Pale steel | `#9AA5AE` |
| Shadow / void | Gunmetal | `#23282E` |
| Near black | Forge black | `#0B0D10` |
| Decay accent | Oxidized orange | `#C4622D` |
| Deep decay | Rust brown | `#7A3418` |
| Hope accent (red) | Shield red | `#C8102E` |
| Hope accent (white) | Star white | `#F4F1EA` |
| Hope accent (blue) | Shield blue | `#1F3A93` |
| Window / dawn light | Amber | `#FFD9A0` |
| Cold dawn sky | Frost blue-gray | `#8FA3B5` |

Rules: steel gray and gunmetal dominate every frame (about 70%). Oxidized orange marks decay (rust, old signs, worn paint). Red/white/blue appears ONLY as hope: the flags, the banner, the Shield. Amber is used only for window light and dawn light. There is no energy glow, no glowing machines, no glowing eyes, no tech effects anywhere in the issue.

### Line and shading rules
- Outline weight: medium, uniform (about 3 px at 1024 px width), dark gunmetal, not pure black. Slightly thicker on the outer silhouette, thinner for interior detail.
- Shading: cel style, base tone + one shadow tone + optional second shadow. No soft airbrush, no photoreal texture.
- Rim lighting: a thin, crisp edge light on one side of every main subject. Cold pale steel rim in dead or night scenes; warm amber rim only where a window or the dawn is the light source.
- Motion: flat motion arcs and flat motion-blur wedges, not blurry bloom.
- Texture: sparse. Rust shown as flat orange patches, never noisy grunge.
- Backgrounds: simplified, large shapes, strong perspective lines.

### Consistency tips
1. Paste the **Style Prefix** and the relevant **Character Blocks** into every prompt. Do not paraphrase them.
2. Lock a seed per page, then vary only the panel description. Keep the same model and sampler across the issue.
3. Generate the character sheets first (Section 2): Dan, Walt, Hollis, the President, Shao, Voss and Krait. Pick the best of each and use it as an image reference (IP-Adapter / character reference, weight 0.5 to 0.7) for later panels.
4. Generate the Shield sheet before Page 7 and use it as a reference for every Shield panel (P7 Panels 2 to 5).
5. Dan has ONE look the whole issue: denim jacket, work shirt, jeans, boots. In the convoy and train scenes (Page 7) he also wears a hard hat. Never change his clothes.
6. Leave clean negative space where captions and balloons will go (noted per panel).
7. Fix text artifacts in post. Never accept stray letters in the art, except the permitted texts listed in the scope line.

### Suggested model settings
- Model: any strong flat-illustration / graphic-novel capable model (SDXL-class or newer). Add a flat vector or comic LoRA at 0.4 to 0.7 if available.
- Steps 28 to 35, CFG 5 to 7, sampler DPM++ 2M Karras (or the model default).
- Generate at the listed ratio, roughly 1 megapixel, then upscale 2x with a low-denoise (0.25 to 0.35) pass.
- Batch 4, pick best, then inpaint hands and faces.

### Reusable blocks (copy-paste)

**STYLE PREFIX**
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition, no text, no lettering
```

**GLOBAL NEGATIVE PROMPT**
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload
```

**DAN**
```
Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots
```

**DAN, HARD HAT (convoy and train scenes, Page 7)**
```
Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat
```

**WALT**
```
Walt Kowalski, 61, old foreman, stocky and weathered, close-cropped gray hair, gray mustache, deep lines around the eyes, faded plaid work shirt under a canvas vest, work trousers, steel-toe boots, arms often crossed
```

**HOLLIS**
```
Elaine Hollis, CEO of Hollis Bearing Co., early 50s, sharp practical expression, short silver-brown hair, navy blazer over a plain white shirt, dark trousers, flat practical shoes, a plain visitor hard hat tucked under one arm
```

**THE PRESIDENT**
```
the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person
```

**SHAO**
```
Director Shao Lin-wei, state-backed manufacturing executive, early 50s, individual fictional character, neat short black hair with gray at the temples, narrow rimless glasses, dark charcoal suit, white shirt, no tie, calm cold expression, still hands
```

**VOSS**
```
Marguerite Voss, American logistics fixer, polished executive in her late 40s, sleek silver-streaked dark hair in a tight low chignon, sharp composed expression, tailored charcoal gray suit with a crisp white blouse, small steel lapel pin, upright confident posture
```

**KRAIT**
```
Krait, mercenary leader, individual, lean and wiry man in his 40s, shaved head, scarred jaw, dark tactical vest and plates over dark fatigues, gloves, boots, matte dark gear with no insignia, no patches, no flags
```

**THE SHIELD**
```
the Shield: a machined-metal planetary gear set, round, an outer ring gear in red and white with fine teeth on its inner edge and a blue side wall with fine white stripes, six red planet gears each with a white five-point star cut-out, one thick red hollow sun gear, no glow, not high-tech
```

---

## 2. Character and Prop Sheets

### 2.1 Dan Reyes-Holloway (hero)

**Bio for the artist:** 34, third-generation machinist and line setter. Not an inventor and not a superhero: a man who knows how to stand up a production line. Honest, steady, stubborn. Reads as an everyman: sturdy, not a model.

- One look: denim jacket, work shirt, jeans, boots. In the convoy and train scenes (Page 7) add a hard hat.
- No high-tech suit, no exoskeleton, no gear-shaped irises, no light cables. Ever.
- Silhouette: broad shoulders, slightly slumped at rest, upright when he works.

**Sheet prompt (turnaround, bare head and hard hat)**
```
[STYLE PREFIX] character design sheet, two full-body standing figures side by side on a plain steel gray background, left: [DAN] bare headed, right: [DAN, HARD HAT], front view and three-quarter view, neutral pose, even spacing, rim lighting from the left
```
- Aspect ratio: 16:9
- Negative prompt: [GLOBAL NEGATIVE PROMPT], steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, cropped, cut off feet, extra characters, busy background

### 2.2 Walt Kowalski (supporting)

**Bio for the artist:** 61, Dan's old foreman, forty years on the floor. Gruff, loyal, skeptical but fair.

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, full-body standing figure of [WALT], front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], cartoon caricature, cropped, extra characters, busy background

### 2.3 Elaine Hollis (supporting)

**Bio for the artist:** CEO of Hollis Bearing Co., a family company that moved production overseas in 2004 and is now bringing it home. Sharp, practical, direct.

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, full-body standing figure of [HOLLIS], front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], cartoon villain look, cleavage, cropped, extra characters

### 2.4 The President

**Bio for the artist:** a respectful, generic depiction of the President of the United States. Recognizable as a president by context: a podium with the presidential seal removed or blank, flags behind. Dark suit, red tie. This is NOT a likeness of any real person.

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, standing figure of [THE PRESIDENT] at a plain podium with two flags behind, front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], caricature, real person likeness, celebrity likeness, readable seal text, cropped, extra characters

### 2.5 Director Shao Lin-wei (antagonist, individual)

**Bio for the artist:** an individual fictional executive of a state-backed manufacturing consortium. Cold, patient, strategic. Defined by his stillness and his clothes, never by ethnic features or caricature.

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, full-body standing figure of [SHAO], front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], ethnic caricature, exaggerated facial features, stereotype costume, fu manchu, cartoon villain look, cropped, extra characters

### 2.6 Marguerite Voss (supporting, appears on Page 3)

**Bio for the artist:** an American logistics fixer who sells her skills to the highest bidder. Polished, composed, quietly amused.

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, full-body standing figure of [VOSS], front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting, a sliver of oxidized orange in the background to hint at decay she profits from
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], cartoon villain look, cleavage, cropped, extra characters

### 2.7 Krait (Page 7 antagonist, individual)

**Bio for the artist:** an individual mercenary leader. Lean, quiet, professional. Tactical gear with no insignia, patches or flags. His trucks run without lights at night.

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, full-body standing figure of [KRAIT], front view and three-quarter view, on a plain gunmetal background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], insignia, flag patches, national symbols, skull logo, ethnic caricature, cartoon villain look, cropped, extra characters

### 2.8 The Shield (key prop)

**Origin:** Dan's hand-machined apprentice test piece, cut on the Ashford floor when he was 18. His father hung it over the tool crib, where it has stayed. It is machined metal, not a gadget.

**Construction:** a planetary gear set. Outer ring gear in red and white with fine teeth on the inside edge; the outer rim's side wall is blue with fine white stripes. Six red planet gears, each with a white five-point star cut out of it. One thick red hollow sun gear. Machined metal, not high-tech, no glow in any variant.

- **Dormant / worn variant:** hung on the wall over the tool crib. Gears still, colors slightly dulled, small dust and scuffs, stars show as pale steel through the cut-outs.
- **Spinning variant:** gears in flat motion blur, a red, white and blue blur, still crisp teeth on the ring edge.
- **Torque Wave variant:** planted rim-first in gravel, spinning, a ring of gravel and dust erupting upward around it in a crown, and a calm clear circle around the Shield.

**Dormant prompt**
```
[STYLE PREFIX] product-style prop sheet, [THE SHIELD], dormant and worn, hanging on a plain shop wall from an iron hook, gears still, slightly dulled colors, light dust and scuffs, star cut-outs showing pale steel behind them, front view and a three-quarter view showing the blue striped side wall, on a gunmetal background, cold rim light
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], glow, glowing gears, solid flat disc, missing star cut-outs, wrong star count, extra gears, four-point stars, shield shaped like a heater or kite, sci-fi energy shield

**Spinning prompt**
```
[STYLE PREFIX] product-style prop sheet, [THE SHIELD], spinning, the six planet gears and sun gear in flat motion blur, a red, white and blue blur with flat motion arcs, front view and three-quarter view, on a gunmetal background, cold rim light
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], glow, light beams, solid flat disc, missing star cut-outs, wrong star count, extra gears, four-point stars, lightning bolts, blurry bloom

**Torque Wave prompt**
```
[STYLE PREFIX] prop sheet, [THE SHIELD] planted rim-first in a gravel trackbed and spinning, a ring of gravel and dust erupting upward around it in a crown shape, flat stones frozen in the air, a calm clear circle of bare ground around the Shield, side view, gunmetal night background, cold rim light
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], glow, beam, laser, energy blast, shockwave rings of light, solid flat disc, missing star cut-outs, wrong star count, four-point stars

### 2.9 Props

**Turret lathe (1970s)**
```
[STYLE PREFIX] prop sheet, a 1970s turret lathe, heavy cast-iron bed, six-station turret, hand wheels, chuck, freshly rebuilt and clean with a few flat orange rust patches left on the base, three-quarter view, on a plain steel gray background, cold rim light
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], CNC touchscreen, glow, robot arm, readable text, extra people

**Freight train flatcars with crated machines**
```
[STYLE PREFIX] prop sheet, a long freight train flatcar loaded with large wooden shipping crates strapped down with chains, one crate with its side slats open to show a machine tool inside, side view, on a plain gunmetal background, cold rim light
```
- Aspect ratio: 16:9
- Negative prompt: [GLOBAL NEGATIVE PROMPT], readable text on crates, logos, graffiti, glow, people

---

## 3. Page Layout and Aspect Ratios

Page canvas: 6.625 x 10.25 in (US comic), portrait. Ratios below are derived from the panel rectangles in the implemented comic (`PAGES` in `js/app.js`, 800 x 1100 page), rounded to a common ratio.

| Panel | Role | Aspect ratio | Suggested layout |
|---|---|---|---|
| Prologue Splash | Full-page aerial, dawn, sign and banner | 2:3 | Entire page |
| P1 Panel 1 | Plant floor packed, President at podium | 3:2 | Top, full width |
| P1 Panel 2 | Dan and Walt in the crowd | 7:10 | Bottom left, tall |
| P1 Panel 3 | President points at the crowd | 7:10 | Bottom right, tall |
| P2 Panel 1 | President tours with Hollis | 5:2 | Top, full width strip |
| P2 Panel 2 | President at Dan's station, turret lathe | 1:1 | Middle left |
| P2 Panel 3 | President looks from Dan to Hollis | 1:1 | Middle right |
| P2 Panel 4 | Hollis offers Dan her hand | 2:1 | Bottom, full width |
| P3 Panel 1 | Overseas boardroom, screens | 5:2 | Top, full width strip |
| P3 Panel 2 | Shao watches the speech | 1:1 | Middle left |
| P3 Panel 3 | Voss across the table | 1:1 | Middle right |
| P3 Panel 4 | Shao slides the file | 2:1 | Bottom, full width |
| P7 Panel 1 (p7a) | Small, mercenaries open fire | 7:6 | Top left, small |
| P7 Panel 2 (p7b) | Large, Dan raises the Shield | 7:8 | Top right, large |
| P7 Panel 3 (p7c) | Dan leaps and lands | 7:6 | Middle left |
| P7 Panel 4 (p7d) | Wide splash, the Torque Wave | 2:1 | Middle, splash width |
| P7 Panel 5 (p7e) | Small, Dan looks up | 8:5 | Bottom left, small |
| P7 Panel 6 (p7f) | Krait and the detonator | 3:1 | Bottom right, wide strip |

---

## 4. Panel Prompts

Each prompt is standalone: the style prefix and character blocks are inlined so you can paste it as is. Lettering is added in post. The art itself has no lettering except the permitted texts in the scope line.

### PROLOGUE SPLASH (full page)

**Panel: Prologue Splash**
- Aspect ratio: 2:3 (portrait)
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. High aerial view of Ashford Falls, Ohio, at dawn. A shuttered steel and bearing plant of dead brick buildings beside a frozen river, cold smokestacks with no smoke, shattered windows, rust shown as flat oxidized orange patches. A large rusted sign on the nearest building roof reads "ASHFORD STEEL - EST. 1911". Over the plant gate, workers on lifts are hanging a new banner that reads "COMING HOME: AMERICAN MANUFACTURING INITIATIVE" in white block capitals on a blue field with red trim. An American flag on a pole at the gate, the red, white and blue banner and flag the only bright color in the scene. Frost blue-gray sky #8FA3B5 with a thin amber line of sunrise #FFD9A0 on the horizon, cold pale steel rim light on rooftops. Empty sky area at the top for a caption box and a clear strip at the bottom for a second caption.
```
- Negative prompt:
```
text other than the sign and the banner, extra words, misspelled banner, letters, captions, speech bubbles, watermark, signature, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, smoke from chimneys, cars, cluttered background, anime style, oversaturated neon colors
```
- Post (captions): "We designed the world's machines. Then we shipped the work of building them overseas." (top) / "Now we're bringing it back." (bottom)

### PAGE 1

**Panel: P1 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide interior of a working steel plant floor, packed with cheering workers in work clothes and hard hats, TV camera crews, and American flags hanging from the rafters. At the far end on a low stage, [THE PRESIDENT: the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person] stands at a podium with two flags behind him, small in the frame. Strong one-point perspective down the hall, cold steel gray with the flags and a blue stage skirt as the only bright color. Open space at top left and top right for a caption and a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, real person likeness, caricature, readable podium seal, readable signs
```
- Post (lettering): caption "We never stopped inventing. We stopped making." (top left); caption "Dan Reyes-Holloway, 34, third-generation machinist. Beside him, his old foreman Walt Kowalski, 61." may sit here or on Panel 2; balloon, THE PRESIDENT: "America never stopped inventing. The best engineers in the world are still right here. What we lost was the making. The factories. The jobs. That's what we're bringing home."

**Panel: P1 Panel 2**
- Aspect ratio: 7:10
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium two-shot from the shoulders up inside a crowd of workers watching a speech. In front: [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots], arms folded, listening with a thoughtful, guarded look. Beside him: [WALT: Walt Kowalski, 61, old foreman, stocky and weathered, close-cropped gray hair, gray mustache, deep lines around the eyes, faded plaid work shirt under a canvas vest, work trousers, steel-toe boots, arms often crossed], leaning toward Dan to speak. Background crowd in simple gunmetal silhouettes with a few hard hats, a flag edge at the corner. Cold pale steel rim light from the left. Open space above both heads for two balloons.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, other recognizable characters in foreground
```
- Post (lettering): balloon, WALT: "Believe him?"; balloon, DAN: "I believe him. I just know how hard it is to move a factory."

**Panel: P1 Panel 3**
- Aspect ratio: 7:10
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Low-angle medium shot of [THE PRESIDENT: the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person] at the podium, one arm extended, pointing straight out toward the viewer as if at the crowd, flags behind him, firm and warm expression. Cold steel gray plant interior behind, the flags in red, white and blue as the only bright color. Strong rim light from the right. Open space top left for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, real person likeness, caricature, readable podium seal, menacing expression
```
- Post (lettering): balloon, THE PRESIDENT: "If we can't make our own steel, our own parts, our own medicine, then we depend on someone else for our survival. Not anymore."

### PAGE 2

**Panel: P2 Panel 1**
- Aspect ratio: 5:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide panoramic shot along the plant floor. [THE PRESIDENT: the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person] walks the line with a small group of aides in dark coats, beside [HOLLIS: Elaine Hollis, CEO of Hollis Bearing Co., early 50s, sharp practical expression, short silver-brown hair, navy blazer over a plain white shirt, dark trousers, flat practical shoes, a plain visitor hard hat tucked under one arm], who gestures at the long rows of idle, covered machine tools. Strong perspective down the floor, flat orange rust patches on old machines, pale dawn light from high windows #FFD9A0 as flat shafts. Open space at top left and top right.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, real person likeness, caricature, glowing machines
```
- Post (lettering): caption "Elaine Hollis, CEO of Hollis Bearing Co. Her family company moved production overseas in 2004."; balloon, HOLLIS: "We're bringing our whole line back. Sixty machines, two hundred jobs. But the people who set it up retired years ago. Nobody here knows how to stand it up."

**Panel: P2 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot at a workstation. [THE PRESIDENT: the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person] stops and looks down with interest. In the foreground: [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots], kneeling beside a freshly rebuilt 1970s turret lathe (heavy cast-iron bed, six-station turret, hand wheels), one hand on a hand wheel, rags and tools laid out neatly on the bench. The lathe is clean and still, no glow. Walt stands behind with arms crossed. Cold steel gray with warm amber window light on the lathe only. Open space at top for balloons.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, CNC touchscreen, real person likeness, caricature
```
- Post (lettering): balloon, THE PRESIDENT: "Who restored this?"; balloon, WALT: "Him. Dan can set up a line faster than anybody I've seen in forty years."; caption "A 1970s turret lathe, rebuilt by hand. It already runs smooth."

**Panel: P2 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Close two-shot, the President turning his head to look between two people: [THE PRESIDENT: the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person] in the foreground left, eyes moving from Dan (partly visible at the edge, denim jacket) toward [HOLLIS: Elaine Hollis, CEO of Hollis Bearing Co., early 50s, sharp practical expression, short silver-brown hair, navy blazer over a plain white shirt, dark trousers, flat practical shoes, a plain visitor hard hat tucked under one arm] at the right, who watches him back with a steady, practical expression. Soft cold rim light, simple gunmetal background. Open space at top left.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, real person likeness, caricature, glowing, extra characters
```
- Post (lettering): balloon, THE PRESIDENT: "Then he's your man. Get that line home and get it running."

**Panel: P2 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide two-shot. [HOLLIS: Elaine Hollis, CEO of Hollis Bearing Co., early 50s, sharp practical expression, short silver-brown hair, navy blazer over a plain white shirt, dark trousers, flat practical shoes, a plain visitor hard hat tucked under one arm] on the left offers her hand to [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots] on the right, who looks at the hand, then at her, with a quiet nod. Between them the rebuilt turret lathe in soft focus, a stack of shipping crates behind. Warm amber window light #FFD9A0 as a flat shaft across them, cold steel gray elsewhere. Open space at top left and top right for two balloons.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glowing, extra characters
```
- Post (lettering): balloon, HOLLIS: "Ninety days. Can you do it?"; balloon, DAN: "Ship me the machines."

### PAGE 3

**Panel: P3 Panel 1**
- Aspect ratio: 5:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide shot of a sleek overseas corporate boardroom at night, long dark table, a wall of large flat screens showing the Ashford speech (tiny figure at a podium with flags). The screens carry the words "MERIDIAN PACIFIC CONSORTIUM" in clean white capitals (the third permitted text). Cold pale steel and gunmetal tones, a sliver of oxidized orange from the city outside the window. No people yet, empty chairs. Open space at lower left for a caption.
```
- Negative prompt:
```
text other than MERIDIAN PACIFIC CONSORTIUM, extra words, text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload
```
- Post (lettering): caption "A boardroom overseas. Meridian Pacific Consortium, a state-backed manufacturing giant, owns the plant Hollis is leaving." (If the model garbles the screen text, remove it from the art and add the screen text in post.)

**Panel: P3 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot of [SHAO: Director Shao Lin-wei, state-backed manufacturing executive, early 50s, individual fictional character, neat short black hair with gray at the temples, narrow rimless glasses, dark charcoal suit, white shirt, no tie, calm cold expression, still hands] seated at the head of the boardroom table, hands still and folded, watching a screen offscreen that reflects the Ashford speech in his glasses as flat blocks of color. Cold pale steel rim light, gunmetal boardroom behind. Respectful, individual portrayal, no stereotype. Open space at the right for a balloon and below for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, ethnic caricature, exaggerated facial features, stereotype costume, cartoon villain look
```
- Post (lettering): caption "Director Shao Lin-wei watches the Ashford speech."; balloon, SHAO: "If Hollis brings its line home and it works, fifty companies follow. Then a hundred. They won't need us."

**Panel: P3 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot across the boardroom table. [VOSS: Marguerite Voss, American logistics fixer, polished executive in her late 40s, sleek silver-streaked dark hair in a tight low chignon, sharp composed expression, tailored charcoal gray suit with a crisp white blouse, small steel lapel pin, upright confident posture] sits with one leg crossed, a thin tablet face-down in front of her, a faint knowing half-smile. Shao's shoulder and folded hands appear as a soft foreground silhouette at the edge. Cold pale steel rim light, gunmetal background. Open space at top left for a caption and at bottom right for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, cartoon villain look, cleavage, ethnic caricature
```
- Post (lettering): caption "Marguerite Voss, an American logistics fixer who sells to the highest bidder."; balloon, VOSS: "Then the line never runs. Ships get delayed. Crates get damaged. Parts go missing. A factory that can't start is just a press release."

**Panel: P3 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide close view of the boardroom table. A manila folder slides across the dark table from [SHAO: Director Shao Lin-wei, state-backed manufacturing executive, early 50s, individual fictional character, neat short black hair with gray at the temples, narrow rimless glasses, dark charcoal suit, white shirt, no tie, calm cold expression, still hands]'s hand at left toward [VOSS: Marguerite Voss, American logistics fixer, polished executive in her late 40s, sleek silver-streaked dark hair in a tight low chignon, sharp composed expression, tailored charcoal gray suit with a crisp white blouse, small steel lapel pin, upright confident posture]'s hand at right. The folder tab is blank and unlettered (the label HOLLIS / ASHFORD is added in post). Cold pale steel light on the folder edge, gunmetal table, oxidized orange accent from the city window. Open space at top right for a balloon.
```
- Negative prompt:
```
readable text on the folder, any lettering, text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload
```
- Post (lettering): add the folder label "HOLLIS / ASHFORD" in post; caption "Shao slides over a file marked HOLLIS / ASHFORD."; balloon, SHAO: "The President's program rests on the first plants succeeding. Make this one fail."

### PAGE 7 (night, West Virginia mountains)

Setting for all Page 7 panels: night, steep West Virginia mountains, a freight train of flatcars carrying crated machines, Krait's mercenaries in trucks running without lights. Dan wears his denim jacket AND a hard hat (use the DAN, HARD HAT block). Nothing is ever fired at people by Dan; the Shield only blocks and the ground wave only hurls.

**Panel: P7 Panel 1**
- Aspect ratio: 7:6
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Night, steep dark West Virginia mountain slopes, a freight train on a curving track at left, flatcars loaded with crated machines. On a gravel road below, [KRAIT: Krait, mercenary leader, individual, lean and wiry man in his 40s, shaved head, scarred jaw, dark tactical vest and plates over dark fatigues, gloves, boots, matte dark gear with no insignia, no patches, no flags] stands in the open door of a dark pickup truck running without lights, rifle raised, with more mercenaries in matching dark gear in trucks behind him. Small flat muzzle flashes in amber #FFD9A0 on the trucks, tracer dashes toward the train, no lights on the vehicles. Cold moonlit gunmetal and blue-gray, pale steel rim light. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, insignia, flags, glowing vehicles, headlights, gore, bodies
```
- Post (lettering): caption "Night, the West Virginia mountains. Krait's mercenaries, in trucks running without lights, open fire on the freight train."

**Panel: P7 Panel 2**
- Aspect ratio: 7:8
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Large panel. Night on a flatcar with crated machines. [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat] stands braced, raising [THE SHIELD: the Shield: a machined-metal planetary gear set, round, an outer ring gear in red and white with fine teeth on its inner edge and a blue side wall with fine white stripes, six red planet gears each with a white five-point star cut-out, one thick red hollow sun gear, no glow, not high-tech] in front of him with both hands, gears spinning in flat motion blur. The six red star-cut planet gears orbit into place around the sun gear so they cover the front, and bullets are drawn as flat dashes striking the Shield and ricocheting off in small flat white sparks. The Shield is the brightest red, white and blue in the frame. Cold gunmetal night, moonlight rim, no glow. Open space at top left for the sound effect and bottom right for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glow, energy shield, light beams, wrong star count, four-point stars, bare head
```
- Post (lettering): SFX "CHK-CHK-CHK-CHK-CHK-CHK" (top left); caption "Dan raises the shield. The gears spin and six star-gears orbit into place to block every round."

**Panel: P7 Panel 3**
- Aspect ratio: 7:6
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Night. [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat] leaps from the open side of a freight car, seen mid-air then landing hard in a crouch on the gravel trackbed between the train and the trucks, stones scattering, the Shield held at his side. In the background the dark trucks and mercenaries closing in, Krait pointing. Moonlit gunmetal, pale steel rim light. Open space at top left for a caption and at right for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glow, bare head
```
- Post (lettering): caption "Dan leaps from the freight car and lands hard on the trackbed."; balloon, KRAIT: "He's alone. Rush him!"

**Panel: P7 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide splash. Night, a gravel trackbed between the freight train on the left and dark trucks on the right. In the center [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat] kneels on one knee, driving the rim of [THE SHIELD: the Shield: a machined-metal planetary gear set, round, an outer ring gear in red and white with fine teeth on its inner edge and a blue side wall with fine white stripes, six red planet gears each with a white five-point star cut-out, one thick red hollow sun gear, no glow, not high-tech] into the gravel, its gears a red, white and blue blur. A ring of gravel and dust erupts UPWARD around him like a crown and rolls outward as a wave across the trackbed. Mercenaries are knocked off their feet with their arms over their faces as stones hail down, rifles flying through the air, one truck rocking up onto two wheels. Dan kneels untouched in a clear calm circle of bare ground in the center. Nothing is fired at anyone. Dramatic symmetrical composition, flat stones frozen in the air, gunmetal night, pale steel rim light, no glow. Leave open space at the top for the sound effects.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glow, beam, laser, energy blast, shockwave rings of light, gore, bodies, blood, fireball, wrong star count, four-point stars, bare head
```
- Post (lettering): SFX "VRRRRRRMMMMM - THOOOOOM" (large, top); small SFX "tik tik tak tik" and "tik tak tik" near the falling stones; caption "Dan drops to one knee and drives the shield's rim into the gravel. Rotation sends a shock wave rolling outward."

**Panel: P7 Panel 5**
- Aspect ratio: 8:5
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Small close shot. [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat] kneeling in the settling dust, looking up with a calm, steady expression, the Shield beside him, its gears spinning down, the blur resolving into red, white and blue teeth and star cut-outs. A few flat pebbles still falling. Moonlit gunmetal night, pale steel rim light. Open space at top right for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glow, bare head
```
- Post (lettering): caption, DAN: "Every machine has a drive. This one's mine."

**Panel: P7 Panel 6**
- Aspect ratio: 3:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide strip. Night, the dirt beside an overturned truck. [KRAIT: Krait, mercenary leader, individual, lean and wiry man in his 40s, shaved head, scarred jaw, dark tactical vest and plates over dark fatigues, gloves, boots, matte dark gear with no insignia, no patches, no flags] lies dazed on his back in the dust, dirt on his face, one gloved hand slamming down on a small black detonator box on the ground. In the far background, the dark silhouette of a rail bridge above a gorge, shown as a flat shape. Cold gunmetal and blue-gray, a thin orange rim light at the edge of the frame only. Open space on the right for a sound effect and at the bottom left for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, insignia, flags, gore, blood, glowing, explosion already happening
```
- Post (lettering): SFX "KRA-THOOM" (large, top right); caption "Krait, dazed in the dirt, slams his hand down on a detonator."

---

## 5. Post-Production Checklist
- Letter all captions, balloons and sound effects in post (the art has none). List per panel is in Section 4.
- Check the splash sign reads exactly "ASHFORD STEEL - EST. 1911" and the banner reads exactly "COMING HOME: AMERICAN MANUFACTURING INITIATIVE"; repaint the text in post if the model garbles either.
- Check the P3 Panel 1 screens read "MERIDIAN PACIFIC CONSORTIUM" (the only other permitted text); repaint or letter in post if garbled. The file on P3 Panel 4 stays unlettered in the art; add "HOLLIS / ASHFORD" in post.
- Verify the Shield in P7 Panels 2 to 5 matches the sheet: six planet gears, five-point stars, hollow sun gear, machined metal, no glow.
- Verify the Torque Wave crown in P7 Panel 4 reads as an upward eruption of gravel and dust around a clear circle, not a beam fired at people; no one is shot or hit by a weapon from Dan.
- Verify Dan wears his denim jacket every time, and a hard hat in every Page 7 panel; no suit, no exoskeleton, no gear-shaped eyes, no light cables.
- Verify the President is a generic, respectful depiction with no real-person likeness, and that Shao, Voss and Krait show no ethnic caricature and no insignia.
- Color-correct so the red/white/blue accents stay the brightest saturated color in each scene; amber appears only as window or dawn light.
