Single-page site for HOUR ZERO, a small-batch roaster in Connecticut. Roast-to-order, ships in 48 hours. The visitor already buys coffee and doesn't think switching would taste different. One CTA: buy a bag.

Every call is made. Don't ask questions, build it.

Authority: this file, then SCROLL-STRUCTURE.md AMENDMENT 4, then master.md. TRANSITION-BRIEF.md and STORYBOARD.md are stale — ignore them.

0 · Engine
Hero is one scroll-driven scene, four parts, same subject throughout.

Part	What	Medium
1	Roaster outdoors, beans pour from the drum, camera falls into the curtain	film hero-roast-film.mp4
2	Camera backs off, pouch revealed catching beans, last bean drops, bag seals, frame locks	film part2-bag.mp4
3	Sealed bag turns, label rests facing the visitor	live 3D (GLB)
4	Bag recentres left, bottom rips, beans pour over the real page, pile fills frame	live 3D over live DOM
The 3D is the main component, not a garnish — over half the runway and all the interaction. Parts 3–4 can't be film: part 4 composites over real DOM, which needs alpha.

One WebGL context on the page. Part 4 continues part 3's state, not a second mount.

1 · Stack
Next.js App Router + TS + Tailwind. GSAP/ScrollTrigger for scroll-bound motion. Lenis at root, lerp: 0.16. React Three Fiber + drei — one <Canvas>, ever. Magic UI via npx shadcn@latest add "https://magicui.design/r/<name>.json". No other animation library.

2 · Identity
A cold instrument over a hot process. Every warm thing is behind glass.

Ground #0B0B0C · foreground #EDEDE8 · hairline rgba(237,237,232,0.14) · ember #C4491F only on counter digits and the CTA border.

JetBrains Mono on <body>. Caps on every label and readout. tabular-nums on every number. Headlines clamp(2.5rem,7vw,7rem), tight tracking. 1px rules.

No rounded cards, shadows, gradients, glow, serif, stock warmth, emoji. If it starts looking like a specialty-coffee Instagram, it's wrong.

3 · The counter — never resets
00:00 roast time → climbs → at 12:40 it rolls digit-by-digit into 00h SINCE ROAST and keeps counting. Roast time and freshness are the same number. That's the argument.

Derive the value from scroll progress every frame. Never setInterval, never a count-up tween, except the one roll. Reverse-scroll integrity is the point.

It's DOM above both media layers on one progress value, and it does not react to the seam — no re-mount, no re-tween, no format change. Part 1 00:00–12:40 · part 2 the roll to 00h · part 3 00h–06h · part 4 06h–48h, then docks to the edge.

4 · Chrome — mounted once
Grain: noise-texture, fixed inset-0 z-[-2] pointer-events-none. Opacity never changes — not at the seam, not over the bag sections.
Progress readout: fixed bottom-left, mono 10px caps tabular, 60% opacity. 000H–048H, zero-padded to three so glyph width never shifts.
Four 9px + registration marks, fixed, inset 24px per corner, hairline, static.
smooth-cursor. Fixed nav, hairline bottom border, BUY at right.
Type scrim: part 1's film is near-white for ~5s, and #EDEDE8 on near-white is unreadable. Fixed gradient rgba(11,11,12,0.55) at the right edge → transparent by 38% across, plus one from the bottom → transparent by 30% up. Constant through parts 1–2 — never fade them in. A scrim that animates is a scrim I notice. They fade out over part 3.

5 · Hero — 34vh desktop / 22vh phone
Parts 1–2 take 15vh, parts 3–4 take 19vh. One pinned stage, no visible boundary inside it.

Three layers: fixed full-bleed video, fixed full-bleed transparent WebGL canvas above it (mounted from load, never unmounted), DOM type above both. Neither media layer sits in a pin spacer.

Parts 1–2 — film, 0.00 → 0.44
Two <video muted playsinline preload="auto">, all-intra. Drive currentTime from ScrollTrigger scrub: true, linear easing — damping is Lenis's job. Part 1 0.00–0.24, part 2 0.24–0.44.

