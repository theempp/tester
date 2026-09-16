# ASTRA BUILD PROMPT — paste this whole file as one prompt

Build a single-page marketing site for **HOUR ZERO**, a small-batch coffee roaster in
Connecticut. Roast-to-order, ships within 48 hours, nobody else local does that. The visitor
already buys coffee somewhere and does not believe a switch would taste different. One CTA:
buy a bag.

Do not ask clarifying questions. Every decision below is already made. Build all of it.

**Read section 0 before anything else. This page is a hybrid: two baked films, then live 3D.
Getting the seam between them right is the hardest and most important thing you will do here.**

---

## 0 · The engine — hybrid, and this is settled

The hero is ONE continuous scroll-driven scene in four parts. The subject is carried straight
through; the pin never hands off to a different object.

| Part | What happens | Medium | Source |
|---|---|---|---|
| **1** | The approach. A roaster outdoors, beans pouring from the drum, camera falls into the curtain until beans fill the frame. | **Baked film**, scrubbed | `/public/media/hero-roast-film.mp4` |
| **2** | The fall continues, camera backs away, an off-white HOUR ZERO pouch is revealed catching the beans, the last bean drops in, the bag seals itself and the frame locks. | **Baked film**, scrubbed | `/public/media/part2-bag.mp4` |
| **3** | The sealed bag turns; the label comes to rest facing the visitor. | **LIVE 3D** — GLB in a WebGL canvas | Blender, see §9 |
| **4** | The bag recentres left, its bottom rips open, beans pour out over the real page below, and the pile fills the frame. | **LIVE 3D** over live DOM | Blender, see §9 |

**The 3D is the main component of this page, not a garnish.** Parts 3 and 4 are more than half
the hero's runway and all of its interaction. Budget your effort accordingly.

Why parts 3 and 4 cannot be film: part 4 composites falling beans over a **real, live DOM
page** — real text, real links, real reflow at every viewport. That needs alpha, which baked
video does not give you. A transparent WebGL canvas composites over DOM natively. It also
keeps one 3D world with one seam instead of crossing CG↔photoreal twice.

**One WebGL context for the whole page.** Parts 3 and 4 are the same canvas, the same scene,
the same GLB — part 4 is a continuation of part 3's state, not a second mount.

---

## 1 · Stack

- Next.js (App Router) + TypeScript + Tailwind
- GSAP + ScrollTrigger for all scroll-bound motion
- Lenis for smooth scroll, `lerp: 0.16`, mounted once at the root
- React Three Fiber + drei for the parts 3–4 canvas. One `<Canvas>` on the page, ever.
- Magic UI components (`npx shadcn@latest add "https://magicui.design/r/<name>.json"`)
- No other animation library. No Locomotive, no Barba, no Swiper, no Spline, no second WebGL
  context.

## 2 · Identity — hold this exactly

**Character:** a cold instrument laid over a hot process. Machined restraint holding
something violent. Every warm thing on this page is behind glass.

- **Ground** `#0B0B0C`. **Foreground** `#EDEDE8`. **Hairline** `rgba(237,237,232,0.14)`.
  **Ember** `#C4491F` — used ONLY on the live counter digits and the CTA border. Nowhere else.
- **Type:** JetBrains Mono as the body default (`font-mono` on `<body>`, mono is the rule,
  not the accent). Uppercase for all labels and readouts. `tabular-nums` on every number
  without exception. Headlines are the same mono at clamp(2.5rem, 7vw, 7rem), tight tracking.
- **No** rounded cards, no drop shadows, no gradients, no glow, no colour washes, no serif,
  no stock-photo warmth, no emoji.
- Rules are 1px hairlines. Spacing is generous but hard-edged.

**Forbidden outright:** editorial white-space luxury, soft spatial product-render air,
warm lifestyle-cafe documentary. If a section starts looking like a specialty-coffee
Instagram, it is wrong.

## 3 · The device — read this twice

There is one counter on this page and **it never resets.**

It starts at `00:00` as roast time. It counts up through the roast. When the roast finishes
at `12:40` it does not zero out — it rolls, digit by digit, into `00h SINCE ROAST`, and then
it keeps counting for the rest of the page. Roast time and freshness are physically the same
number. That is the entire argument of the site expressed as one piece of UI.

