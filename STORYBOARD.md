# STORYBOARD — the roaster

MECHANISM: pin-film · MOTION: gsap-scrolltrigger (+ Lenis) · RUNWAY: 14vh desktop / 9vh phone (pin) + DOM sections below

Motion floor: Lenis `lerp: 0.16` site-wide. `scrub: true`. One all-intra `<video>` on the
pin (not a frame sequence — see WHY). Ranges relative to the pin trigger, never pixel
offsets. Counter is DOM chrome over the video layer, `tabular-nums`, fixed digit count,
zero-padded (LEDGER Worked, weevolveit.com). Scrub easing is linear — `weight: mechanical`
— with damping living in Lenis, not in the tween.

---

## Beat 1 — HOLD (frames 1-3)

### Frame 1 — the paused opening
- **Screen** — Green beans, still, at the mouth of a cold drum. Near-black surround.
  Right-edge readout column: `00:00` / `AMBIENT`. Nothing moving.
- **Motion** — None. The stillness is the work: the page opens on a machine that has not
  started, so the first scroll is visibly the user starting it.
- **Window** — 0.00–0.08 of pin range. Layer: video frame 0 + DOM chrome. No stagger.
- **Copy** — "Your coffee was roasted. You just don't know when."
- **Purpose** — Names the hesitation in the first sentence instead of arguing with it.
- **Asset** — generate (`hero-roast-film`, frame 0)

### Frame 2 — the drum turns
- **Screen** — Drum rotating, beans tumbling, still green-gold. Readout climbs `01:12`,
  temperature rising.
- **Motion** — Video scrub begins; the readout is driven off the same normalized progress
  as the video time, so number and image can never disagree.
- **Window** — 0.08–0.26. Layer: video. Readout updates per rAF off scrub progress.
- **Copy** — "This one started when you did."
- **Purpose** — Establishes that scroll *is* the roast clock. Sets up the DEVICE.
- **Asset** — generate (`hero-roast-film`)

### Frame 3 — first crack
- **Screen** — Macro. A bean splits, chaff lifts off. Readout `09:14`.
- **Motion** — Express passage: the scrub covers more video time per vh here than anywhere
  else, so first crack arrives faster than the frames around it. One hard flash of
  oversized type cropped by the drum edge — `FIRST CRACK` — no fade.
- **Window** — 0.26–0.40, compressed. Layer: video + type-in-field DOM. Type: hard-cut in,
  no stagger.
- **Copy** — "First crack. Nine minutes, fourteen seconds."
- **Purpose** — The one violent moment. `pace: express` earns its passage here.
- **Asset** — generate (`hero-roast-film`)

---

## Beat 2 — MORPH (frames 4-6)

### Frame 4 — development
- **Screen** — Macro, oil rising on the surface, colour deepening. Readout `11:02`.
- **Motion** — Slow push in. Measured hold — the longest vh spend on the pin.
- **Window** — 0.40–0.58. Layer: video.
- **Copy** — "The part that decides how it tastes."
- **Purpose** — `measured` pace; gives the macro effect somewhere to actually live.
- **Asset** — generate (`hero-roast-film`)

### Frame 5 — inside the fall
- **Screen** — The camera is now so close the machine is gone. Dark brown and near-black
  beans pour downward and fill the frame edge to edge. `12:40` sits over the field, cropped
  by the viewport.
- **Motion** — The push-in continues; the frame fills completely with falling beans and the
  camera begins travelling downward with them.
- **Window** — 0.58-0.74. Layer: video + DOM type.
- **Copy** — "Twelve forty. Done."
- **Purpose** — Closes the roast, and converts the frame into a flat dark field so the
  counter has a clean canvas for the roll.
- **Asset** — generate (`hero-roast-film`)

### Frame 6 — THE ROLL (SIGNATURE)
- **Screen** — Nothing but falling beans, full frame, still travelling downward at a constant
  rate. The readout does not reset: `12:40` rolls, digit by digit, into `00h SINCE ROAST`.
