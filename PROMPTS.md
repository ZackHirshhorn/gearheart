# GEARHEART Issue #1: "Coming Home" | AI Image Prompt Pack

Scope: the complete Issue #1, Prologue splash plus Pages 1 to 13 and the Post-Credits Tease (52 prompts in all). Theme line: "We never stopped inventing. We stopped making." Art is generated WITHOUT lettering. The only legible text allowed in any image is: the rusted sign "ASHFORD STEEL - EST. 1911" and the banner "COMING HOME: AMERICAN MANUFACTURING INITIATIVE" on the splash. Everything else that reads as words on screen is optional and best added in post (see the "Optional in-art text" note below). All captions, dialogue and sound effects are added later in post.

**Tool-agnostic:** this pack is written for ANY capable image generator, not for one product. Where a setting names a specific model family, sampler or feature, read it as an example, not a requirement. Any model that can do flat graphic-novel art will work. Use your own tool's reference-image or character feature (sometimes called a character reference, style reference, consistency or identity feature) to hold the characters steady across panels, and use the author's own painting of the shield as the shield reference image.

**Optional in-art text (add in post if you prefer):** besides the two required splash texts above, the script shows a few words on screen: "MERIDIAN PACIFIC CONSORTIUM" on the boardroom wall screens (Page 3 Panel 1), the "DAY 87" wall calendar (Page 9 Panel 4), and "MADE IN USA" on the trucks (Pages 12 to 13). Image generators often garble small text, so the safest route is to leave those surfaces blank in the art and letter them in post. If you want to try them in-art, allow them as permitted text for that panel only and repaint in post if garbled.

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
These work in any generator; the parenthetical names are examples, not requirements.
1. Paste the **Style Prefix** and the relevant **Character Blocks** into every prompt. Do not paraphrase them.
2. If your tool supports a seed, lock one per page and vary only the panel description, and keep the same model and settings across the issue. If it does not, repeat the character blocks word for word and lean on the reference feature instead.
3. Generate the character sheets first (Section 2): Dan, Walt, Hollis, the President, Shao, Voss and Krait. Pick the best of each and feed it back in through your tool's own reference-image or character feature (for example an identity, character-reference or IP-Adapter control, roughly 0.5 to 0.7 strength where that is adjustable) so the same face carries across panels.
4. Use the author's own painting of the Shield as the Shield reference image in every Shield panel (Pages 6, 7, 8, 10, 13). Generate the Shield sheet (Section 2.8) only as a backup if you do not have the painting handy.
5. Dan has ONE look the whole issue: denim jacket, work shirt, jeans, boots. In the convoy, train and fight scenes he also wears a hard hat. Never change his clothes.
6. Leave clean negative space where captions and balloons will go (noted per panel).
7. Fix text artifacts in post. Never accept stray letters in the art, except the permitted texts listed in the scope line.

### Suggested generation settings (examples, adapt to your tool)
- Model: any strong flat-illustration or graphic-novel capable generator. In most diffusion-based tools (SDXL-class or newer) a flat-vector or comic style add-on (LoRA or style reference) at roughly 0.4 to 0.7 helps; tools that work from a plain prompt and a reference image are fine too.
- If your tool exposes them: steps around 28 to 35, guidance (CFG) around 5 to 7, a clean sampler such as DPM++ 2M Karras or the tool default. Skip any of these your tool does not offer.
- Generate at the listed aspect ratio, around 1 megapixel, then upscale about 2x (a low-strength refine pass, roughly 0.25 to 0.35, if your tool has one).
- Make a few variations, pick the best, then clean up hands and faces with your tool's inpaint or edit feature.

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

**THE PRESIDENT** (default block, generic; see Section 2.4 for the hinting and named-likeness options)
```
the President of the United States, generic respectful depiction, older man in his 60s with neat gray hair, dark suit, white shirt, red tie, small flag lapel pin, composed and warm authority, not a caricature, not any real person
```

