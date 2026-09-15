# master

SIGNED:     HOUR ZERO (named 2026-09-15; see review/bag-round-1/BAG-ROUND-1.md)
NICHE:      small-batch coffee roaster
MODEL:      product
AUDIENCE:   b2c-considered
PROOF:      demonstrate that roast-to-order tastes measurably different to habitual coffee buyers who hesitate because they already buy coffee somewhere and doubt the difference is worth switching for
STORY:      The Build — one bean held through an uncut roast while a counter runs beside it, rolling from roast-minutes into hours-since-roast and never resetting
BEATS:      hold -> morph -> annotate
ASSET:      on disk: none | generate: hero-roast-film, bag-label-macro, doorstep-48 | chrome: grain-canvas
DEVICE:     The counter that never resets — the same readout that times the roast keeps counting as hours-since-roast, so freshness is one continuous number rather than a claim
NOT:        no editorial white-space luxury; no soft spatial product-render air; no warm lifestyle-cafe documentary
FEEL:       instrument · macro, type-in-field, texture, type-reveal
MOTION-INTENT: playhead into arrivals · measured with express passages · damped and mechanical · spread
ASSUMED:    card-1 `model` answered "high end detailing services", which does not match the coffee brief — scored `product` from the brief instead
RESOLVED:   business name — supplied 2026-09-15 as HOUR ZERO (was ASSUMED)
ASSUMED:    COMP and SIGNATURE derived from the picked world, not stated in the pitch
ASSUMED:    the designer's 21st.dev bookmarks are unreachable — the `21st` MCP server is
            unauthorized and this session cannot run OAuth. Components below are picked from
            the open Magic UI registry instead. Authorizing `21st` reopens this pick.
REOPENED:   2026-09-15 — designer asked for a long, motion-dense, component-rich page.
            MECHANISM unchanged (pin-film); IA, RUNWAY and section count expanded. The pin
            keeps quiet chrome; all density lives below it via below-fold-ui. See COMPONENTS.md
SLOTS:      hero-roast-film · pin scrub spine, frames 1-6 · 16:9 (9:16 safe centre) · one batch in the drum from green through dump and cool, uncut · type-reserve: right-edge readout column + lower third · reject: cuts, crossfades, hands in frame, cafe warmth, people · generate
            bag-label-macro · frame 7, the printed date as physical proof · 16:9 · sealed kraft bag, one-way valve, ink date stamp at macro distance · type-reserve: left third for annotation callouts · reject: mugs, steam, lifestyle props, styled flat-lay · generate
            doorstep-48 · frame 9, the payoff under the CTA · 16:9 · plain unbranded box on a New England doorstep, early light · type-reserve: centre block for the CTA · reject: people, pets, holiday dressing, logo clutter · generate
            grain-canvas · site-wide texture chrome · full-bleed · 2D noise field · n/a · n/a · placeholder (Magic UI `noise-texture`, built in code, never generated)
CTA:        hard-cta
IA:         pin (roast, frames 1-6) -> the stamp -> the comparison -> the roast log -> origins rail -> the cafes -> tasting notes -> the four facts -> objections -> buy
CHAR:       cold instrument laid over a hot process — machined restraint holding something violent
TYPE:       mono caps, tabular temp/hour readouts, hairline rules; oversized type cropped by the drum
COMP:       centred subject held at macro distance; readouts pinned to the frame edge as instrument chrome, never as a landing-page header
MAT:        brushed stainless and matte black powder-coat, factory-fresh, under near-black chrome; chaff and roast smoke. Packaging is matte black flat-bottom pouch with a flush brushed-steel valve (revised 2026-09-15 from kraft/print-grain: kraft read rustic-artisanal and drifted toward the warm-cafe register the NOT line forbids)
MOVE:       damped playhead scrub with live counters; hard-cut arrivals below the pin
SIGNATURE:  the never-resetting counter (DEVICE doubling as the recurring transition device)

MECHANISM:  pin-film
PRIMITIVES: n/a (pin-film)
MOTION:     gsap-scrolltrigger (+ Lenis, lerp 0.16, scrub true, linear tween easing)
RUNWAY:     14vh desktop / 9vh phone (pin) + ~22vh desktop / ~18vh phone across 9 DOM sections
STORYBOARD: STORYBOARD.md — 9 frames (pin) + COMPONENTS.md — 9 named sections below
WHY:        The signed story is one uncut scene changing state, and the signed DEVICE is a
            number that must stay welded to that scene's time — scrubbed film is the only
            mechanism where the image and the readout are driven off one progress value and
            cannot disagree. Not pin-live-scene: the proof is surface (chaff, oil, smoke),
            which film holds and a mesh cannot, and there is no geometry worth a model. Not
            scroll-primitives: no 1-3 isolated moments carry a continuous transformation,
            and macro-proof-scrub would assert the roast rather than show it. Not
            no-mechanism: the brief argues the opposite of restraint (budget spread, motion
            playhead). One film is also one quote and one GO versus six generated stills.
