# HOUR ZERO — build prompt. Paste the whole thing.

Single-page site for HOUR ZERO, a small-batch roaster in Connecticut. Roast-to-order, ships in
48 hours, nobody else local does that. The visitor already buys coffee and doesn't believe a
switch would taste different. One CTA: buy a bag.

Every call below is made. Don't ask me questions, don't offer alternatives, build it.

**Section 0 first.** This page is two baked films and then live 3D. The join between them is
the hardest thing here.

---

## 0 · The engine — settled, don't reopen it

The hero is ONE scroll-driven scene in four parts. Same subject carried straight through.

| Part | What happens | Medium |
|---|---|---|
| **1** | Roaster outdoors, beans pouring from the drum, camera falls into the curtain. | film — `/public/media/hero-roast-film.mp4` |
| **2** | Fall continues, camera backs off, an off-white pouch is revealed catching the beans, last bean drops, bag seals, frame locks. | film — `/public/media/part2-bag.mp4` |
| **3** | The sealed bag turns; the label comes to rest facing the visitor. | **live 3D** — GLB, §9 |
| **4** | Bag recentres left, bottom rips, beans pour over the real page, pile fills frame. | **live 3D over live DOM** |

**The 3D is the main component of this page, not a garnish.** Parts 3 and 4 are more than half
the runway and all of the interaction. Spend your effort there.

Why 3 and 4 can't be film: part 4 composites beans over a **real, live DOM page** — real text,
real links, real reflow. That needs alpha. Baked video doesn't have it. A transparent WebGL
canvas composites over DOM natively.

**One WebGL context for the whole page.** Parts 3 and 4 are the same canvas, same scene, same
GLB. Part 4 continues part 3's state; it is not a second mount.

## 1 · Stack

Next.js App Router + TS + Tailwind. GSAP/ScrollTrigger for everything scroll-bound. Lenis at
the root, `lerp: 0.16`. React Three Fiber + drei for parts 3–4 — **one `<Canvas>` on the page,
ever.** Magic UI via `npx shadcn@latest add "https://magicui.design/r/<name>.json"`.

No other animation library. No Locomotive, no Barba, no Spline, no second WebGL context.

## 2 · Identity — hold this exactly

A cold instrument laid over a hot process. Machined restraint holding something violent. Every
warm thing on this page is behind glass.

- Ground `#0B0B0C` · foreground `#EDEDE8` · hairline `rgba(237,237,232,0.14)` · ember `#C4491F`
  **only** on the counter digits and the CTA border. Nowhere else.
- JetBrains Mono on `<body>` — mono is the rule, not the accent. Caps for every label and
  readout. `tabular-nums` on every number, no exceptions. Headlines same mono,
  `clamp(2.5rem, 7vw, 7rem)`, tight tracking.
- No rounded cards, no shadows, no gradients, no glow, no serif, no stock warmth, no emoji.
  Rules are 1px. Spacing is generous and hard-edged.

If a section starts looking like a specialty-coffee Instagram, it's wrong.

## 3 · The device — the whole argument in one piece of UI

**One counter. It never resets.**

Starts `00:00` as roast time, climbs through the roast, and at `12:40` it doesn't zero — it
rolls digit by digit into `00h SINCE ROAST` and keeps counting for the rest of the page. Roast
time and freshness are the same number.

**Derive the value from scroll progress every frame.** Never `setInterval`, never a count-up
tween, except the one roll. A derived counter can't desync when the visitor scrolls back up,
and reverse-scroll integrity is the entire point.

**It spans the film/3D seam without noticing.** It's DOM, above both the video and the canvas,
on one page-level progress value. No re-mount, no re-tween, no format change at part 3. If I
can tell where the film ended by watching the counter, it's wrong.

Part 1 → `00:00`–`12:40` · part 2 → the roll to `00h` · part 3 → `00h`–`06h` · part 4 →
`06h`–`48h`, then docks to the page edge and keeps going.