**THE PRESIDENT (hinting / evocative, recommended)**
```
the President of the United States, a familiar US president archetype evoked only through silhouette and bearing: tall heavy-set older man, confident upright posture, a simple bold sweep of light hair as a clean graphic shape, a dark suit with a long bright red tie, a raised confident gesture, at a podium with US flags and an implied round presidential seal kept blank, not a portrait of any real person, no facial likeness
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

**Bio for the artist:** recognizable as a president by context: a podium with the presidential seal left blank, flags behind, dark suit, red tie, warm composed authority.

**Depiction options.** The author picks ONE and uses it everywhere the President appears (Pages 1, 2 and 12). Three options, from most cautious to least:

1. **Generic President (no resemblance).** Just a president by context, resembling nobody. Use the **THE PRESIDENT** block. Safest and simplest.

2. **Hinting / evocative (recommended).** Evoke a familiar US president archetype through silhouette, build, posture, a simple bold hair shape, a dark suit with a long red tie, a podium with flags and an implied (blank) presidential seal, and a confident gesture, WITHOUT naming any real person and WITHOUT asking for a photorealistic likeness. This reads as "clearly that kind of president" while staying a drawn, non-photoreal character. Use the **THE PRESIDENT (hinting / evocative, recommended)** block. This is the recommended path: it gives the knowing-wink resemblance the story wants while sidestepping the practical and legal friction of a named likeness.

3. **Named real-person likeness.** Depict a specific, named real public figure. This is the author's call. Two things to weigh, stated plainly:
   - Many image tools restrict or refuse identifiable real public figures. That is a terms-of-service and practical matter, so a named likeness may simply fail or be blocked in your chosen tool.
   - Before publishing a named likeness, get professional legal review (intellectual property, right of publicity, and defamation can all apply). This note is general information, not legal advice.

   If, after reading those caveats, the author chooses a named likeness of President Donald J. Trump, use this worked example. The President must read instantly as him in this flat comic style. Lock the signature features and keep them identical in every panel: the tall, broad, heavy-set frame; the high swept-back golden-blond swoop of hair; the broad square face and strong jaw; the warm tan against pale eye area; the small pursed mouth; the squinting, confident eyes; the dark navy suit with a long bright red tie hanging past the belt; the flag lapel pin. Push the silhouette (hair shape, tie length, shoulder width) harder than the fine facial detail: in flat cel art the silhouette carries the likeness. Keep it a respectful, heroic editorial-comic portrait, not a mocking caricature. Recognizable as the presidency by context: a podium with the seal removed or blank, flags behind.

   **Likeness tips:** (1) If the model refuses or drifts on a name, rely on the descriptive block and the silhouette cues; do not add the name. (2) Generate 8 to 12 candidates for the sheet, choose the most recognizable, then use it as the character reference (weight 0.6 to 0.7) for every President panel. (3) Hair and tie are the fastest recognition cues, so inpaint them first if a panel drifts. (4) Keep the face in a three-quarter or low-angle view; flat front views lose the jaw and brow structure.

**Sheet prompt (generic)**
```
[STYLE PREFIX] character design sheet, standing figure of [THE PRESIDENT] at a plain podium with two flags behind, front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], caricature, real person likeness, celebrity likeness, readable seal text, cropped, extra characters

**Sheet prompt (hinting / evocative, recommended)**
```
[STYLE PREFIX] character design sheet, standing figure of [THE PRESIDENT (hinting / evocative, recommended)], at a podium with two US flags and a blank round seal, one hand raised in a confident gesture, front view and three-quarter view, on a plain steel gray background, cold pale steel rim lighting
```
- Aspect ratio: 3:2
- Negative prompt: [GLOBAL NEGATIVE PROMPT], photorealistic, photo likeness, named celebrity, real person face, caricature, mockery, readable seal text, cropped, extra characters

For a named likeness (option 3), after reading the caveats above, swap in your own likeness description or your tool's own person reference, keep the rest of the panel wording, and drop "real person likeness" from the negative prompt for that panel only.

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

Page canvas: 6.625 x 10.25 in (US comic), portrait. The ratios for Prologue, Pages 1 to 3 and Page 7 are derived from the panel rectangles in the implemented comic (`PAGES` in `js/app.js`, 800 x 1100 page). Pages 4 to 6, 8 to 13 and the tease are not yet laid out in the viewer; the ratios below are sensible suggestions for a standard portrait page (a four-panel page as a 2x2 or a four-tier stack; adjust to taste).

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
| P4 Panel 1 | Rolling mill restart, coupling cracks | 3:2 | Top, full width |
| P4 Panel 2 | Dan grabs the live drive housing, current arc | 1:1 | Middle left |
| P4 Panel 3 | Hospital, Dan wakes, heart monitor | 1:1 | Middle right |
| P4 Panel 4 | Dan frees a seized press on the floor | 2:1 | Bottom, full width |
| P5 Panel 1 | Dan chalks the empty bay, ghosted line | 3:2 | Top, full width |
| P5 Panel 2 | Hand on grinder, tolerance readout | 1:1 | Middle left |
| P5 Panel 3 | Dan teaching new hires | 1:1 | Middle right |
| P5 Panel 4 | Walt hands Dan the Shield | 2:1 | Bottom, full width |
| P6 Panel 1 | Port of Baltimore, crates to freight train | 3:2 | Top, full width |
| P6 Panel 2 | Dan rides the train, Shield on back, hard hat | 7:10 | Bottom left, tall |
| P6 Panel 3 | Lightless trucks, Krait and mercenaries | 7:10 | Bottom right, tall |
| P6 Panel 4 | Dan atop a freight car in the moonlight | 2:1 | Bottom, full width |
| P7 Panel 1 (p7a) | Small, mercenaries open fire | 7:6 | Top left, small |
| P7 Panel 2 (p7b) | Large, Dan raises the Shield | 7:8 | Top right, large |
| P7 Panel 3 (p7c) | Dan leaps and lands | 7:6 | Middle left |
| P7 Panel 4 (p7d) | Wide splash, the Torque Wave | 2:1 | Middle, splash width |
| P7 Panel 5 (p7e) | Small, Dan looks up | 8:5 | Bottom left, small |
| P7 Panel 6 (p7f) | Krait and the detonator | 3:1 | Bottom right, wide strip |
| P8 Panel 1 | Train jumps the track, crates spill | 3:2 | Top, full width |
| P8 Panel 2 | Morning, Dan among the wreckage | 2:1 | Upper middle, wide |
| P8 Panel 3 | Hollis arrives, devastated | 1:1 | Lower middle |
| P8 Panel 4 | Dan kneels, hand on cracked spindle housing | 2:1 | Bottom, full width |
| P9 Panel 1 | Montage, flatbeds and cranes haul machines home | 3:2 | Top, full width |
| P9 Panel 2 | Dan matches parts, workers rebuild | 1:1 | Middle left |
| P9 Panel 3 | Walt teaches high-school kids on a lathe | 1:1 | Middle right |
| P9 Panel 4 | Calendar DAY 87, the line complete | 2:1 | Bottom, full width |
| P10 Panel 1 | Ribbon-cutting, Krait slips away | 3:2 | Top, full width |
| P10 Panel 2 | Hollis reaches for the start button, Dan freezes | 1:1 | Middle left |
| P10 Panel 3 | Shield catches the bursting pressure fitting | 7:8 | Middle right, large |
| P10 Panel 4 | Dan chases Krait, forklifts block exits | 2:1 | Bottom, full width |
| P11 Panel 1 | Agents arrest Krait, phone shows Voss thread | 3:2 | Top, full width |
| P11 Panel 2 | Voss arrested at a private airfield | 1:1 | Middle left |
| P11 Panel 3 | Dan, calm | 1:1 | Middle right |
| P11 Panel 4 | Hollis presses the button, line roars to life | 2:1 | Bottom, full width |
| P12 Panel 1 | First bearing off the line, Walt holds it up | 1:1 | Top left |
| P12 Panel 2 | President returns for the opening, on camera | 3:2 | Top right / upper, wide |
| P12 Panel 3 | President and Dan speak privately | 1:1 | Lower middle |
| P12 Panel 4 | Dan nods | 2:1 | Bottom, full width |
| P13 Closing Splash | Dan on the roof at sunrise, plant alive below | 2:3 | Entire page |
| Post-Credits Tease | Meridian Pacific boardroom, Shao watches | 16:9 | Single panel |

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

