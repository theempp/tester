# master

SIGNED:     HOUR ZERO (named 2026-09-15; see review/bag-round-1/BAG-ROUND-1.md)
NICHE:      small-batch coffee roaster
MODEL:      product
AUDIENCE:   b2c-considered
PROOF:      demonstrate that roast-to-order tastes measurably different to habitual coffee buyers who hesitate because they already buy coffee somewhere and doubt the difference is worth switching for
STORY:      The Build — one bean held through an uncut roast while a counter runs beside it, rolling from roast-minutes into hours-since-roast and never resetting
BEATS:      hold -> morph -> annotate
ASSET:      shipped: hero-roast-film (PART 1), part2-bag (PART 2), bag-label-macro, doorstep-48 | blender: hour-zero-bag.glb (PARTS 3-4) | chrome: grain-canvas
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
SLOTS:      hero-roast-film · PART 1, scrub spine frames 1-5 · 16:9 (9:16 safe centre) · the approach: roaster outdoors, beans pouring, camera falls into the curtain, uncut · type-reserve: right-edge readout column + lower third, SCRIM REQUIRED (near-white first ~5s) · reject: cuts, crossfades, hands in frame, cafe warmth, people · SIGNED + SHIPPED (take 6, upscaled 1080p)
            part2-bag · PART 2, scrub spine frames 6-8 · 16:9 (9:16 safe centre) · the fall continues, camera backs off, off-white pouch revealed catching beans, last bean, self-seal, HARD LOCK on the tail · type-reserve: n/a, pure black · reject: cuts, camera push-in, drift in the tail, sun, oil, floor clutter · SIGNED + SHIPPED (take 3, upscaled 1080p)
            hour-zero-bag.glb · PARTS 3-4, the turn and the rip · live WebGL · off-white HOUR ZERO pouch, PART 3 opening camera matched to review/part2-final-frame.jpg · reject: baked date, clipped wordmark, HEIRLDOM typo, organic easing · BLENDER — never quoted on Higgsfield
            bag-label-macro · frame 7, the printed date as physical proof · 16:9 · sealed kraft bag, one-way valve, ink date stamp at macro distance · type-reserve: left third for annotation callouts · reject: mugs, steam, lifestyle props, styled flat-lay · generate
            doorstep-48 · frame 9, the payoff under the CTA · 16:9 · plain unbranded box on a New England doorstep, early light · type-reserve: centre block for the CTA · reject: people, pets, holiday dressing, logo clutter · generate
            grain-canvas · site-wide texture chrome · full-bleed · 2D noise field · n/a · n/a · placeholder (Magic UI `noise-texture`, built in code, never generated)
CTA:        hard-cta
IA:         pin (roast, frames 1-6) -> the stamp -> the comparison -> the roast log -> origins rail -> the cafes -> tasting notes -> the four facts -> objections -> buy
CHAR:       cold instrument laid over a hot process — machined restraint holding something violent
TYPE:       mono caps, tabular temp/hour readouts, hairline rules; oversized type cropped by the drum
COMP:       centred subject held at macro distance; readouts pinned to the frame edge as instrument chrome, never as a landing-page header
MAT:        brushed stainless and matte black powder-coat, factory-fresh, under near-black chrome; chaff and roast smoke. Packaging is an OFF-WHITE / bone flat-bottom pouch with a large black HOUR ZERO wordmark and a flush brushed-steel valve, matte with a low sheen (REVISED 2026-09-15 by the designer, superseding the matte-black revision earlier the same day, which itself superseded kraft). The off-white pouch is the hero pack and is the SAME OBJECT in PARTS 2, 3 and 4 — the shipped PART 2 film, the PART 3 GLB and the PART 4 ripping bag. Source art: review/bag-round-1/B-offwhite-4k.png
MOVE:       damped playhead scrub with live counters; hard-cut arrivals below the pin
SIGNATURE:  the never-resetting counter (DEVICE doubling as the recurring transition device)

MECHANISM:  hybrid — pin-film (PARTS 1-2) then live 3D (PARTS 3-4)
PRIMITIVES: n/a (pin-film) for PARTS 1-2; R3F/Three GLB in one transparent WebGL canvas for PARTS 3-4
MOTION:     gsap-scrolltrigger (+ Lenis, lerp 0.16, scrub true, linear tween easing)
RUNWAY:     34vh desktop / 22vh phone (hero: 15vh film + 19vh live 3D) + ~22vh desktop / ~18vh phone across 9 DOM sections
STORYBOARD: SCROLL-STRUCTURE.md (four parts + AMENDMENTS 1-4 — THE AUTHORITY) + ASTRA-PROMPT.md §5/§9.
            STORYBOARD.md's 9 pin frames are PRE-RESTRUCTURE and stale; COMPONENTS.md's 9 below-hero sections stand.
WHY:        Scrubbed film is the only mechanism where the image and the readout are driven off
            one progress value and cannot disagree, and the proof in PARTS 1-2 is surface
            (chaff, smoke, a bag sealing itself) which film holds and a mesh does not. But
            PART 4 composites falling beans over a REAL DOM page, which needs alpha that
            baked video cannot output, and its end state must fill the actual viewport at the
            actual aspect ratio, which a fixed-frame render cannot. So the page crosses ONCE,
            inside PART 2's hard-locked motionless tail, from film to one live WebGL canvas
            that carries PARTS 3 and 4. Not pure pin-film: filming PART 4 bakes the page in
            and kills live text, links and reflow. Not pure live-scene: PARTS 1-2's surface
            proof is not reachable in a mesh, and they are already shot and signed.
            The designer chose this knowingly over two cheaper options. engine-decision does
            NOT re-run.

REOPENED-RESOLVED: 2026-09-15 — MECHANISM reopened and re-signed as hybrid. The single seam
            is at hero progress 0.44 and is hidden by PART 2's locked tail; PART 2's final
            frame (review/part2-final-frame.jpg) is the pose PART 3's Blender camera matches.

TYPE-RESERVE PROBLEM: PART 1's film is near-white for its first ~5s (pale grey salt flat under
            a near-white sky — the palette drifted during generation and was accepted). The
            right-edge readout column and the lower third sit over that, and foreground
            #EDEDE8 on near-white is unreadable. A SCRIM IS REQUIRED, not optional — spec in
            ASTRA-PROMPT.md §4a. It must be constant through PARTS 1-2, never animated.
