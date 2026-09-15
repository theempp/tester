# RESUME — the roaster (CT small-batch coffee)

Last worked 2026-09-15. Read this first, then `master.md`.

## Where the job is

Kickoff steps 1 and 2 are **complete and signed**. Step 3 (assets) is essentially done —
all three slots are approved; the film needs one mechanical re-render at ship resolution.

**The build has not started.** This job is not being built here — the deliverable is a
handoff package for the designer to paste into "Astra" (GPT-6 Astra), which generates the
site in one prompt. `ASTRA-PROMPT.md` is that package.

## STATE — read this first

**The film's staging is LOCKED at take 4.** Job `1667b1e9-85e7-476f-b45c-1c9edcf275c9`,
480p draft, reviewed and passed on all four criteria: black surround, beans falling as a
continuous curtain, camera never retreats, ends on a full-frame downward-streaming field.
Zero cuts. `review/hero-roast-take4.mp4`.

**Three things are open:**

### 1. The ship render (mechanical, do this first)
Take 4 is 854x480. It is a full-bleed fixed desktop layer and will be soft. Re-run take 4's
EXACT prompt at **720p, 65 cr**, review it against the same four criteria, then:
`ffmpeg -i <f> -c:v libx264 -g 1 -crf 18 -preset slow -an public/media/hero-roast-film.mp4`
Never serve the raw Higgsfield file. Quote it and wait for a standalone `GO`.

### 2. The RESTRUCTURE has been described — see `SCROLL-STRUCTURE.md`
The designer described it 2026-09-15. The pin does not hand off to a new object; the film
CONTINUES. Three movements: the approach (existing, locked), the fall-and-reveal into the
bag (new), the bag being wrapped (new). Read `SCROLL-STRUCTURE.md` before anything else.
It is PARTIAL — the designer has more of the scroll and the whole page below it still to
describe. `STORYBOARD.md` section order, `COMPONENTS.md`, `ASTRA-PROMPT.md` §5, and
master.md's RUNWAY/IA are all provisional until they finish.

### 3. The transition brief is SUPERSEDED — do not write the four directions
`TRANSITION-BRIEF.md` asked for four directions for a new object crossing stations. The
designer answered it differently: the footage itself carries the motion. The file is kept
as history only. `engine-decision` does NOT need to re-run — MECHANISM stays `pin-film`.

## What take 3 proved, and what it broke

HELD (carry these forward, do not re-solve): camera never retreats — fixed; machine gone by
~5.8s; beans fill frame edge to edge; best colour arc of all takes (pale green → tan → brown →
near-black glossy); zero cuts; machine finish correct.

BROKE:
1. **White studio background.** The ground spec was dropped when the prompt was rewritten for
   the new camera move, leaving "cold hard white light" as the only colour word. Entirely an
   authoring error, not a model failure. Logged in LEDGER Prompt phrasing and higgsfield
   traps.md: a rewrite is not a delta — diff the prompts and confirm every HOLD survived.
2. **Beans never fall.** They sit in a cooling bed being stirred, so there is nothing to
   follow downward and the handoff idea does not exist. Take 1 DID produce a real pouring
   curtain, so it is achievable; the source of the fall has to be named.

### How to review take 4

1. Download to `review/hero-roast-take3.mp4` — never overwrite takes 1 or 2.
2. Cut detection across every frame (zero hits required):
   `ffmpeg -v error -i <f> -filter:v "select='gt(scene,0.35)',showinfo" -f null - 2>&1 | grep -o 'pts_time:[0-9.]*'`
3. Contact sheet, then ACTUALLY OPEN IT — never report from the prompt:
   `ffmpeg -i <f> -vf "select='eq(n\,0)+eq(n\,19)+eq(n\,62)+eq(n\,96)+eq(n\,139)+eq(n\,178)+eq(n\,221)+eq(n\,240)',scale=427:240,tile=2x4" -frames:v 1 contact-take3.jpg`
4. Judge against these four, in priority order:
   - **Is the surround BLACK?** No white studio, no visible walls, floor or backdrop. Take 3
     died here. Check the FIRST frames, where the machine is still wide in shot.
   - **Are the beans actually FALLING** — a continuous curtain pouring out of the drum mouth,
     from the first frame? A stirred bed of beans is a fail. Take 3 died here too.
   - **Do the last 3s ride the beans downward**, camera travelling with them, beans still
     streaming at the final frame? It must NOT settle into a pile, freeze, or widen.
   - Camera never retreats; machine gone by ~7s; no cuts; finish stays matte black / brushed
     stainless; no amber.
5. **On pass — take 4 is a 480p DRAFT and is never the ship file.** Re-quote the identical
   prompt at 720p (65 cr), wait for a standalone `GO`, then review that render the same way.
   Only the 720p file gets encoded and installed:
   `ffmpeg -i review/hero-roast-take3.mp4 -c:v libx264 -g 1 -crf 18 -preset slow -an public/media/hero-roast-film.mp4`
   Never serve the raw Higgsfield file — the scrub needs every frame to be a keyframe.