### PAGE 4 (The Gift)

Setting: the Ashford plant at night, then a hospital, then the plant floor. No glowing machines, no glowing eyes, no high-tech anything. The "current arc" in Panel 2 is a plain electrical arc on the machine, not a power the body emits.

**Panel: P4 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Night inside the old plant, a single work lamp. [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots] at the controls of a massive old rolling mill, and [WALT: Walt Kowalski, 61, old foreman, stocky and weathered, close-cropped gray hair, gray mustache, deep lines around the eyes, faded plaid work shirt under a canvas vest, work trousers, steel-toe boots] nearby. A heavy steel drive coupling cracks, a flat jagged break line, and a long drive shaft whips loose and swings toward Walt. Flat motion arcs on the shaft, a small chip of metal flying. Cold gunmetal night, warm amber work-lamp pool #FFD9A0, flat orange rust patches on the old mill. Open space at top for a sound effect.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glowing machines, gore, blood
```
- Caption/SFX (post): lettering is added later. SFX "KRAK" (top, near the coupling).

**Panel: P4 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Night, close shot. [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots] lunges and grabs the live drive housing with both hands to wrench it away from Walt. A plain electrical arc jumps from the machine over his hands and arms, drawn as sharp flat white and pale blue zigzags with small sparks, clearly coming FROM the machine, not from Dan. His body tenses, face clenched. The arc light throws a harsh flat rim on him; everything else is cold gunmetal night. Open space at top for a sound effect.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, energy radiating from the body, superpower aura, gore, burns
```
- Caption/SFX (post): lettering is added later. SFX "KZZZRRRAAAK" (across the arc).

**Panel: P4 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. A quiet hospital room. [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist and line setter, broad-shouldered working-class American, short dark hair, light stubble, tired kind brown eyes, strong forearms with old small scars] lies awake in a plain bed in a hospital gown, head turned toward a simple heart monitor on a stand beside him, listening intently rather than looking scared. The monitor is an ordinary medical box with a blank screen and a small transformer block, no readable numbers. Soft cold pale steel rim light from a window, calm gunmetal room, no glow. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable screen numbers, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing eyes, glowing machine, denim jacket in bed
```
- Caption/SFX (post): lettering is added later. Caption, DAN: "I could hear it. Not the beep. The machine. Its transformer was humming a little off."

**Panel: P4 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide shot back on the plant floor, day. [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist, broad-shouldered, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots] rests one hand flat on a large seized mechanical press; the press frees up and runs true, its ram moving smoothly, a few flat motion lines on the moving parts. No glow, no energy, just clean honest motion. Dan watches it with quiet wonder. Flat orange rust patches, cold steel gray with a warm amber window shaft on the press. Open space along the top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, steel suit, exoskeleton, gear-shaped irises, light cables, high-tech armor, glowing eyes, glowing machine, energy aura
```
- Caption/SFX (post): lettering is added later. Caption: "Whatever happened that night, machines talk to me now. Where they're worn. Where they're out of true. Where they need to go."

### PAGE 5 (What He Can Do)

Setting: the Ashford plant, day. Dan's gift is shown as skill and quiet knowing, never as glowing power. Panel 4 is the first appearance of the Shield; use the author's Shield painting as the reference.