**Implementation rule that matters more than any animation here:** the counter value is
DERIVED from scroll progress on every frame. Never `setInterval`, never a count-up tween,
except at the single roll-over moment. A derived counter cannot desync when the visitor
scrolls back up, and reverse-scroll integrity is the whole point.

**The counter spans the film/3D seam without noticing it.** It is DOM, mounted above both the
video layer and the canvas, driven by one page-level progress value. It must not restart,
re-mount, re-tween or change its formatting when the medium switches at part 3. If the
visitor can tell where the film ended by watching the counter, it is wrong.

**Counter values by part:**

| Part | Reads | At the end of the part |
|---|---|---|
| 1 | `00:00` → `12:40` roast time | `12:40` |
| 2 | THE ROLL: `12:40` → `00h SINCE ROAST` | `00h` |
| 3 | `00h` → `06h` | `06h` |
| 4 | `06h` → `48h`, then docks to the page edge and keeps counting below | `48h` |

## 4 · Global chrome — mounted once, present on every section

1. **Grain field.** Magic UI `noise-texture`, `fixed inset-0 z-[-2] pointer-events-none`.
   Site-wide, never per-section. It sits under the video and under the canvas, and it must
   not change opacity at the seam.
2. **Progress instrument.** Fixed, bottom-left, `font-mono text-[10px] uppercase tabular-nums`,
   foreground at 60% opacity. It reads in HOURS, not percent: `000H` → `048H` across the
   document. Zero-padded to three digits so the glyph width never shifts as digits change.
3. **Registration marks.** Four 9px `+` glyphs, `position: fixed`, one inset 24px from each
   corner of the viewport. Static, always visible, hairline colour. Do not animate them.
4. **Cursor.** Magic UI `smooth-cursor`, spring-damped.
5. **Nav.** Fixed, hairline bottom border, mono caps, the word BUY at the right at all times.

### 4a · THE TYPE SCRIM — do not skip this

**Part 1's film is near-white for roughly its first five seconds.** It was shot outdoors: the
palette is a pale grey salt flat under a near-white sky. The right-edge readout column and
the lower third sit directly over that, and foreground `#EDEDE8` on near-white is unreadable.

Mount a scrim between the film layer and the type layer:

- A fixed linear-gradient from `rgba(11,11,12,0.55)` at the right edge to transparent by 38%
  across, behind the readout column.
- A second gradient from `rgba(11,11,12,0.55)` at the bottom to transparent by 30% up, behind
  the lower third.
- Both are always present through parts 1 and 2 — do not try to fade them in when the
  background gets light. A scrim that animates is a scrim the visitor notices.
- They fade out across part 3, where the background is a black 3D set and the type is safe.

## 5 · The hero — one scroll, four parts

Total hero runway: **34vh desktop / 22vh phone.** Parts 1–2 are 15vh of that; parts 3–4 are
19vh. One pinned stage holds all four; the visitor never sees a section boundary inside it.

### The stage

- A `position: fixed` full-bleed **video layer** (z-index below the DOM), holding both films.
- A `position: fixed` full-bleed **WebGL canvas**, transparent background, mounted from the
  start of the page and never unmounted, sitting directly above the video layer.
- The DOM type layer above both.

Neither the video nor the canvas lives inside a pin spacer, and neither unmounts at a section
boundary. Scroll changes what they are *doing*, not whether they exist.

### PARTS 1 AND 2 — the baked films (0.00 → 0.44 of hero progress)

Two `<video>` elements (`muted playsinline preload="auto"`), both all-intra encoded so every
frame is a seek target. Drive `video.currentTime` from ScrollTrigger `scrub: true`. Damping
lives in Lenis; the tween easing is linear.

`hero-roast-film.mp4` runs 0.00 → 0.24. `part2-bag.mp4` runs 0.24 → 0.44.

**The film-to-film join is already invisible and you must not decorate it.** Part 2 was
generated seeded from part 1's exact final frame — part 2 frame 1 *is* part 1 frame 241. Stack
the two videos, show part 2 the instant part 1 reaches its end, and do not fade, dissolve,
crossfade or cut to black between them. Preload part 2 before part 1 finishes.