6. **On fail:** one retake. Delta prompt only — keep every HOLD, forbid every MISS. Quote,
   then wait for a standalone `GO`. Never re-roll at a different resolution to fix a story
   miss.

### Take 4's exact prompt (for building a delta from)

> One continuous unbroken take, never cutting. A brand new precision coffee roaster stands
> front and centre in a pitch black empty room: matte black powder-coated panels and brushed
> stainless, seamless welds, flush machined edges, laboratory clean, factory fresh,
> immaculate. Everything behind and around the machine is deep black. No walls, no floor, no
> backdrop, no horizon - only blackness surrounding it. Repeat this through every second:
> matte black machine, black surround, black everywhere except the machine and the beans.
> From the first frame, a thick unbroken curtain of coffee beans is pouring out of the open
> drum mouth and falling straight down through the frame, continuously, never stopping. The
> camera moves toward that falling curtain from the very first frame and keeps moving toward
> it for the entire take, gliding in at a steady fairly quick rate. It only ever gets closer.
> It never retreats, never widens. As it closes in, the falling beans darken: pale green,
> then tan, then deep brown, then almost black and glossy with oil. Chaff lifts off them.
> Smoke rolls off them. By seven seconds the camera is inside the curtain and falling beans
> fill the entire frame edge to edge, the machine no longer visible at all. For the last
> three seconds there is nothing in frame but dark brown and black beans streaming downward
> past the camera, filling every part of the screen, and the camera travels downward with
> them, keeping pace, staying inside the fall. The beans never come to rest and never settle
> into a pile. The final second holds that steady - a full frame of beans streaming down at a
> constant speed, camera moving down with them. Hard cold light on the machine and the beans
> only; everything behind them falls away to pure black.

## Assets

| Slot | State | File |
|---|---|---|
| `hero-roast-film` | staging LOCKED (take 4); 720p ship render outstanding | → `public/media/hero-roast-film.mp4` |
| `bag-label-macro` | signed (take 2) | `public/media/bag-label-macro.png` |
| `doorstep-48` | signed (take 1) | `public/media/doorstep-48.png` |
| `grain-canvas` | placeholder by design — built in code | Magic UI `noise-texture` |

Spend so far: **182 credits** (2 stills + 25 take 1 + 65 take 2 + 65 take 3 + 25 take 4).
Balance ~1082.31. Video alone is 180 of that across four takes, three rejected.
Drafts and rejected takes live in `review/` and are never overwritten.

## The ending changed — storyboard already updated

The designer redirected the film's ending and it is a genuine improvement, already written
into `STORYBOARD.md` frames 5-6 and `ASTRA-PROMPT.md`:

The film no longer ends on a locked wide of settled beans. It ends **mid-motion, travelling
downward**, with falling beans filling the frame — the same direction the visitor is
scrolling. So the pin releases into motion rather than cutting from a held shot, and the
scroll reads as picking up where the film left off. It also solves the type-reserve problem,
because a flat near-black bean field carries the readout anywhere.

**Do not freeze the final frame on release.** That instruction is now in the Astra prompt and
is the best transition on the page.

## Known issues carried forward

- **Stale printed date.** Both bag takes stamp a 2025 date. Fixed in `ASTRA-PROMPT.md` §8 by
  masking and overprinting a live DOM date — not with credits. Do not regenerate for this.
- **Matte black is lower-texture than kraft was.** Section 1's `lens` zoom has less to
  explore. Accepted trade: stamp legibility matters more than surface texture there.
- **21st.dev is dead in this workspace.** API key was reset and the designer repurposed it
  elsewhere. Components come from the Magic UI registry (`magic` MCP) instead. Do not
  re-litigate this.

## Files

| File | What it is |
|---|---|
| `SCROLL-STRUCTURE.md` | **the restructure — the continuous three-movement film (partial)** |
| `TRANSITION-BRIEF.md` | superseded history; do not action |
| `master.md` | the signed skeleton — identity, mechanism, slots, runway |
| `DESIGN.md` | the signed look + the two rejected directions |
| `STORYBOARD.md` | 9 frames, windows, copy, phone/reduced-motion/loading |
| `COMPONENTS.md` | Magic UI picks per section, and the ~25 rejects with reasons |
| `REFERENCE-lightweight.md` | DOM-verified findings from lightweight.info/en |
| `ASTRA-PROMPT.md` | **the deliverable** — one paste-in prompt |
| `review/` | drafts, contact sheets, rejected takes |

## Not yet done

- The `LEDGER.md` Fingerprint row. `verify-handoff` writes it after QA — not before.
- No QA pass has run; nothing has been built to QA.