**Panel: P5 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. A large empty plant bay, day. [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist, broad-shouldered, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots] walks the bare concrete floor with a piece of chalk, marking crisp layout lines and footprints without a tape measure. Over the empty floor, a faint ghosted overlay of a complete, perfectly laid-out production line in pale blue-gray line-art, like a plan he alone can see, clearly transparent and flat, not a real machine and not a hologram. Strong perspective, cold steel gray, pale dawn light from high windows. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing eyes, glowing overlay, neon hologram, steel suit, exoskeleton
```
- Caption/SFX (post): lettering is added later. Caption, DAN: "I see a whole line before it's built."

**Panel: P5 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Close shot of a worn pedestal grinder, its wheel spinning smooth with a few flat motion lines. [DAN: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt, strong forearms with old small scars] rests one hand on the grinder housing, calm and sure. A small plain gauge or dial readout sits on the bench, its face left blank in the art (the value is added in post). Flat orange rust patch on the base, cold steel gray, a warm amber edge light on the hand. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable gauge numbers, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing eyes, glowing machine, CNC touchscreen
```
- Caption/SFX (post): lettering is added later. Caption, DAN: "I make old machines run like new." Optional in-art text: the tolerance readout "+/- 0.0001" on the gauge; safest added in post.

**Panel: P5 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot of [DAN: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt, jeans, boots] teaching a small group of a dozen new hires in work clothes gathered around a machine tool. Dan's hand rests over a young trainee's hand on a hand wheel, guiding it, the other trainees in simple gunmetal silhouettes watching. Warm, focused mood, cold steel gray bay with warm amber window light on the group. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing eyes, steel suit, exoskeleton
```
- Caption/SFX (post): lettering is added later. Caption, DAN: "And I can teach it. That matters most. A factory is people."

**Panel: P5 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide two-shot at the tool crib. [WALT: Walt Kowalski, 61, old foreman, stocky and weathered, close-cropped gray hair, gray mustache, deep lines around the eyes, faded plaid work shirt under a canvas vest] lifts [THE SHIELD: a machined-metal planetary gear set, round, an outer ring gear in red and white with fine teeth on its inner edge and a blue side wall with fine white stripes, six red planet gears each with a white five-point star cut-out, one thick red hollow sun gear, dormant and slightly dulled, no glow, not high-tech] down from an iron hook over the tool crib and holds it out to [DAN: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt], who reaches for it with quiet emotion. The Shield is the only saturated red, white and blue in the frame. Cold steel gray crib wall, warm amber edge light. Open space at top left and top right for two balloons.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, solid flat disc, missing star cut-outs, wrong star count, four-point stars, sci-fi energy shield, steel suit, glowing eyes
```
- Caption/SFX (post): lettering is added later. Balloon, WALT: "Your dad would want you to have this back. Looks like you'll need it."

### PAGE 6 (The Convoy)

Setting: the Port of Baltimore by day, then a freight train bound for Ohio, then night in the West Virginia mountains. From here on Dan wears his denim jacket AND a hard hat (use the DAN, HARD HAT block) and the Shield rides on his back. Nothing is ever fired at people by Dan.

**Panel: P6 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide day shot of a working port, the Port of Baltimore. A gantry crane lowers large wooden shipping crates onto a long line of freight-train flatcars, chains and straps holding the crates down, one crate's side slats open to show a machine tool inside. Dock workers in hard hats and simple gunmetal silhouettes guide the load. Strong perspective, cold steel gray and gunmetal, water and sky in flat frost blue-gray, a small American flag on a mast as the only bright accent. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable text on crates, graffiti, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing machines
```
- Caption/SFX (post): lettering is added later. Caption: "The Port of Baltimore. Hollis's sixty machines, bound for Ohio by rail."

**Panel: P6 Panel 2**
- Aspect ratio: 7:10
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Tall shot of [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist, broad-shouldered, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat] riding a moving freight train, standing on a flatcar among crated machines, one hand on a crate, [THE SHIELD: a machined-metal planetary gear set, round, red and white ring, blue striped side wall, six red planet gears with white five-point star cut-outs, one thick red hollow sun gear, dormant, no glow] strapped flat on his back. Landscape blurs past in flat motion streaks. Daylight, cold steel gray and frost blue-gray, the Shield the only saturated accent. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, wrong star count, four-point stars, steel suit, exoskeleton, glowing eyes, bare head
```
- Caption/SFX (post): lettering is added later. Caption: "Dan rides with the line, the shield on his back."

**Panel: P6 Panel 3**
- Aspect ratio: 7:10
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Night in steep dark West Virginia mountains. Dark pickup trucks running without lights pull alongside the railway tracks. [KRAIT: Krait, mercenary leader, individual, lean and wiry man in his 40s, shaved head, scarred jaw, dark tactical vest and plates over dark fatigues, gloves, boots, matte dark gear with no insignia, no patches, no flags] stands beside a truck raising a rifle, with more mercenaries in matching dark gear raising rifles behind him, all aimed toward the unseen train off-frame. No lights on the vehicles. Cold moonlit gunmetal and blue-gray, pale steel rim light. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, insignia, flags, skull logo, ethnic caricature, headlights, glowing vehicles, gore, bodies
```
- Caption/SFX (post): lettering is added later. Balloon, KRAIT: "Hit the flatcars. Wreck the machines. No line, no factory."

**Panel: P6 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide low-angle hero shot. [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist, broad-shouldered, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots, wearing a battered yellow-gray hard hat] stands on top of a freight car, feet planted, lit from above by a full moon, [THE SHIELD: red and white ring gear, blue striped side wall, six red planet gears with white five-point star cut-outs, one thick red hollow sun gear, no glow] on his back, looking down toward the dark trucks below. Steep dark mountains and the curving train behind him. Cold gunmetal night, strong pale moonlit rim light along his silhouette, the Shield the only saturated accent. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, wrong star count, four-point stars, steel suit, exoskeleton, glowing eyes, cape, bare head
```
- Caption/SFX (post): lettering is added later. Balloon, DAN: "Those are two hundred jobs. You don't touch them."

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