## 4 · Chrome — mounted once, on every section

1. **Grain.** Magic UI `noise-texture`, `fixed inset-0 z-[-2] pointer-events-none`. Site-wide,
   under the video and the canvas. Opacity never changes — especially not at the seam, and not
   over the bag sections, where the off-white pouch sits close to the ground value.
2. **Progress readout.** Fixed bottom-left, mono 10px caps tabular, 60% opacity. Reads in
   HOURS: `000H` → `048H`. Zero-pad to three so the glyph width never shifts.
3. **Registration marks.** Four 9px `+`, fixed, inset 24px from each corner, hairline. Static.
4. Magic UI `smooth-cursor`. Fixed nav, hairline bottom border, mono caps, BUY at the right.

### 4a · The type scrim — don't skip this

**Part 1's film is near-white for its first ~5 seconds** — pale salt flat, near-white sky. The
right-edge readout and the lower third sit on top of that, and `#EDEDE8` on near-white is
unreadable.

Between the film and the type: a fixed gradient `rgba(11,11,12,0.55)` at the right edge to
transparent by 38% across, and a second from the bottom to transparent by 30% up. Both present
constantly through parts 1–2 — **don't fade them in when the background gets light.** A scrim
that animates is a scrim I notice. They fade out over part 3, where the set is black.

## 5 · The hero — one scroll, four parts

Runway **34vh desktop / 22vh phone.** Parts 1–2 take 15vh, parts 3–4 take 19vh. One pinned
stage holds all four and the visitor never sees a boundary inside it.

Three layers: a fixed full-bleed **video layer**, a fixed full-bleed **transparent WebGL
canvas** directly above it, mounted from page load and never unmounted, and the DOM type above
both. Neither media layer lives in a pin spacer. Scroll changes what they're *doing*, not
whether they exist.

### Parts 1–2 — the films (0.00 → 0.44)

Two `<video>` (`muted playsinline preload="auto"`), both all-intra so every frame is a seek
target. Drive `currentTime` from ScrollTrigger `scrub: true`. Easing is linear — damping is
Lenis's job. Part 1 runs 0.00–0.24, part 2 runs 0.24–0.44.

**The film-to-film join is already invisible. Don't decorate it.** Part 2 was generated seeded
from part 1's exact last frame — part 2 frame 1 *is* part 1 frame 241. Stack them, show part 2
the instant part 1 ends, no fade, no dissolve, no cut to black. Preload part 2 early.

| # | Progress | On screen | Copy |
|---|---|---|---|
| 1 | 0.00–0.04 | Roaster, wide, outdoors. Beans already pouring. `00:00`. | "Your coffee was roasted. You just don't know when." |
| 2 | 0.04–0.10 | Closing on the falling curtain. | "This one started when you did." |
| 3 | 0.10–0.15 | Beans darkening — green, tan, deep brown. **Compress the scrub here**, more video per vh. | "First crack. Nine minutes, fourteen seconds." |
| 4 | 0.15–0.20 | Inside the curtain. Longest hold of the two films. | "The part that decides how it tastes." |
| 5 | 0.20–0.24 | Nothing but beans, travelling down. `12:40` scales past the viewport edges, cropped. | "Twelve forty. Done." |
| 6 | 0.24–0.30 | **Part 2 starts, seamlessly.** Still falling beans. **THE ROLL:** `12:40` → `00h SINCE ROAST`, 60ms per digit, right to left, linear, no overshoot. | "Same clock. It just keeps going." |
| 7 | 0.30–0.38 | Camera backs away, the pouch is revealed catching the beans. | "It goes straight into the bag." |
| 8 | 0.38–0.44 | Beans thin out, last bean drops, bag folds shut. Frame locks dead still. | "Sealed the same day." |

Frame 3 uses `hyper-text` (scramble-resolve), hard cut in, no fade. Frame 6's roll is the one
place `number-ticker` is correct.