The film-to-film join is already invisible — don't decorate it. Part 2 frame 1 is part 1 frame 241. Stack them, switch the instant part 1 ends, no fade or dissolve. Preload part 2.

Progress	On screen	Copy
0.00–0.04	Roaster wide, beans pouring. 00:00.	"Your coffee was roasted. You just don't know when."
0.04–0.10	Closing on the curtain.	"This one started when you did."
0.10–0.15	Beans darkening. Compress the scrub — more video per vh. hyper-text, hard cut in.	"First crack. Nine minutes, fourteen seconds."
0.15–0.20	Inside the curtain. Longest hold.	"The part that decides how it tastes."
0.20–0.24	Only beans, travelling down. 12:40 scaled past the viewport edges, cropped.	"Twelve forty. Done."
0.24–0.30	Part 2 begins seamlessly. The roll: number-ticker, 60ms per digit, right to left, linear, no overshoot.	"Same clock. It just keeps going."
0.30–0.38	Camera backs away, pouch revealed catching beans.	"It goes straight into the bag."
0.38–0.44	Last bean drops, bag folds shut, frame locks dead still.	"Sealed the same day."
⚠ The seam — film → 3D at 0.44. The hardest thing here.
Part 2's last ~2s are dead still, camera and bag. That stillness exists so the handoff can hide in it. The trick: swap media while nothing moves, on two pictures that match. review/part2-final-frame.jpg is part 2's exact last frame; the GLB's part-3 camera reproduces it (§8).

Pre-warm. GLB, textures, first shader compile all done by 0.34 — render at opacity 0, parked on the part-3 pose. A compile hitch at the seam is unrecoverable.
Swap on the lock, never on motion. 0.44, inside the motionless tail.
One frame, no transition. Canvas 0→1, video 1→0, same frame. No crossfade, dissolve, fade to black, flash or blur — a crossfade between near-identical images reads as a double exposure and announces the thing you're hiding.
Hold the last video frame underneath until 0.55. A dropped canvas frame then shows the right picture instead of a hole.
Canvas clear colour transparent, page behind it #0B0B0C, so the sets line up.
Survives reverse scroll — same frame, same rules, backwards. Test upward as hard as down.
Scrub slowly across 0.44 screenshotting every frame. If you can point at where the medium changed, it isn't done.

Parts 3–4 — live 3D, 0.44 → 1.00
Progress	The 3D	Copy
0.44–0.52	Held exactly as the film left it. Nothing moves.	—
0.52–0.68	The turn. Label comes around, settles square-on. Damped, mechanical, no overshoot.	"Roasted to order. Printed, not implied."
0.68–0.76	Bag recentres to the LEFT third; first DOM section fades up behind the canvas.	"Then it leaves."
0.76–0.88	The rip. Bottom seam tears, beans pour over the live page.	"48 hours."
0.88–1.00	Pile builds until it fills the frame over real readable content.	"On your step."
The DOM behind the beans is real and interactive — don't screenshot, bake or freeze it.

Don't freeze the final frame on release. The hero releases while the beans are still moving in the scroll direction. Best transition on the page — don't flatten it into a fade.

Phone: 22vh, centred 9:16 crop, -720 files. Shorten the 0.15–0.20 hold — never the roll, never the lock. Readout moves to a fixed bottom bar. Cropped type crops harder, doesn't shrink.

No WebGL: part 3 = static render, part 4 = hard cut to DOM. Park on part 2's final frame. Never a dead canvas.

6 · Below the hero
Alternate full-bleed moments with plain readable stops. Section 1 is what the beans pour over — real DOM, readable through and after.