### PAGE 8 (Derailed)

Setting: the derailment site, night into morning. The machines are broken, not people. No gore.

**Panel: P8 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Night, dynamic wide shot. A freight train jumps the track on a mountain curve, flatcars tilting and jackknifing, large wooden crates tumbling and splitting open down a steep embankment, machine tools spilling out. Flat motion arcs, dust, snapped chains frozen in the air. No fire, no people in frame. Cold moonlit gunmetal and blue-gray, pale steel rim light on the tumbling metal. Open space at top for a sound effect.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, fire, fireball, explosion, gore, bodies, blood, glowing machines
```
- Caption/SFX (post): lettering is added later. SFX "SKRRE-EEE-NCH" (optional, along the track).

**Panel: P8 Panel 2**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide morning shot of the wreck on a hillside. [DAN, HARD HAT: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist, broad-shouldered, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, boots, wearing a battered yellow-gray hard hat] stands small among scattered broken machine tools and shattered crates strewn across the slope, the derailed flatcars behind, [THE SHIELD: red and white ring gear, blue striped side wall, six red planet gears with white five-point star cut-outs, one thick red hollow sun gear, no glow] on his back. His posture is heavy with loss. Pale cold morning light, frost blue-gray sky, flat orange rust and raw metal, the Shield the only saturated accent. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, wrong star count, four-point stars, fire, gore, steel suit, glowing eyes, bare head
```
- Caption/SFX (post): lettering is added later. Caption: "Morning."

**Panel: P8 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot of [HOLLIS: Elaine Hollis, CEO of Hollis Bearing Co., early 50s, sharp practical expression, short silver-brown hair, navy blazer over a plain white shirt, dark trousers, flat practical shoes] arriving at the wreck site, one hand to her mouth or brow, devastated, the broken machines soft-focus behind her. Cold pale morning light, gunmetal hillside, a little flat orange on the raw metal. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, cartoon villain look, cleavage, extra characters, gore
```
- Caption/SFX (post): lettering is added later. Balloon, HOLLIS: "That's it. The insurance alone will take months. The program's first plant, and it's dead on a hillside."

**Panel: P8 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide low shot. [DAN, HARD HAT: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt, jeans, boots, battered yellow-gray hard hat] kneels on one knee among the wreck and lays a bare hand flat and gentle on a cracked spindle housing, the way a vet touches a hurt animal, listening with his eyes half closed. Broken machine tools around him, the Shield on his back. Pale cold morning light, gunmetal, flat orange on the raw break. No glow. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing machine, energy aura, steel suit, glowing eyes, bare head, wrong star count
```
- Caption/SFX (post): lettering is added later. Balloon, DAN: "No. They're hurt, not dead. I can hear every one of them."

### PAGE 9 (The Build)

Setting: the Ashford plant and roads, over many days. A montage of honest work.

**Panel: P9 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide daytime montage shot. Ashford workers in work clothes and hard hats drive flatbed trucks and operate a mobile crane on a mountain road, hauling the recovered machine tools back home, chaining them down, a line of trucks on the highway behind. Busy, determined, cooperative mood. Cold steel gray and frost blue-gray, warm daylight, a small American flag on a truck as an accent. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable text on trucks, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing machines
```
- Caption/SFX (post): lettering is added later. Caption, DAN: "Some parts we machined ourselves. Some came from shops in Michigan, Indiana, and Pennsylvania that were still hanging on."

**Panel: P9 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot on the plant floor, day. [DAN, HARD HAT: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt, jeans, boots, battered yellow-gray hard hat] walks the bay holding a part up to compare it, pointing to direct the work, while workers in hard hats rebuild, reweld and realign machine tools around him; flat sparks from a welder as crisp white and amber flecks. Busy, warm, focused. Cold steel gray bay, warm amber work light. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing machines, glowing eyes, steel suit, exoskeleton
```
- Caption/SFX (post): lettering is added later. Caption may continue from Panel 1, or stay clear here.

