# GEARHEART Issue #1: "The Forge Awakens" | AI Image Prompt Pack

Scope: Prologue splash + Pages 1-3 (10 panels). Art is generated WITHOUT lettering. The only legible text allowed in any image is the rusted sign "ASHFORD STEEL - EST. 1911" on the splash. All captions are added later in post.

---

## 1. Style Guide

**Look:** flat graphic comic art. Strong, simple silhouettes, hard-edged shapes, minimal texture, dramatic rim lighting that separates figures from dark backgrounds.

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
| Energy glow | Core amber-white | `#FFD9A0` |
| Cold dawn sky | Frost blue-gray | `#8FA3B5` |

Rules: steel gray and gunmetal dominate every frame (about 70%). Oxidized orange marks decay (rust, old signs, window glow of dead places). Red/white/blue appears ONLY as hope: the flag, the photo, the Shield, tiny hints in the finale. Energy glow is amber-white, never red or blue.

### Line and shading rules
- Outline weight: medium, uniform (about 3 px at 1024 px width), dark gunmetal, not pure black. Slightly thicker on the outer silhouette, thinner for interior detail.
- Shading: cel style, base tone + one shadow tone + optional second shadow. No soft airbrush, no photoreal texture.
- Rim lighting: a thin, crisp edge light on one side of every main subject. Cold pale steel rim in dead scenes; warm amber-white rim once the core wakes.
- Glow: flat concentric bands of color, not blurry bloom.
- Texture: sparse. Rust shown as flat orange patches, never noisy grunge.
- Backgrounds: simplified, large shapes, strong perspective lines.

### Consistency tips
1. Paste the **Style Prefix** and the relevant **Character Block** into every prompt. Do not paraphrase them.
2. Lock a seed per page, then vary only the panel description. Keep the same model and sampler across the issue.
3. Generate Dan's sheet first (Section 2), pick the best, and use it as an image reference (IP-Adapter / character reference, weight 0.5 to 0.7) for later panels.
4. Generate the Shield alone first, then use it as a reference for page 3 panel 3.
5. Keep Dan's jacket phase and suit phase distinct. Pages 1-2: denim. Page 3 panel 2 onward: steel suit.
6. Leave clean negative space where captions and balloons will go (noted per panel).
7. Fix text artifacts in post. Never accept stray letters in the art, except the splash sign.

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

**DAN, PHASE A (denim)**
```
Daniel "Dan" Reyes-Holloway, 34, broad-shouldered working-class American machinist, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, dark work trousers, scuffed boots
```

**DAN, PHASE B (steel suit)**
```
Daniel "Dan" Reyes-Holloway, 34, broad-shouldered, short dark hair, light stubble, wearing a reinforced steel-plated suit grown from factory plating (gray riveted plates, orange rust-tinted seams, a worn denim collar remnant at the neck), eyes with faint gear-shaped irises glowing amber-white, thin cables of amber-white light running through both forearms
```

**THE SHIELD**
```
the Shield: a round planetary gear system, thick red outer ring gear with fine teeth on its inner edge and a blue side wall with fine white stripes, six red planet gears each with a white five-point star cut-out, one thick red central sun gear with a hollow center
```

---

## 2. Character and Prop Sheets

### 2.1 Dan Reyes-Holloway (hero)

**Bio for the artist:** 34, former machinist, laid off when the plant closed. Honest, tired, stubborn. His father worked this line. Reads as an everyman: sturdy, not a model.

- Phase A (Pages 1-2): denim jacket, work clothes, dull colors, no glow.
- Phase B (Page 3 onward): steel suit grown out of the plant's plating, gear-shaped irises, light cables in forearms. The denim collar remnant is a deliberate human touch.
- Silhouette: broad shoulders, slightly slumped in Phase A, upright in Phase B.

**Sheet prompt (turnaround, phase A and B)**
```
[STYLE PREFIX] character design sheet, two full-body standing figures side by side on a plain steel gray background, left: [DAN, PHASE A], right: [DAN, PHASE B], front view and three-quarter view, neutral pose, even spacing, rim lighting from the left
```
- Aspect ratio: 16:9
- Negative prompt: [GLOBAL NEGATIVE PROMPT], cropped, cut off feet, extra characters, busy background