Frames across parts 1 and 2:

| # | Progress | On screen | Copy |
|---|---|---|---|
| 1 | 0.00–0.04 | The roaster, wide, outdoors. Beans already pouring. Counter `00:00`. | "Your coffee was roasted. You just don't know when." |
| 2 | 0.04–0.10 | Camera closing on the falling curtain. Counter climbs. | "This one started when you did." |
| 3 | 0.10–0.15 | Beans darkening — pale green, tan, deep brown. **Compress the scrub here**, more video time per vh, so it arrives fast. | "First crack. Nine minutes, fourteen seconds." |
| 4 | 0.15–0.20 | Inside the curtain. Longest hold of the two films. | "The part that decides how it tastes." |
| 5 | 0.20–0.24 | Nothing but beans, full frame, travelling down. `12:40` scales past the viewport edges, cropped. | "Twelve forty. Done." |
| 6 | 0.24–0.30 | **Part 2 begins, seamlessly.** Still nothing but falling beans. **THE ROLL:** `12:40` rolls into `00h SINCE ROAST`, 60ms stagger per digit, right to left, linear, no overshoot. | "Same clock. It just keeps going." |
| 7 | 0.30–0.38 | The camera backs away and the pouch is revealed catching the beans. | "It goes straight into the bag." |
| 8 | 0.38–0.44 | Beans thin out, last bean drops in, the bag folds itself shut. Frame locks dead still. | "Sealed the same day." |

Frame 3's label uses Magic UI `hyper-text` (scramble-then-resolve), hard-cut in, no fade.
Frame 6's roll is the ONE place Magic UI `number-ticker` is correct.

### ⚠ 5a · THE SEAM — film → live 3D, at progress 0.44

**This is the single hardest thing on the page. Read it twice before you build it.**

Part 2's film ends on a **hard lock**: for its final ~2 seconds the camera is completely
motionless and so is the bag. The frame is dead still. That stillness exists solely so the
handoff has somewhere to hide.

The trick is: **swap media while nothing is moving, on two images that match.**

`/review/part2-final-frame.jpg` is part 2's exact last frame. The GLB's part-3 opening camera
is built in Blender to reproduce it (§9). At the seam, the video's last frame and the canvas's
first render should be very nearly the same picture.

How to hide it:

1. **Pre-warm the canvas.** The GLB, its textures and the first shader compile must all be
   done long before progress 0.44. Render the canvas at opacity 0 from progress 0.34 onward,
   parked on its part-3 opening pose. A first-frame compile hitch at the seam is the one
   failure mode that cannot be recovered.
2. **Swap on the lock, not on the motion.** Do the handoff at progress 0.44, inside part 2's
   motionless tail. Never swap while the film is still moving.
3. **One frame of overlap, no transition.** Take the canvas from opacity 0 to 1 and the video
   layer from 1 to 0 in a single frame, both at once. **No crossfade, no dissolve, no fade to
   black, no flash, no blur.** A crossfade between two near-identical images reads as a soft
   double-exposure and announces the seam you are trying to hide.
4. **Hold the last video frame underneath.** Do not unmount, blank or reset the video layer
   after the swap — leave it parked on its final frame under the canvas until progress 0.55.
   If the canvas drops a frame, what shows through is the correct picture rather than a hole.
5. **Match the set, not just the bag.** The film's background is near-black with a faint floor
   and a soft contact shadow under the bag. The Blender scene reproduces that; make sure your
   canvas clear colour is transparent and the page behind it is `#0B0B0C`, so the values line
   up.
6. **The counter and the type do not react to the seam at all.** No re-mount, no re-tween.
7. **It must survive reverse scroll.** Scrolling back up runs the swap backwards, on the same
   frame, with the same rules. Test it upward as carefully as downward.

**How to check it:** scrub slowly across 0.44 and screenshot every frame. If you can point at
the frame where the medium changed, it is not done.

### PARTS 3 AND 4 — live 3D (0.44 → 1.00)