THE STAMP — bag-label-macro.png full-bleed, lens to zoom the ink date. Hairline leaders to three labels (valve · roast date · batch), text-animate, 40ms stagger. "Roasted the day it shipped. Printed, not implied." Most important section below the hero.
THE COMPARISON — no imagery. 48 HOURS vs 90–180 DAYS on hairline rules, second one number-ticker, stops hard. "Most bags on a shelf were roasted three months ago. Ours left the drum yesterday."
ROAST LOG — animated-list on grid-pattern. Eight rows: date · origin · roast time · hours since. An instrument log, not testimonials.
ORIGINS RAIL — marquee on scroll-based-velocity. Type only: origin · altitude · process · roast level.
CAFES — second marquee, reversed, slower. Wholesale names. Two rates give depth without a parallax layer.
TASTING NOTES — dia-text-reveal. The one warm moment, and it's type.
FOUR FACTS — bento-grid + magic-card. Roast to order · 48 hours · Connecticut · small batch.
OBJECTIONS — three Q/A, text-reveal, progressive-blur at the edge. Lead with "I already buy coffee I like."
BUY — doorstep-48.png. Counter settles on 48h and stops. interactive-hover-button, hairline, ember border. "Buy a bag." / "Roasted to order. On your step in 48 hours."
Sections 3–4 invert to light ground and back — one wrapper class, 600ms.

7 · Assets
/public/media/ — hero-roast-film.mp4, part2-bag.mp4 (both 1920×1080, 241f, 24fps, silent, all-intra), their -720 phone files, bag-label-macro.png, doorstep-48.png. /review/part2-final-frame.jpg — reference only, not shipped. /public/models/hour-zero-bag.glb — parts 3–4, not built yet, see §8.

Don't re-encode the films, optimise them at build time, or let a CDN transcode them. They're all-intra so the scrub is frame-accurate; re-encoding silently kills it.

Everything else is DOM, type and numbers. No stock photography. Missing asset → labelled hairline placeholder with the filename. Never invent a substitute.

8 · Blender scope — parts 3 and 4
Modelled and exported in Blender, then wired into R3F. Reference review/bag-round-1/B-offwhite-4k.png and part2-bag.mp4, which shows the same bag in light.

The GLB: off-white/bone flat-bottom pouch, matte, low sheen — a little glossy, nothing crazy, no wet shine, no oil. Black HOUR ZERO wordmark across the face, flush brushed-steel valve above, spec block beneath on a hairline rule. Folded-over top seal as part 2 leaves it. Model the bottom seam as its own edge loop — part 4 tears it open. Identical object in parts 2, 3 and 4. (The pack changed from black to off-white; older notes saying black are stale.)

Label fixes: HEIRLDOM → HEIRLOOM. Bake no roast date — leave that value area blank and render the live date in DOM over it, same mono/size/pale ink; a baked date destroys the argument the day it ships. The wordmark on the source art is clipped at both edges — fit it inside the face with margin.

Part 3 camera must match review/part2-final-frame.jpg. At 1920×1080: bag bbox x 774–1149, y 338–949; 376×612 px; 56.7% of frame height; centre x 961.5 (frame centre 960, so dead centre). Square-on, no yaw or roll. Black surround, faint floor, soft contact shadow. Soft even light, no sun, no hard specular. A/B the render against the JPEG at 100% before calling it matched. Then the bag rotates and decelerates into rest — an instrument turning, not a hero shot.

Part 4: tear runs along the seam, never up the body. Individual beans with space between them, not a textured sheet. Pile fills the actual viewport at the actual aspect ratio — which is why this isn't a fixed-frame render. Scroll-driven, reverses cleanly. One locked real-world bean size, steady apparent scale all the way down.

Export one Draco-compressed .glb under 8MB, poses as named markers. It blocks the seam.

9 · Non-negotiables
Reduced motion kills the scrub and the 3D. Hero becomes stills — six poster frames, one static bag render, the DOM page with no pour — counter printed as static values, the roll as two numbers with a rule between. The argument must land with zero motion.
Loading: part 1's poster renders immediately at 00:00. The hero doesn't arm until part 1's first keyframes buffer; until then the page scrolls as the reduced-motion version. Never a dead pin, never a dead canvas.
Reverse scroll works everywhere, including the seam and the rip.
ScrollTrigger ranges relative to trigger elements, never raw pixel offsets. No monolithic timeline.
bag-label-macro.png carries a stale struck date 2025 04 16. Mask it and render the live date in DOM over it, so lens magnifies live type. The whole argument is freshness.
Semantic HTML, one <h1>, real focus states, the CTA is a real link.
The business name is HOUR ZERO — on the bag, in the nav, in the <title>.