### 2.2 Marguerite Voss (supporting, for consistency)

> **Note:** Marguerite does NOT appear in Pages 1-3. This sheet exists so the character is locked in before later pages.

**Descriptor block**
```
Marguerite Voss, polished corporate executive in her late 40s, sleek silver-streaked dark hair in a tight low chignon, sharp composed expression, tailored charcoal gray suit with a crisp white blouse, slim pencil skirt or trousers, polished black heels, small steel lapel pin, upright confident posture
```

**Sheet prompt**
```
[STYLE PREFIX] character design sheet, full-body standing figure of [MARGUERITE VOSS descriptor], front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting, a sliver of oxidized orange in the background to hint at decay she profits from
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], cartoon villain look, cleavage, cropped, extra characters

### 2.3 The Shield (key prop)

**Construction:** a planetary gear system. Red outer ring gear with fine teeth on the inside edge; the outer rim's side wall is blue with fine white stripes. Six red planet gears, each with a white five-point star cut out of it. One thick red central sun gear with a hollow center.

- **Dormant variant:** gears still, colors slightly dulled, small dust and scuffs, stars show as pale steel through the cut-outs, no glow.
- **Active variant:** gears spinning (flat motion arcs), colors saturated, amber-white light glowing through the star cut-outs and the hollow center, rim-lit.

**Dormant prompt**
```
[STYLE PREFIX] product-style prop sheet, [THE SHIELD], dormant, gears still, slightly dulled colors, light dust and scuffs, star cut-outs showing pale steel behind them, no glow, front view and a three-quarter view showing the blue striped side wall, on a gunmetal background, cold rim light
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], solid flat disc, missing star cut-outs, wrong star count, extra gears, four-point stars, shield shaped like a heater or kite

**Active prompt**
```
[STYLE PREFIX] product-style prop sheet, [THE SHIELD], active, gears spinning with flat motion arcs, saturated red, white and blue, amber-white light #FFD9A0 glowing through the five-point star cut-outs and the hollow center, front view and three-quarter view, on a gunmetal background, warm rim light
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], solid flat disc, missing star cut-outs, wrong star count, extra gears, four-point stars, blurry bloom, lightning bolts

---

## 3. Page Layout and Aspect Ratios

Page canvas: 6.625 x 10.25 in (US comic), portrait. Splash is a full page.

| Panel | Role | Aspect ratio | Suggested layout |
|---|---|---|---|
| Prologue Splash | Full-page aerial | 2:3 | Entire page |
| P1 Panel 1 | Plant interior, Dan walks the line | 16:9 | Top, full width, tall band |
| P1 Panel 2 | Framed photo close-up | 1:1 | Middle left, half width |
| P1 Panel 3 | Dan looks up, machines hum | 1:1 | Middle right / bottom, half width |
| P2 Panel 1 | Core breaks through floor | 16:9 | Top, full width |
| P2 Panel 2 | Dan reaches, shielding eyes | 4:5 | Middle left, narrow tall |
| P2 Panel 3 | Light threads into Dan, full width | 21:9 | Bottom, full width |
| P3 Panel 1 | Black panel | 21:9 | Top, thin full width strip |
| P3 Panel 2 | Dan in suit, standing in glow | 4:5 | Middle, large |
| P3 Panel 3 | Disc ejected, Dan catches Shield | 16:9 | Bottom, full width |

---

## 4. Panel Prompts

Each prompt is standalone: the style prefix and character blocks are inlined so you can paste it as is. Lettering is added in post.

### PROLOGUE SPLASH (full page)

**Panel: Prologue Splash**
- Aspect ratio: 2:3 (portrait)
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. High aerial view of Ashford Falls, Ohio, at dawn. Rows of dead brick factories line a frozen river, cold smokestacks with no smoke, shattered windows, rust shown as flat oxidized orange patches. A large rusted sign on the nearest factory roof reads "ASHFORD STEEL - EST. 1911" (the only text in the image). A tall water tower in the foreground carries a tattered American flag, its red, white and blue the only bright color in the scene. Frost blue-gray sky #8FA3B5 with a thin pale gold line of sunrise on the horizon, cold pale steel rim light on rooftops. Empty sky area at the top for a caption box.
```
- Negative prompt:
```
text other than the sign, extra words, letters, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, smoke from chimneys, people, cars, cluttered background, anime style, oversaturated neon colors
```
- Caption (post): "Once, this country built everything. Then one day, it stopped."