One scene, one GLB, driven by damped scroll progress. All of it reversible.

| # | Progress | What the 3D does | Copy |
|---|---|---|---|
| 9 | 0.44–0.52 | Held. The bag exactly as the film left it. Nothing moves yet — let the visitor believe they are still watching the film. | — |
| 10 | 0.52–0.68 | **The turn.** The bag rotates; the label comes around and settles facing the visitor, coming to rest square-on. Damped, mechanical, no overshoot, no bounce. | "Roasted to order. Printed, not implied." |
| 11 | 0.68–0.76 | The bag recentres to the LEFT third of the viewport. The right two-thirds open up and the first DOM section fades up in that space, behind the canvas. | "Then it leaves." |
| 12 | 0.76–0.88 | **The rip.** The bottom seam of the bag tears open. Beans begin to pour out, over the live DOM page now visible behind them. | "48 hours." |
| 13 | 0.88–1.00 | The pour builds; beans pile upward until they fill the frame, compositing over real, scrolling, readable page content. | "On your step." |

**Part 4 composites over live DOM.** The canvas is transparent and the DOM section behind it is
real and interactive. Do not screenshot, bake or freeze the page behind the beans.

**Do not freeze the final frame on release.** The hero releases while the beans are still
moving — the same direction the visitor is scrolling. Let the pin release into that motion so
the scroll reads as picking up where the hero left off, rather than cutting away from a held
shot. This is the best transition on the page; do not flatten it into a fade.

### Phone

Hero drops to 22vh. Parts 1–2 re-crop to a centred 9:16 safe area and serve the `-720` files.
Frame 4's hold is the one that shortens, never frame 6 and never the seam's lock at 0.44.
The readout column moves from the right edge to a fixed bottom bar; cropped type crops harder,
it does not shrink to fit.

**3D fallback:** if WebGL is unavailable or the device fails a capability check, part 3 becomes
a static render of the bag and part 4 becomes a hard cut to the DOM page. Never show a dead
canvas. Part 2's final video frame is a correct still for that fallback — park on it.

## 6 · Below the hero — the hero is quiet, these are dense

Alternate immersive full-bleed moments with plain readable stopping points. Do not run one
continuous ambient scroll. **Section 1 is the one part 4's beans pour over** — it must be real
DOM and readable through and after the pour.

1. **THE STAMP** — `bag-label-macro.png`, full-bleed. Magic UI `lens` so the visitor can zoom
   into the ink date at macro. Hairline leader lines draw out to three labels on entry
   (valve · roast date · batch), `text-animate` per line, 40ms stagger.
   Copy: "Roasted the day it shipped. Printed, not implied."
   *This is the most important section below the hero. It converts a claim into something the
   visitor verifies themselves.*
2. **THE COMPARISON** — no imagery. Two stacked tabular rows on hairline rules.
   `48 HOURS` against `90–180 DAYS`. Second number `number-ticker` counts up and stops hard.
   Copy: "Most bags on a shelf were roasted three months ago. Ours left the drum yesterday."
3. **THE ROAST LOG** — Magic UI `animated-list` over a `grid-pattern` chassis. Eight rows
   arriving in sequence: date · origin · roast time · hours since. Reads as an instrument log,
   not a testimonial wall. Real-looking data, tabular, monospaced.
4. **ORIGINS RAIL** — Magic UI `marquee` driven by `scroll-based-velocity`, so the rail speed
   reports how fast the visitor is scrolling. Type and tabular data only, no imagery:
   origin · altitude · process · roast level.
5. **THE CAFES** — second `marquee`, reversed direction, slower rate. Wholesale names as
   ambient proof. Two rows at different rates gives depth without a parallax layer.
6. **TASTING NOTES** — Magic UI `dia-text-reveal`, a band sweeping across the note text.
   The one warm-adjacent moment on the page, and it is type, never photography.
7. **THE FOUR FACTS** — Magic UI `bento-grid` + `magic-card` spotlight borders.
   Roast to order · 48 hours · Connecticut · small batch. Hover life without colour.
8. **OBJECTIONS** — three short Q/A pairs, `text-reveal` on scroll, `progressive-blur` at the
   scroll edge so the page reads as having more below.
   Lead with the real one: "I already buy coffee I like."