### ⚠ 5a · THE SEAM — film → 3D at 0.44. Read this twice.

Part 2 ends on a **hard lock**: the last ~2 seconds are dead still, camera and bag both. That
stillness exists so the handoff has somewhere to hide. The whole trick is **swap media while
nothing is moving, on two pictures that match.**

`/review/part2-final-frame.jpg` is part 2's exact last frame. The GLB's part-3 opening camera
reproduces it (§9). At the seam, the video's last frame and the canvas's first render should be
very nearly the same image.

1. **Pre-warm the canvas.** GLB, textures and first shader compile all done well before 0.44 —
   render at opacity 0 from 0.34, parked on the part-3 pose. A compile hitch at the seam is the
   one failure you can't recover from.
2. **Swap on the lock, never on motion.** Do it at 0.44, inside the motionless tail.
3. **One frame, no transition.** Canvas 0→1 and video 1→0 in a single frame, together. **No
   crossfade, no dissolve, no fade to black, no flash, no blur.** A crossfade between two
   near-identical images reads as a double exposure and announces the thing you're hiding.
4. **Hold the last video frame underneath** until 0.55. Don't unmount or blank it. If the
   canvas drops a frame, what shows through is the right picture instead of a hole.
5. **Match the set, not just the bag.** Near-black surround, faint floor, soft contact shadow.
   Canvas clear colour transparent, page behind it `#0B0B0C`, so the values line up.
6. **Counter and type don't react at all.**
7. **It has to survive reverse scroll** — same frame, same rules, backwards. Test it upward as
   hard as downward.

Check it by scrubbing slowly across 0.44 and screenshotting every frame. If you can point at
the frame where the medium changed, it isn't done.

### Parts 3–4 — live 3D (0.44 → 1.00)

One scene, one GLB, damped scroll progress, all of it reversible.

| # | Progress | The 3D | Copy |
|---|---|---|---|
| 9 | 0.44–0.52 | Held, exactly as the film left it. Nothing moves — let them believe they're still watching film. | — |
| 10 | 0.52–0.68 | **The turn.** Label comes around and settles square-on. Damped, mechanical, no overshoot. | "Roasted to order. Printed, not implied." |
| 11 | 0.68–0.76 | Bag recentres to the LEFT third. The right two-thirds open and the first DOM section fades up behind the canvas. | "Then it leaves." |
| 12 | 0.76–0.88 | **The rip.** Bottom seam tears, beans start pouring over the live page. | "48 hours." |
| 13 | 0.88–1.00 | Pour builds, beans pile up until they fill the frame over real scrolling readable content. | "On your step." |

The DOM behind the beans is real and interactive. Don't screenshot it, bake it or freeze it.

**Don't freeze the final frame on release.** The hero releases while the beans are still moving
in the direction the visitor is scrolling, so the scroll reads as picking up where the hero left
off instead of cutting away from a held shot. Best transition on the page — don't flatten it.

### Phone

Hero drops to 22vh. Parts 1–2 re-crop to a centred 9:16 safe area on the `-720` files. Frame 4's
hold shortens — never frame 6, never the lock at 0.44. The readout moves to a fixed bottom bar.
Cropped type crops harder, it doesn't shrink to fit.

**No WebGL:** part 3 becomes a static render, part 4 a hard cut to the DOM page. Part 2's final
frame is the correct still — park on it. Never show a dead canvas.

## 6 · Below the hero — the hero is quiet, these are dense

Alternate full-bleed moments with plain readable stopping points. Don't run one continuous
ambient scroll. **Section 1 is what part 4's beans pour over** — real DOM, readable through and
after the pour.

1. **THE STAMP** — `bag-label-macro.png` full-bleed, Magic UI `lens` to zoom into the ink date
   at macro. Hairline leaders draw out to three labels (valve · roast date · batch),
   `text-animate`, 40ms stagger. "Roasted the day it shipped. Printed, not implied."
   *Most important section below the hero — it turns a claim into something they verify.*