### PAGE 1

**Panel: P1 Panel 1**
- Aspect ratio: 16:9
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Interior of an abandoned steel plant, long silent assembly line receding in strong one-point perspective, dead lathes and presses, broken skylights letting in cold pale dawn shafts, flat orange rust patches on machines. Daniel "Dan" Reyes-Holloway, 34, broad-shouldered working-class American machinist, short dark hair, light stubble, tired kind brown eyes, worn faded denim jacket over a gray work shirt, dark work trousers, scuffed boots, walks slowly down the line, one hand trailing along a dead lathe, seen from behind and slightly to the side, pale steel rim light on his shoulder. Mood: silent, heavy, dusty. Open space at top left for a caption box.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, other people, glowing machines, steel suit, cluttered background, anime style, oversaturated neon colors
```
- Caption (post): optional narration, e.g. "Three years since the whistle."

**Panel: P1 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Close-up of a framed vintage photograph hanging crooked on a rusted factory wall, flat orange rust streaks around the frame, cracked glass corner. In the photo, a line of smiling factory workers in work clothes stands with arms around each other's shoulders, the front row includes one young man with short dark hair and a broad smile (Dan's father, resemblance to Dan: strong jaw, kind eyes). Photo rendered in flat warm faded tones with a tiny touch of red and blue in a worker's bandana and a small flag pin. Soft cold rim light along the frame edge. Dust motes as small flat specks.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, deformed faces, extra fingers, melted faces, cluttered background, anime style, oversaturated neon colors, Dan visible in frame
```
- Caption (post): optional, e.g. "Dad, front row. Always front row."

**Panel: P1 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot of Daniel "Dan" Reyes-Holloway, 34, broad-shouldered working-class American machinist, short dark hair, light stubble, tired kind brown eyes, worn faded denim jacket over a gray work shirt, looking up with wary surprise, head tilted toward the ceiling. Around him the dead machines of the assembly line begin to glow faintly, thin amber-white edge lines #FFD9A0 tracing their outlines, a low hum suggested by flat concentric ripple arcs in the air. Warm amber rim light on Dan's face and jacket for the first time, the rest still cold steel gray.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, steel suit, gear-shaped eyes, bright explosion, cluttered background, anime style, oversaturated neon colors
```
- Caption (post): sound effect "hmmmmmmm" lettered in post.

### PAGE 2

**Panel: P2 Panel 1**
- Aspect ratio: 16:9
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide shot of the plant floor. A buried power core, a prototype fusion-kinetic engine from a shuttered defense contractor, bursts up through the cracked concrete floor in a halo of amber-white light #FFD9A0 drawn as flat concentric bands. The core is a sphere-like machined mass of gunmetal casing with open sections, and gears of every size, large and tiny, spin inside it, shown with flat motion arcs. Broken concrete slabs tilt upward, debris frozen in mid-air. Dan, small in the frame, in a worn denim jacket, stands far back in silhouette. Strong warm rim light on all debris edges, deep gunmetal shadows elsewhere.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, blurry bloom, noisy grunge texture, low contrast, nuclear mushroom cloud, lightning bolts, fire, cluttered background, anime style, oversaturated neon colors, steel suit
```
- Caption (post): sound effect "KRAAAKK" lettered in post.