9. **BUY** — `doorstep-48.png`. Counter settles on `48h` and stops. Everything else still.
   Magic UI `interactive-hover-button`, hairline restyle, ember border.
   "Buy a bag." / sub: "Roasted to order. On your step in 48 hours."

### Theme inversion

Sections 3 and 4 invert to a light ground (`#EDEDE8` ground, `#0B0B0C` foreground) and back.
Carry it with a class on a wrapper, not per-element colours, and transition it over 600ms.
It marks the midpoint of the page as a chapter break.

## 7 · Assets — the real paths

| File | Use |
|---|---|
| `/public/media/hero-roast-film.mp4` | PART 1. 1920×1080, 241 frames, 24fps, silent, all-intra (`-g 1`) |
| `/public/media/hero-roast-film-720.mp4` | PART 1, phone |
| `/public/media/part2-bag.mp4` | PART 2. 1920×1080, 241 frames, 24fps, silent, all-intra (`-g 1`) |
| `/public/media/part2-bag-720.mp4` | PART 2, phone |
| `/public/media/bag-label-macro.png` | below-hero section 1, the stamp |
| `/public/media/doorstep-48.png` | below-hero section 9, buy |
| `/review/part2-final-frame.jpg` | **reference only, not shipped.** The exact pose part 3's 3D camera matches. Also the correct still for the no-WebGL fallback. |
| `hour-zero-bag.glb` | PARTS 3 AND 4. Built in Blender — see §9. Place in `/public/models/`. |

Both films are all-intra: every frame is a keyframe, so scrubbing is frame-accurate. Do not
re-encode them, do not run them through a build-time optimiser, and do not let a CDN
transcode them. That silently destroys the scrub.

Everything else on this page is DOM, type and numbers. Do not add stock photography. If an
asset is missing, render a labelled hairline placeholder box with the filename in it. Never
invent a substitute image.

## 8 · Non-negotiables

- **Reduced motion:** `prefers-reduced-motion` kills the scrub and the 3D entirely. The hero
  becomes a stack of stills — parts 1 and 2 as six poster frames, part 3 as one static render
  of the bag, part 4 as the DOM page with no pour — with the counter printed as static values
  at each. The roll becomes two adjacent numbers with a rule between them. The whole argument
  must still land with zero motion; that is the test this page has to pass.
- **Loading:** part 1's poster renders immediately with the counter at `00:00`. The hero does
  not arm until part 1's first keyframe range is buffered; until then the page scrolls as the
  reduced-motion version. Never show a dead pin and never show a dead canvas.
- **Reverse scroll:** fully reversible everywhere, including the seam and the rip. The counter
  rolls backward through the same digits because it is derived, never incremented.
- ScrollTrigger ranges are relative to trigger elements, never raw pixel offsets. Each section
  is scoped to its own trigger — no single monolithic page timeline.
- Semantic HTML. One `<h1>`. Real focus states on the hairlines. The CTA is a real link.

---

## 9 · BLENDER SCOPE — parts 3 and 4, and this is the real build

Everything in this section is modelled, textured and exported in Blender, then wired into the
R3F canvas. Nothing here is generated, filmed or bought.

### 9a · The GLB

Model and texture **the off-white HOUR ZERO pouch**. Reference: `/review/bag-round-1/B-offwhite-4k.png`,
and the shipped film `/public/media/part2-bag.mp4`, which shows the same bag turning in light.

- Off-white / bone flat-bottom pouch, matte, soft low sheen — **a little glossy, nothing
  crazy**. No wet shine, no oil.
- Large black `HOUR ZERO` wordmark across the face. A flush **brushed-steel** one-way valve
  above it. A small spec block beneath the wordmark on a hairline rule.
- Folded-over top seal, as it ends part 2.
- Real geometry at the bottom seam — part 4 tears it open, so it needs edges that can separate.
  Model the seam as its own loop, not as a texture detail.

**The pack changed from matte black to off-white.** Any older note describing a matte black
pouch is stale and has been corrected in `master.md`. It is off-white. The same object appears
in parts 2, 3 and 4 and must be identical across all three.