2. **THE COMPARISON** — no imagery. Two tabular rows on hairline rules: `48 HOURS` against
   `90–180 DAYS`, second one `number-ticker`, stops hard. "Most bags on a shelf were roasted
   three months ago. Ours left the drum yesterday."
3. **THE ROAST LOG** — `animated-list` on a `grid-pattern` chassis. Eight rows: date · origin ·
   roast time · hours since. An instrument log, not a testimonial wall.
4. **ORIGINS RAIL** — `marquee` driven by `scroll-based-velocity`, so the rail reports scroll
   speed. Type and tabular data only: origin · altitude · process · roast level.
5. **THE CAFES** — second `marquee`, reversed, slower. Wholesale names as ambient proof. Two
   rows at different rates give depth without a parallax layer.
6. **TASTING NOTES** — `dia-text-reveal` sweeping the note text. The one warm-adjacent moment,
   and it's type, never photography.
7. **THE FOUR FACTS** — `bento-grid` + `magic-card` spotlight borders. Roast to order · 48 hours
   · Connecticut · small batch. Hover life without colour.
8. **OBJECTIONS** — three Q/A pairs, `text-reveal`, `progressive-blur` at the scroll edge. Lead
   with the real one: "I already buy coffee I like."
9. **BUY** — `doorstep-48.png`. Counter settles on `48h` and stops, everything else still.
   `interactive-hover-button`, hairline restyle, ember border. "Buy a bag." / "Roasted to order.
   On your step in 48 hours."

Sections 3 and 4 invert to light ground (`#EDEDE8` / `#0B0B0C`) and back — one class on a
wrapper, 600ms, marking the midpoint as a chapter break.

## 7 · Assets — real paths

| File | Use |
|---|---|
| `/public/media/hero-roast-film.mp4` | PART 1. 1920×1080, 241 frames, 24fps, silent, all-intra |
| `/public/media/hero-roast-film-720.mp4` | PART 1, phone |
| `/public/media/part2-bag.mp4` | PART 2. same spec |
| `/public/media/part2-bag-720.mp4` | PART 2, phone |
| `/public/media/bag-label-macro.png` | the stamp |
| `/public/media/doorstep-48.png` | buy |
| `/review/part2-final-frame.jpg` | **reference, not shipped.** The pose part 3's camera matches, and the no-WebGL still. |
| `/public/models/hour-zero-bag.glb` | PARTS 3–4. Built in Blender, §9. |

Both films are all-intra — every frame a keyframe, so scrubbing is frame-accurate. Don't
re-encode them, don't run them through a build-time optimiser, don't let a CDN transcode them.
That silently kills the scrub.

Everything else is DOM, type and numbers. No stock photography. Missing asset → a labelled
hairline placeholder with the filename in it. Never invent a substitute image.

## 8 · Non-negotiables

- **Reduced motion** kills the scrub and the 3D outright. Hero becomes stills — six poster
  frames for parts 1–2, one static render for part 3, the DOM page with no pour for part 4 —
  counter printed as static values at each, the roll as two adjacent numbers with a rule
  between. The argument has to land with zero motion. That's the test this page has to pass.
- **Loading:** part 1's poster renders immediately at `00:00`. The hero doesn't arm until part
  1's first keyframes are buffered; until then the page scrolls as the reduced-motion version.
  Never a dead pin, never a dead canvas.
- **Reverse scroll** works everywhere, including the seam and the rip. The counter rolls
  backwards through the same digits because it's derived, never incremented.
- ScrollTrigger ranges are relative to trigger elements, never raw pixel offsets. Every section
  scoped to its own trigger — no monolithic page timeline.
- Semantic HTML, one `<h1>`, real focus states on the hairlines, the CTA is a real link.