**Panel: P2 Panel 2**
- Aspect ratio: 4:5
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot of Daniel "Dan" Reyes-Holloway, 34, broad-shouldered working-class American machinist, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, one arm raised to shield his eyes from the blinding glow, the other hand reaching forward toward the core, fingers open and trembling. The glow comes from the right edge of frame, flat amber-white bands #FFD9A0, hard warm rim light on his hand, cheek and jacket shoulder, the rest of him in gunmetal shadow. Expression: awe mixed with fear. Dark background with a few small spinning gear silhouettes.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, blurry bloom, noisy grunge texture, low contrast, extra fingers, deformed hands, extra limbs, steel suit, gear-shaped eyes, cluttered background, anime style, oversaturated neon colors
```
- Caption (post): optional narration.

**Panel: P2 Panel 3**
- Aspect ratio: 21:9
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Full-width panoramic shot. The power core on the left fires a thousand fine threads of amber-white light #FFD9A0, drawn as many thin flat lines fanning out, converging into the chest of Daniel "Dan" Reyes-Holloway, 34, in a worn denim jacket, who stands on the right with head thrown back and arms slightly out, body lit by hard warm rim light. Behind him, along the whole assembly line, every machine lights up at once with amber-white outlines and window glows, repeating to the vanishing point. Dramatic symmetrical perspective, deep gunmetal shadows between the lit machines.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, blurry bloom, noisy grunge texture, low contrast, lightning bolts, explosions, extra fingers, deformed hands, extra limbs, cluttered background, anime style, oversaturated neon colors, steel suit fully formed
```
- Caption (post): sound effect "VRRRMMMM" lettered in post.

### PAGE 3

**Panel: P3 Panel 1**
- Aspect ratio: 21:9
- Prompt:
```
flat graphic comic illustration, near-pure black panel #0B0D10, almost entirely empty, with only very faint hints of sound waves and gear glints: a few barely visible thin concentric arcs in dark gunmetal #23282E and two or three tiny pale steel gear-tooth glints scattered near the center, extremely low contrast, minimal, silent, no figures, no text
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, bright colors, large shapes, figures, faces, photorealistic, 3d render, heavy gradients, blurry, stars, nebula, noise, grain
```
- Caption (post): sound effect lettered in post, e.g. a small "tick tick tick".

**Panel: P3 Panel 2**
- Aspect ratio: 4:5
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Heroic low-angle full-figure shot of Daniel "Dan" Reyes-Holloway, 34, broad-shouldered, short dark hair, light stubble, wearing a reinforced steel-plated suit grown from factory plating (gray riveted plates, orange rust-tinted seams, a worn denim collar remnant at the neck), eyes with faint gear-shaped irises glowing amber-white, thin cables of amber-white light running through both forearms. He stands upright in a pool of glow, fists loosely open, amber-white light #FFD9A0 in flat concentric bands behind him, strong warm rim light tracing the plate edges, the dead plant dark and steel gray behind. Calm, resolved expression.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, blurry bloom, noisy grunge texture, low contrast, extra fingers, deformed hands, extra limbs, full helmet, covered face, bulky mech armor, skin-tight spandex, red white and blue costume, cluttered background, anime style, oversaturated neon colors
```
- Caption (post): optional narration.

**Panel: P3 Panel 3**
- Aspect ratio: 16:9
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. The power core, on the left, ejects a disc from its center on a short arc of amber-white light #FFD9A0. On the right, Daniel "Dan" Reyes-Holloway in his steel-plated suit (gray riveted plates, orange rust-tinted seams, gear-shaped amber-white irises, light cables in forearms) catches it in one open hand. The disc is the Shield: a round planetary gear system, thick red outer ring gear with fine teeth on its inner edge and a blue side wall with fine white stripes, six red planet gears each with a white five-point star cut-out, one thick red central sun gear with a hollow center. The gears are dormant and still, stars gleaming with pale reflected light. The Shield is the brightest saturated red, white and blue in the frame. Warm rim light on Dan's hand and the Shield's edge, gunmetal shadows elsewhere.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, blurry bloom, noisy grunge texture, low contrast, extra fingers, deformed hands, extra limbs, solid flat disc, missing star cut-outs, four-point stars, wrong star count, extra gears, heater-shaped shield, cluttered background, anime style, oversaturated neon colors
```
- Caption (post): optional narration or sound effect "CLANG" lettered in post.

---

## 5. Post-Production Checklist
- Letter all captions, balloons and sound effects in post (the art has none, except the splash sign).
- Check the splash sign reads exactly "ASHFORD STEEL - EST. 1911"; repaint the text in post if the model garbles it.
- Verify the Shield on P3 Panel 3 matches the sheet: six planet gears, five-point stars, hollow sun gear.
- Color-correct so the red/white/blue accents stay the brightest saturated color in each scene.