- **Motion** — The number is the only thing that changes state; the bean field continues at a
  steady speed behind it. Digits roll mechanically, linear, no overshoot.
- **Window** — 0.74-1.00. Layer: DOM chrome over a still-moving video. Stagger: 60ms per
  digit, right to left.
- **Copy** — "Same clock. It just keeps going."
- **Purpose** — The DEVICE. Roast-time and freshness proven to be one continuous number.
- **Asset** — generate (`hero-roast-film`, final seconds)

**Handoff cue** — two things carry across the unpin. The counter detaches and docks to the
page edge, still counting, for every section below. And the film's last frame is already
travelling DOWNWARD — the same direction the visitor is scrolling — so the pin releases mid-
motion into a flat dark field rather than cutting away from a composed shot. Do not freeze
the final frame. The release should feel like the scroll picked up where the film left off.

---

## Beat 3 — ANNOTATE (frames 7-9, DOM arrivals below the pin)

### Frame 7 — the stamp
- **Screen** — Macro on a sealed kraft bag: one-way valve, and a date stamped in ink.
  Hairline annotation lines draw out to three labels.
- **Motion** — Arrivals. Lines draw on entry, labels type-reveal per line.
- **Window** — Own trigger, 0.0–1.0 of a 1.4vh section. Layer: DOM + still. Stagger: 40ms
  per line.
- **Copy** — "Roasted the day it shipped. Printed, not implied."
- **Purpose** — Turns the pin's claim into something physical the buyer receives.
- **Asset** — generate (`bag-label-macro`)

### Frame 8 — the comparison
- **Screen** — Two stacked tabular rows, instrument chrome, no imagery. `48 HOURS` against
  `90–180 DAYS`, sourced and footnoted.
- **Motion** — Rows arrive; the second number counts up to its value and stops hard.
- **Window** — Own trigger, 1.2vh. Layer: DOM only.
- **Copy** — "Most bags on a shelf were roasted three months ago. Ours left the drum
  yesterday."
- **Purpose** — The direct answer to "it won't taste different enough." The only frame that
  argues; it earns the right because frames 1-6 already showed the mechanism.
- **Asset** — none (DOM)

### Frame 9 — the doorstep, and the CTA
- **Screen** — A plain box on a New England doorstep, early light. Counter reads `48h`.
  Buy sits centred beneath it.
- **Motion** — Counter settles on 48 and stops. Everything else still.
- **Window** — Own trigger, 1.0vh. Layer: still + DOM.
- **Copy** — "Buy a bag." / sub: "Roasted to order. On your step in 48 hours."
- **Purpose** — `hard-cta`. The number that opened the page closes it.
- **Asset** — generate (`doorstep-48`)

---

## Page

- **Total runway** — 14vh desktop / 9vh phone on the pin; 3.6vh of DOM sections below.
- **Reverse scroll** — Fully reversible. The counter rolls backward through the same digits;
  it is derived from progress, never incremented, so it cannot desync on a fast scroll-up.
- **Phone** — Pin runway drops to 9vh and frame 4's hold is the frame that shortens, not
  frame 6. Video re-crops to a centred 9:16 safe area; the readout column moves from the
  right edge to a fixed bottom bar. Type-in-field numbers stay cropped — they crop harder.
- **Reduced motion** — No scrub. The pin becomes six stacked stills with the readout printed
  as static values at each one. Frame 6 becomes two adjacent numbers with a rule between
  them, over a still frame of the bean field. The argument survives completely without motion; that is the test it has to pass.
- **Loading** — Frame 1 poster still renders immediately with the counter at `00:00`. The
  pin does not arm until the video's first keyframe range is buffered; until then the page
  scrolls as the reduced-motion version rather than showing a dead pin.
- **Grain** — Site-wide `fixed z-[-2]` 2D canvas, built in code. Chrome, never generated.