### 9b · Label fixes — do these at export, they are free here

The source bag art has two defects. They are illegible at film distance so they were not worth
a re-render, but the GLB texture is where they get fixed, and here they are sharp and readable.

1. **`VARIETY: HEIRLDOM` → `VARIETY: HEIRLOOM`.** Straight typo.
2. **`ROAST DATE: 07/14/2024` is stale and struck through.** Do not bake any date into the
   texture. Leave that line's value area **blank** on the texture and render the live date in
   DOM over it, in the same mono, same size, same pale ink colour — the same masking approach
   §10 uses for the macro still. A baked date destroys the argument of the site the day it
   ships.
3. While you are in there: the wordmark on the source art runs off both edges of the pouch
   face — the `H` and the final `O` are clipped. **Fit the wordmark inside the face with clear
   margin on both sides.** It has survived three film takes and the GLB is where it gets fixed.

### 9c · PART 3 — the turn

**The opening camera must match `/review/part2-final-frame.jpg` exactly.** This is the single
most important handoff artifact in the whole job; the seam in §5a is only invisible if this
pose is right.

Measured from that frame, at 1920×1080:

| Measurement | Value |
|---|---|
| Bag bounding box | x `774`–`1149`, y `338`–`949` |
| Bag width / height in frame | `376` × `612` px |
| Bag height as share of frame | **56.7%** |
| Bag centre x | `961.5` (frame centre is `960` — it is dead centre) |
| Framing | square-on, front face flat to camera, no yaw, no roll |
| Set | black surround, faint floor plane, soft contact shadow under the base |
| Lighting | soft, even, shadowless on the face; no sun, no hard specular, no glare |

Set the Blender camera so a render at 1920×1080 lands the bag inside those numbers, then
**A/B the render against the JPEG at 100%** before you call it matched.

The move: the bag rotates and the label comes around to rest facing the visitor. Damped and
mechanical — it decelerates into its rest pose and stops. No overshoot, no bounce, no spin-up,
no easing that reads organic. It is an instrument turning, not a product hero shot.

### 9d · PART 4 — the rip and the pour

- The bag recentres to the left third. Keep it square-on; do not add a flourish to the move.
- **The bottom seam rips open.** The tear starts at the seam and runs across it. Keep the tear
  footprint the size of the seam — it should not climb the body of the bag.
- **Beans pour out** and fall over the live DOM behind them. Physics or baked simulation, your
  call, but the beans must be individual beans with space between them — the same read as the
  films, not a textured sheet.
- **The pile builds upward until it fills the frame.** Its end state must fill the *actual*
  viewport at the *actual* aspect ratio, which is exactly why this is not a fixed-frame render.
- Scroll-driven, not time-driven, throughout. Every frame is a function of progress, and
  scrolling up reverses the pour cleanly.
- Lock one real-world bean size and keep apparent scale steady the whole way down. Beans that
  grow as they fall read as a different object arriving.

### 9e · Handoff to the canvas

Export one `.glb`: geometry, baked textures, and the part-3 and part-4 poses as named markers
or bones. No `.blend`, no loose textures, no unreviewed export. Draco-compress it. Target
under 8MB — it blocks the seam, and the seam cannot wait on a download.

---

## 10 · Correctness rules added after the assets were reviewed

**The printed date on the macro still is stale and must be overprinted.**
`bag-label-macro.png` carries a struck date reading `2025 04 16`. Do NOT present it as the
live roast date. Mask that region with a rectangle matched to the pouch panel, and render the
real date in DOM in the same mono, same size, same pale ink colour, aligned to where the stamp
sits. It then stays correct forever, and the `lens` zoom magnifies live type rather than a
fixed past date. This is the single most important correctness note on the page — the whole
argument is freshness, and a hardcoded date destroys it.

**Do not reduce grain opacity over the bag sections.** Those frames are very low-key and the
off-white pouch sits close to the ground value. The site-wide `noise-texture` field must stay
at its normal opacity there, and it must not change across the seam.

**The business name is HOUR ZERO.** It appears on the bag, in the nav and in the `<title>`.