**Panel: P9 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot of [WALT: Walt Kowalski, 61, old foreman, stocky and weathered, close-cropped gray hair, gray mustache, deep lines around the eyes, faded plaid work shirt under a canvas vest] teaching a small group of high-school kids gathered around a lathe, pointing at the work, the teenagers leaning in with interest, one at the hand wheel. Warm, generational, hopeful mood. Cold steel gray shop, warm amber window light on the group. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, cartoon caricature, glowing machines, glowing eyes
```
- Caption/SFX (post): lettering is added later. Balloon, WALT: "Your granddads did this. Now it's your turn."

**Panel: P9 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide shot down the finished production line, day. A long row of rebuilt machine tools stands clean, aligned and gleaming, ready to run, warm daylight down the aisle. On the near wall hangs a plain paper wall calendar, its grid left blank in the art (the day number is added in post). Cold steel gray and pale steel, warm amber window shafts, a sense of order and pride, no glow. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable calendar text, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing machines
```
- Caption/SFX (post): lettering is added later. Optional in-art text: the wall calendar reading "DAY 87"; safest left blank and lettered in post.

### PAGE 10 (Start-Up Day)

Setting: the finished plant on start-up day. Ribbon-cutting, then a near-disaster that Dan catches with the Shield, then the chase. Nothing is fired at people.

**Panel: P10 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide shot of a ribbon-cutting on the plant floor. [HOLLIS: Elaine Hollis, CEO, early 50s, short silver-brown hair, navy blazer over a white shirt] stands at a red ribbon with big scissors, workers in hard hats and TV cameras crowded around, American flags overhead. At the edge of the frame, [KRAIT: lean wiry man in his 40s, shaved head, scarred jaw] disguised in a plain contractor's hi-vis vest and hard hat slips quietly away from a large main drive unit toward a side door, unnoticed by the crowd. Festive but with quiet menace at the margin. Cold steel gray, red ribbon and flags as the bright accents. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, insignia, skull logo, glowing machines, glowing eyes
```
- Caption/SFX (post): lettering is added later. Caption (optional): "Start-up day."

**Panel: P10 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Tense medium shot. [HOLLIS: CEO, early 50s, short silver-brown hair, navy blazer over a white shirt] reaches a hand toward a large green start button on a control panel. In the foreground, [DAN, HARD HAT: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt, battered yellow-gray hard hat] freezes mid-step, head snapping toward the main drive, alarmed, as if hearing something no one else can. Cold steel gray, the green button and a red accent on the panel, warm overhead light. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable panel labels, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing eyes, steel suit, exoskeleton
```
- Caption/SFX (post): lettering is added later. Caption, DAN: "Something was wrong. The main drive was screaming."

**Panel: P10 Panel 3**
- Aspect ratio: 7:8
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Large dynamic panel. [DAN, HARD HAT: broad-shouldered machinist, short dark hair, light stubble, worn denim jacket over a gray work shirt, battered yellow-gray hard hat] leaps and jams [THE SHIELD: a machined-metal planetary gear set, red and white ring gear with fine teeth, blue striped side wall, six red planet gears each with a white five-point star cut-out, one thick red hollow sun gear, spinning in flat motion blur, no glow] over a bursting high-pressure fitting on the main drive; its spinning gears cap and contain the burst, a jet of pale steam and a spray of flat droplets and sparks fanning around the rim and being driven back. The Shield is the brightest red, white and blue. Cold steel gray plant, warm sparks, no energy glow. Open space at top for a sound effect.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, energy shield, light beams, wrong star count, four-point stars, fireball, gore, steel suit, glowing eyes, bare head
```
- Caption/SFX (post): lettering is added later. SFX "KSSHHHH-CLANG" (top).

**Panel: P10 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide action shot down a plant aisle. [DAN, HARD HAT: broad-shouldered machinist, short dark hair, worn denim jacket, battered yellow-gray hard hat] sprints after [KRAIT: lean wiry man in his 40s, shaved head, scarred jaw, now in a torn contractor hi-vis vest] who is boxed in at the end of the aisle; two forklifts driven by workers roll across to block the exits, cornering Krait. Dynamic perspective, flat motion lines, cold steel gray with the hi-vis as a small orange accent. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, guns firing, gore, blood, glowing eyes, steel suit, bare head
```
- Caption/SFX (post): lettering is added later. Caption (optional): "Nowhere to run."

### PAGE 11

Setting: two arrests, a quiet line from Dan, then the plant comes alive.

**Panel: P11 Panel 1**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot. Plainclothes federal agents in simple dark windbreakers put [KRAIT: lean wiry man in his 40s, shaved head, scarred jaw, torn hi-vis vest] in handcuffs on the plant floor. In the foreground an agent's gloved hand holds Krait's phone, its screen a blank flat rectangle (a message thread is implied, added in post). Cold steel gray plant, a small blue accent on an agent, no glow. Open space at top for a caption.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable phone screen text, badges with readable text, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, guns drawn, gore, glowing eyes
```
- Caption/SFX (post): lettering is added later. Caption: "Krait's phone shows a message thread with Voss." Add the on-screen thread in post if shown.

**Panel: P11 Panel 2**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Medium shot at a small private airfield at dusk, a sleek private jet behind. [VOSS: Marguerite Voss, polished executive in her late 40s, sleek silver-streaked dark hair in a tight low chignon, tailored charcoal gray suit with a crisp white blouse] is stopped by two plainclothes agents, composed and unbowed even as one guides her by the arm, a rolling case beside her. Cold frost blue-gray dusk, gunmetal tarmac, a sliver of oxidized orange on the horizon. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, cartoon villain look, cleavage, guns drawn, gore
```
- Caption/SFX (post): lettering is added later. Balloon, VOSS: "It's one plant. You can't move a whole economy."

