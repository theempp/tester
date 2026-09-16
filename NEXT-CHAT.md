# HOUR ZERO — continue the build

Folder: `/Users/zozo/Desktop/test`. Next.js App Router + TS + Tailwind, GSAP ScrollTrigger + Lenis (`lerp: 0.16`), one R3F `<Canvas>`. Dev server: `npm run dev` on port 3001. Build with `npm run build`. Everything is committed and pushed on `master`.

Read `ASTRA-PROMPT.md` first — that's the spec. `TRANSITION-BRIEF.md` and `STORYBOARD.md` are stale, ignore them.

## How the page works

One scroll runway (`.hero-runway`, 3500svh) drives a progress value 0→1. Parts 1–2 scrub two baked films by setting `video.currentTime`. At 0.44 it swaps to live 3D — a Draco GLB at `public/models/hour-zero-bag.glb` on a transparent canvas.

- `components/experience.tsx` — scroll wiring, CSS custom properties, hero chrome
- `components/bag-scene.tsx` — the R3F scene, orthographic, camera matched to the film's last frame
- `components/sections.tsx` — everything below the hero
- `lib/scroll-state.ts` — progress→time mapping, copy beats, the `hours()` curve
- `app/globals.css` — all styling, single file

The films are signed and shipped. Never regenerate them.

## What just changed

Parts 3–4 now render the bag over a **white stage** (`.stage-white`, driven by `--stage-white`). The part 2 film cuts at 0.44 instead of holding to 0.55, so only one bag is ever in frame. Hero chrome inks to `#0B0B0C` over the white.

Also removed: the roast-time counter (whole element, wiring, CSS and the NumberTicker component), the bean pour in part 4, and the stamp-behind overlay that used to bleed its copy through the hero.

## What's still wrong

Fix in this order.

1. **The GLB is the wrong shape.** Around progress 0.52–0.72 the bag reads too narrow and too flat — at 0.60 it's a blank slab. It does not match the film's last frame. Spec has the target numbers: bag bbox `x 774–1149, y 338–949` in a `376`×`612` px box, **56.7%** of frame height, centre x `961.5` against a frame centre of `960`. Verify by A/B against `review/part2-final-frame.jpg` at 100%.
2. **The wordmark is clipped.** `HOUR ZERO` runs off the right edge of the bag face at every angle.
3. **Nothing happens from 0.76 to 1.0.** The pour is gone and the bag now just sits there for a quarter of the runway. Either give part 4 something to do or shorten the runway.
4. **Desktop is loading the 720p films.** `hero-roast-film.mp4` (21.6MB) and `part2-bag.mp4` exist but the `<source media>` breakpoint isn't selecting them.
5. **Copy holds too long.** "Roasted to order. Printed, not implied." spans 0.52→0.68.
6. **Phone is unverified** since these edits. Check 640px.

## Rules

- The engine is settled and Blender-led. Don't re-open it. The 3D is the main component, not a garnish.
- Never regenerate parts 1 or 2 — they're signed film at `public/media/`.
- No crossfade, dissolve, fade to black, flash or blur at the seam.
- The counter is gone. Don't add it back.
- Label fixes: `HEIRLDOM` → `HEIRLOOM`. Bake no roast date into the texture — the date is live DOM.
- `bag-label-macro.png` has a struck `2025 04 16` on it; it stays masked.
- The business name is **HOUR ZERO**.
- Commits end with `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

Start with the GLB. Everything from 0.44 on depends on that bag being the right shape in the right place.