## 9 · BLENDER — parts 3 and 4, the real build

All of this is modelled, textured and exported in Blender, then wired into the R3F canvas.
Nothing here is generated, filmed or bought.

### 9a · The GLB

Model and texture **the off-white HOUR ZERO pouch**. Reference `/review/bag-round-1/B-offwhite-4k.png`
and `/public/media/part2-bag.mp4`, which shows the same bag turning in light.

Off-white / bone flat-bottom pouch, matte, low sheen — a little glossy, nothing crazy. No wet
shine, no oil. Large black `HOUR ZERO` wordmark across the face, flush **brushed-steel** one-way
valve above it, a small spec block beneath on a hairline rule. Folded-over top seal, as part 2
leaves it. **Real geometry at the bottom seam** — part 4 tears it open, so model the seam as its
own edge loop, not a texture detail.

The pack changed from matte black to off-white. Any older note saying black is stale. Same
object in parts 2, 3 and 4, identical across all three.

### 9b · Label fixes — free here, do them

1. `VARIETY: HEIRLDOM` → **`HEIRLOOM`**. Straight typo.
2. `ROAST DATE: 07/14/2024` is stale. **Bake no date at all.** Leave that value area blank on
   the texture and render the live date in DOM over it — same mono, same size, same pale ink.
   A baked date destroys the argument of the site the day it ships.
3. The wordmark on the source art runs off both edges — the `H` and the final `O` are clipped.
   **Fit it inside the face with clear margin.** It survived three film takes; fix it here.

### 9c · Part 3 — the turn

**The opening camera matches `/review/part2-final-frame.jpg` exactly.** The seam in §5a is only
invisible if this pose is right. Measured off that frame at 1920×1080:

| | |
|---|---|
| Bag bbox | x `774`–`1149`, y `338`–`949` |
| Size in frame | `376` × `612` px |
| Height as share of frame | **56.7%** |
| Centre x | `961.5` — frame centre is `960`, so dead centre |
| Framing | square-on, front face flat to camera, no yaw, no roll |
| Set | black surround, faint floor plane, soft contact shadow at the base |
| Light | soft, even, shadowless on the face. No sun, no hard specular, no glare |

Render at 1920×1080, land the bag on those numbers, then **A/B against the JPEG at 100%** before
you call it matched.

The move: the bag rotates, the label comes around, it decelerates into rest and stops. No
overshoot, no bounce, no spin-up, no organic easing. An instrument turning, not a hero shot.

### 9d · Part 4 — the rip and the pour

Bag recentres left, still square-on, no flourish. **The bottom seam rips** — the tear starts at
the seam and runs along it, it does not climb the body. **Beans pour out** over the live DOM:
individual beans with space between them, the same read as the films, not a textured sheet.
**The pile builds until it fills the frame** — its end state fills the *actual* viewport at the
*actual* aspect ratio, which is exactly why this isn't a fixed-frame render.

Scroll-driven, not time-driven, throughout — every frame a function of progress, and scrolling
up reverses the pour cleanly. Lock one real-world bean size and hold apparent scale steady the
whole way down; beans that grow as they fall read as a different object arriving.

### 9e · Handoff

One `.glb`: geometry, baked textures, part-3 and part-4 poses as named markers or bones. No
`.blend`, no loose textures. Draco-compress it, under 8MB — it blocks the seam and the seam
can't wait on a download.

## 10 · Two corrections from the asset review

**The date on the macro still is stale.** `bag-label-macro.png` carries a struck `2025 04 16`.
Don't present it as the live roast date — mask that region with a rectangle matched to the pouch
panel and render the real date in DOM over it, same mono, same size, same pale ink, aligned to
where the stamp sits. Then `lens` magnifies live type instead of a fixed past date. Most
important correctness note on the page: the whole argument is freshness.

**The business name is HOUR ZERO.** On the bag, in the nav, in the `<title>`.