**Panel: P11 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Calm close shot of [DAN: Daniel "Dan" Reyes-Holloway, 34, third-generation machinist, broad-shouldered, short dark hair, light stubble, worn faded denim jacket over a gray work shirt], bare headed now, steady and quiet, the finished plant floor soft behind him, [THE SHIELD: red and white ring gear, blue striped side wall, six red planet gears with white five-point star cut-outs, one thick red hollow sun gear, no glow] slung on his back. Warm amber window light on his face, cold steel gray behind. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, wrong star count, four-point stars, steel suit, glowing eyes
```
- Caption/SFX (post): lettering is added later. Balloon, DAN: "We're not moving it. We're bringing it home, one line at a time."

**Panel: P11 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide triumphant shot down the production line. [HOLLIS: CEO, early 50s, short silver-brown hair, navy blazer over a white shirt] presses the large green start button; the whole line surges into motion, belts, spindles and conveyors turning, flat motion lines and a few clean sparks rippling down the aisle, workers cheering. Warm amber light floods the bay, cold steel gray frame, a sense of life returning, no energy glow. Open space at top for a sound effect.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing machines, energy glow, fire, gore
```
- Caption/SFX (post): lettering is added later. SFX "VRRRRRRRMMMMM" (large, across the top).

### PAGE 12

Setting: the running plant, then the President's public return, then a private word. For the President, use whichever depiction option the author chose in Section 2.4 (the generic or hinting block shown here; swap for a named likeness only after reading the caveats).

**Panel: P12 Panel 1**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Warm close shot. The first finished bearing rolls off the end of the running line into [WALT: Walt Kowalski, 61, old foreman, stocky and weathered, close-cropped gray hair, gray mustache, faded plaid work shirt under a canvas vest]'s hands; he holds the bright steel bearing up to a shaft of warm window light, inspecting it with quiet pride, a hint of a smile. Cold steel gray line behind, warm amber light on the bearing and his face. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable text on the bearing, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glowing, cartoon caricature
```
- Caption/SFX (post): lettering is added later. Balloon, WALT: "Made in Ashford. Thought I'd never say that again."

**Panel: P12 Panel 2**
- Aspect ratio: 3:2
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide public shot. [THE PRESIDENT (hinting / evocative, recommended): the President of the United States, a familiar US president archetype evoked only through silhouette and bearing: tall heavy-set older man, confident upright posture, a simple bold sweep of light hair as a clean graphic shape, a dark suit with a long bright red tie, a raised confident gesture, at a podium with US flags and an implied round presidential seal kept blank, not a portrait of any real person, no facial likeness] speaks at a podium on the running plant floor, TV cameras and a crowd of workers and press in front, American flags behind, the live production line visible in the background. Cold steel gray hall, the flags and red tie the bright accents, warm key light on the podium. Open space at top for a balloon. (If using the generic option instead, substitute the THE PRESIDENT block; for a named likeness, see Section 2.4 first.)
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable podium seal, photorealistic, photo likeness, named celebrity, real person face, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, caricature, mockery
```
- Caption/SFX (post): lettering is added later. Balloon, THE PRESIDENT: "They said it couldn't be done. Two hundred jobs, ninety days. This is the first of many. Forty more companies have signed on to bring their lines home this year."

**Panel: P12 Panel 3**
- Aspect ratio: 1:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Quiet two-shot away from the cameras, in a side corridor of the plant. [THE PRESIDENT (hinting / evocative, recommended): tall heavy-set older man, confident posture, a simple bold sweep of light hair as a clean graphic shape, dark suit with a long bright red tie, not a portrait of any real person, no facial likeness] speaks privately with [DAN: Daniel "Dan" Reyes-Holloway, 34, broad-shouldered machinist, short dark hair, light stubble, worn faded denim jacket over a gray work shirt], the two facing each other, serious and respectful. Cold steel gray corridor, a warm amber light between them, flags blurred in the far background. Open space at top for a balloon. (Substitute the generic block, or a named likeness per Section 2.4, as the author chose.)
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable seal, photorealistic, photo likeness, named celebrity, real person face, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, caricature, mockery, glowing eyes, steel suit
```
- Caption/SFX (post): lettering is added later. Balloon, THE PRESIDENT: "Every factory that comes back makes us stronger, and makes us harder to push around. If we don't do this, we'll depend on our rivals for everything. We can't let that happen."

**Panel: P12 Panel 4**
- Aspect ratio: 2:1
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Wide close shot of [DAN: broad-shouldered machinist, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, boots], giving a single firm, quiet nod, steady and sure, the running line warm behind him, [THE SHIELD: red and white ring gear, blue striped side wall, six red planet gears with white five-point star cut-outs, one thick red hollow sun gear, no glow] on his back. Warm amber light on his face, cold steel gray behind. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, wrong star count, four-point stars, steel suit, glowing eyes
```
- Caption/SFX (post): lettering is added later. Balloon, DAN: "Then send me the next one."

### PAGE 13 (Closing Splash, full page)

