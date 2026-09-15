# ASTRA BUILD PROMPT — paste this whole file as one prompt

Build a single-page marketing site for a small-batch coffee roaster in Connecticut.
Roast-to-order, ships within 48 hours, nobody else local does that. The visitor already
buys coffee somewhere and does not believe a switch would taste different. One CTA: buy a bag.

Do not ask clarifying questions. Every decision below is already made. Build all of it.

---

## 1 · Stack

- Next.js (App Router) + TypeScript + Tailwind
- GSAP + ScrollTrigger for all scroll-bound motion
- Lenis for smooth scroll, `lerp: 0.16`, mounted once at the root
- Magic UI components (`npx shadcn@latest add "https://magicui.design/r/<name>.json"`)
- No other animation library. No Locomotive, no Barba, no Swiper, no second WebGL context.

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

## 4 · Global chrome — mounted once, present on every section

1. **Grain field.** Magic UI `noise-texture`, `fixed inset-0 z-[-2] pointer-events-none`.
   Site-wide, never per-section.
2. **Progress instrument.** Fixed, bottom-left, `font-mono text-[10px] uppercase tabular-nums`,
   foreground at 60% opacity. It reads in HOURS, not percent: `000H` → `048H` across the
   document. Zero-padded to three digits so the glyph width never shifts as digits change.
3. **Registration marks.** Four 9px `+` glyphs, `position: fixed`, one inset 24px from each
   corner of the viewport. Static, always visible, hairline colour. Do not animate them.
4. **Cursor.** Magic UI `smooth-cursor`, spring-damped.
5. **Nav.** Fixed, hairline bottom border, mono caps, the word BUY at the right at all times.

## 5 · Structure — 10 sections, ~36vh total runway

### THE PIN — section 0 (14vh desktop / 9vh phone)

One `<video>` (`hero-roast-film.mp4`, all-intra encoded, `muted playsinline preload="auto"`),
`position: fixed`, full-bleed, object-cover, **z-index below the DOM**. It is NOT inside a pin
spacer and it does not unmount at the section boundary — it is a persistent fixed layer, and
scroll changes what it is doing, not whether it exists. Drive `video.currentTime` from
ScrollTrigger `scrub: true` against a 14vh trigger element. Damping lives in Lenis; the tween
easing is linear.

Six frames across that runway:

| # | Progress | On screen | Copy |
|---|---|---|---|
| 1 | 0.00–0.08 | Green beans, still, cold drum. Counter `00:00`. Nothing moves. | "Your coffee was roasted. You just don't know when." |
| 2 | 0.08–0.26 | Drum turns, beans tumble. Counter climbs. | "This one started when you did." |
| 3 | 0.26–0.40 | First crack. Chaff lifts. **Compress the scrub here** — more video time per vh than anywhere else, so it arrives fast. | "First crack. Nine minutes, fourteen seconds." |
| 4 | 0.40–0.58 | Oil rising, colour deepening. Longest hold on the page. | "The part that decides how it tastes." |
| 5 | 0.58–0.74 | Camera is now inside the fall — the machine is gone and dark beans fill the frame edge to edge. `12:40` scales past the viewport edges, cropped. | "Twelve forty. Done." |
| 6 | 0.74–1.00 | Nothing but falling beans, full frame, still travelling downward. **THE ROLL.** `12:40` rolls into `00h SINCE ROAST`, 60ms stagger per digit, right to left, linear, no overshoot. | "Same clock. It just keeps going." |

Frame 3's label uses Magic UI `hyper-text` (scramble-then-resolve), hard-cut in, no fade.
Frame 6's roll is the ONE place Magic UI `number-ticker` is correct.
Keep the right third and bottom third free of type for the first half of the pin. From frame
5 onward the frame is a flat field of near-black beans and will carry the readout anywhere.

**At the end of the pin the counter detaches and docks to the page edge, still counting,
for every section below.**

**Do not freeze the final video frame on release.** The film ends mid-motion, travelling
downward — the same direction the visitor is scrolling. Let the pin release into that motion
so the scroll reads as picking up where the film left off, rather than cutting away from a
held shot. This is the single best transition on the page; do not flatten it into a fade.

### BELOW THE PIN — the pin is quiet, these are dense

Alternate immersive full-bleed moments with plain readable stopping points. Do not run one
continuous ambient scroll.

1. **THE STAMP** — `bag-label-macro.png`, full-bleed. Magic UI `lens` so the visitor can zoom
   into the ink date at macro. Hairline leader lines draw out to three labels on entry
   (valve · roast date · batch), `text-animate` per line, 40ms stagger.
   Copy: "Roasted the day it shipped. Printed, not implied."
   *This is the most important section below the pin. It converts a claim into something the
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

## 6 · Assets

| File | Use |
|---|---|
| `/public/media/hero-roast-film.mp4` | the pin, frames 1–6. All-intra, `-g 1`, so scrubbing is frame-accurate |
| `/public/media/bag-label-macro.png` | section 1, the stamp |
| `/public/media/doorstep-48.png` | section 9, buy |

Everything else on this page is DOM, type and numbers. Do not add stock photography.
If an asset is missing, render a labelled hairline placeholder box with the filename in it.
Never invent a substitute image.

## 7 · Non-negotiables

- **Reduced motion:** `prefers-reduced-motion` kills the scrub entirely. The pin becomes six
  stacked stills with the counter printed as static values at each. The roll becomes two
  adjacent numbers with a rule between them. The whole argument must still land with zero
  motion — that is the test this page has to pass.
- **Phone:** pin drops to 9vh. Frame 4's hold is the one that shortens, never frame 6. Video
  re-crops to a centred 9:16 safe area. The readout column moves from the right edge to a
  fixed bottom bar. Cropped type crops harder, it does not shrink to fit.
- **Loading:** frame 1's poster renders immediately with the counter at `00:00`. The pin does
  not arm until the video's first keyframe range is buffered; until then the page scrolls as
  the reduced-motion version. Never show a dead pin.
- **Reverse scroll:** fully reversible everywhere. The counter rolls backward through the same
  digits because it is derived, never incremented.
- ScrollTrigger ranges are relative to trigger elements, never raw pixel offsets. Each section
  is scoped to its own trigger — no single monolithic page timeline.
- Semantic HTML. One `<h1>`. Real focus states on the hairlines. The CTA is a real link.

---

## 8 · Two rules added after the assets were reviewed

**The printed date is stale and must be overprinted.** `bag-label-macro.png` carries a
struck date reading `2025 04 16`. Do NOT present it as the live roast date. Mask that
region with a matte-black rectangle matched to the pouch panel, and render the real date
in DOM in the same mono, same size, same pale ink colour, aligned to where the stamp sits.
It then stays correct forever and the `lens` zoom magnifies live type rather than a fixed
past date. This is the single most important correctness note on the page — the whole
argument is freshness, and a hardcoded sixteen-month-old date destroys it.

**Do not reduce grain opacity over the bag section.** That frame is very low-key and the
pouch sits close to the ground value. The site-wide `noise-texture` field must stay at its
normal opacity there or the subject merges into the background.