**Panel: P13 Closing Splash**
- Aspect ratio: 2:3 (portrait, full page)
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. Full-page hero splash at sunrise. High on the plant roof stands [DAN: Daniel "Dan" Reyes-Holloway, 34, broad-shouldered machinist, short dark hair, light stubble, worn faded denim jacket over a gray work shirt, jeans, scuffed work boots], seen from a low angle, [THE SHIELD: a machined-metal planetary gear set, red and white ring gear with fine teeth, blue striped side wall, six red planet gears each with a white five-point star cut-out, one thick red hollow sun gear, no glow] on his back, looking out over the plant. Below and behind him the plant is alive: flatbed trucks roll out the gate, their sides a blank panel in the art (MADE IN USA is added in post), workers stream in, and clean warm smoke rises from the stacks against a warm amber sunrise. The American flag flies at the gate. Red, white and blue of the Shield and the flag the brightest accents, warm amber sunrise light, cold steel gray structures. Leave a clear band at the top and bottom for a caption and a title card.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable text on the trucks, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, glow, glowing gears, wrong star count, four-point stars, cape, steel suit, glowing eyes, dark smog, pollution haze
```
- Caption/SFX (post): lettering is added later. Captions: "We never lost the ideas. We lost the hands." / "I'm here to bring them back." Title card: "GEARHEART returns in Issue #2: Forty Lines." Optional in-art text: "MADE IN USA" on the truck sides; safest left blank and lettered in post.

### POST-CREDITS TEASE

**Panel: Post-Credits Tease**
- Aspect ratio: 16:9
- Prompt:
```
flat graphic comic illustration, bold simple shapes, clean uniform medium-weight gunmetal outlines, hard-edged cel shading with two or three tones, strong crisp rim lighting, limited palette of steel gray #5B6670, gunmetal #23282E, oxidized orange #C4622D, with red #C8102E, white #F4F1EA and blue #1F3A93 only as accents of hope, minimal texture, large simple background shapes, dramatic composition. The sleek overseas Meridian Pacific boardroom at night (the same room as Page 3), long dark table, a wall of large flat screens showing footage of the Ashford production line running (tiny bright machines in motion). [SHAO: Director Shao Lin-wei, state-backed manufacturing executive, early 50s, individual fictional character, neat short black hair with gray at the temples, narrow rimless glasses, dark charcoal suit, white shirt, no tie, calm cold expression, still hands] stands or sits watching the screens, lit cold from the glow of the displays as flat blocks of color on his glasses, hands still. Respectful, individual portrayal, no stereotype. Cold pale steel and gunmetal, a sliver of oxidized orange from the city window. Open space at top for a balloon.
```
- Negative prompt:
```
text, letters, words, captions, speech bubbles, watermark, signature, logo, readable screen text, photorealistic, 3d render, soft airbrush, heavy gradients, noisy grunge texture, blurry, low contrast, extra fingers, deformed hands, extra limbs, asymmetrical eyes, cluttered background, anime style, chibi, oversaturated neon colors, modern sci-fi holograms, lens flare overload, ethnic caricature, exaggerated facial features, stereotype costume, cartoon villain look
```
- Caption/SFX (post): lettering is added later. Balloon, SHAO: "One plant survived. Forty more are coming. Then we stop the next forty."

---

## 5. Post-Production Checklist
- Letter all captions, balloons and sound effects in post (the art has none). The per-panel list is in Section 4.
- Check the splash sign reads exactly "ASHFORD STEEL - EST. 1911" and the banner reads exactly "COMING HOME: AMERICAN MANUFACTURING INITIATIVE" (the only two required in-art texts); repaint in post if your tool garbles either.
- Add the optional on-screen words in post rather than in-art unless you had clean luck in-tool: "MERIDIAN PACIFIC CONSORTIUM" on the Page 3 Panel 1 (and Post-Credits Tease) screens, "DAY 87" on the Page 9 Panel 4 calendar, "MADE IN USA" on the trucks in Pages 12 and 13, the "+/- 0.0001" readout on Page 5 Panel 2, and the folder label "HOLLIS / ASHFORD" on Page 3 Panel 4.
- Verify the Shield matches the sheet in every Shield panel (Pages 5, 6, 7, 8, 10, 12, 13): six planet gears, five-point stars, hollow sun gear, machined metal, no glow. Prefer the author's own Shield painting as the reference image.
- Verify the Torque Wave crown in P7 Panel 4 reads as an upward eruption of gravel and dust around a clear circle, not a beam fired at people; no one is shot or hit by a weapon from Dan. The same rule holds for the Page 10 Panel 3 burst: the Shield contains it, it is not a weapon aimed at anyone.
- Verify Dan wears his denim jacket every time, and a hard hat in the convoy, train, fight, wreck and build scenes (Pages 6 to 10); no suit, no exoskeleton, no gear-shaped eyes, no light cables, ever. His "gift" is shown as skill and listening, never as a glowing power coming off his body.
- Confirm the President uses the ONE option the author chose in Section 2.4 across Pages 1, 2 and 12 (generic, hinting / evocative recommended, or named likeness with the caveats read first). If hinting, confirm it reads as the archetype without a photoreal or named likeness. Confirm Shao, Voss and Krait show no ethnic caricature and no insignia.
- Confirm no gore or blood anywhere: the derailment (Page 8) and the fight (Page 7) break machines, not bodies.
- Color-correct so the red/white/blue accents stay the brightest saturated color in each scene; amber appears only as window, work-lamp, dawn or sunrise light.
