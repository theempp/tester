# RESUME — the roaster (CT small-batch coffee)

Last worked 2026-09-15. Read this first, then `master.md`.

## Where the job is

Kickoff steps 1 and 2 are **complete and signed**. Step 3 (assets) is essentially done —
all three slots are approved; the film needs one mechanical re-render at ship resolution.

**The build has not started.** This job is not being built here — the deliverable is a
handoff package for the designer to paste into "Astra" (GPT-6 Astra), which generates the
site in one prompt. `ASTRA-PROMPT.md` is that package.

## STATE — read this first

> **UPDATED 2026-09-15, late session.** PART 1's staging was REOPENED by the designer:
> the pitch-black room is dead, PART 1 is now **outdoors on bare ground in hard sun**.
> Take 5 was fired (25 cr) and reviewed — **not signed**, the machine came back wrong.
> PART 2's spec was revised. PART 4 was settled as Blender. **Full detail is in
> `SCROLL-STRUCTURE.md` AMENDMENT 2, which wins over anything below that contradicts it.**
> Spend is now **252.5 cr**; balance **1011.81** (reconciled against the live ledger —
> see the spend table below, and note the unrecorded 30-cr take).

**SUPERSEDED — take 4's locked staging.** Job `1667b1e9-85e7-476f-b45c-1c9edcf275c9`,
480p draft, reviewed and passed on all four criteria: black surround, beans falling as a
continuous curtain, camera never retreats, ends on a full-frame downward-streaming field.
Zero cuts. `review/hero-roast-take4.mp4`.

**Three things are open:**

### 1. The ship render — NO LONGER MECHANICAL, AND NOT NEXT
This step assumed take 4's staging was signed. It is not. The next spend is a **480p delta
retake (25 cr)** fixing take 5's machine, and only then the 720p. Do not buy 720p to fix a
story miss. Once a take IS signed, re-run its EXACT prompt at **720p, 65 cr**, review it
against the four criteria (criterion 1 is now sun/bare-ground, not black surround), then:
`ffmpeg -i <f> -c:v libx264 -g 1 -crf 18 -preset slow -an public/media/hero-roast-film.mp4`
Never serve the raw Higgsfield file. Quote it and wait for a standalone `GO`.

### 2. The RESTRUCTURE is fully described — see `SCROLL-STRUCTURE.md`
The designer finished describing it 2026-09-15. The pin does not hand off to a new object;
the subject is carried continuously through FOUR parts under one scroll:
1. the approach (Higgsfield, staging locked at take 4)
2. the fall -> 2s pull-back -> bag reveal -> last bean -> self-wrap -> held tail (Higgsfield, new)
3. the posed bag, lightweight.info-style, as a LIVE GLB in a WebGL layer (Blender, not film)
4. recentre left -> bottom rips -> beans pour -> next page revealed -> beans pile to full screen

**The page is now a HYBRID engine** — pin-film for parts 1-2, live 3D from part 3 on. The
designer picked that knowingly over two cheaper options. `engine-decision` does NOT re-run.
`master.md` MECHANISM/PRIMITIVES/WHY contradict this and must be read alongside
`SCROLL-STRUCTURE.md`'s amendment section.

Part 4's medium is UNRESOLVED — its bean-fall has to composite over a real DOM page, which
needs alpha, which Higgsfield cannot output. `STORYBOARD.md`, `COMPONENTS.md`,
`ASTRA-PROMPT.md` §5 and master.md's RUNWAY/IA all stay provisional until parts are costed.

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
| `hero-roast-film` | **take 5 reviewed, NOT signed** (machine wrong); delta retake then 720p | → `public/media/hero-roast-film.mp4` |
| `bag-label-macro` | signed (take 2) | `public/media/bag-label-macro.png` |
| `doorstep-48` | signed (take 1) | `public/media/doorstep-48.png` |
| `grain-canvas` | placeholder by design — built in code | Magic UI `noise-texture` |

Spend so far: **252.5 credits** — reconciled against the live transaction ledger
2026-09-15, superseding an earlier estimate of 207 which was wrong on three counts.
Live balance: **1011.81**.

| Item | Cr |
|---|---|
| 3 stills (not 2) | 3 |
| take 1 / 2 / 3 / 4 / 5 | 25 + 65 + 65 + 25 + 25 = 205 |
| bag round 1 — 6 images, see `review/bag-round-1/` | 14.5 |
| **UNRECORDED Seedance job, fired 20:52 UTC** | **30** |
| | **252.5** |

**The 30-cr job is not documented anywhere.** It billed after bag round 1 and is most
likely AMENDMENT 2's PART 1 delta retake — which was quoted there at 25, not 30. Whoever
fired it has not written down its job id, whether it was reviewed, or whether it signs
the staging. **Do not quote the 720p ship render until that take is found and reviewed.**
Video is 235 of the total across six takes; at most one of them is signed and it is not
recorded which.
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
| `SCROLL-STRUCTURE.md` | **the restructure + AMENDMENT 2 — READ THE AMENDMENT FIRST** |
| `TRANSITION-BRIEF.md` | superseded history; do not action |
| `master.md` | the signed skeleton — identity, mechanism, slots, runway |
| `DESIGN.md` | the signed look + the two rejected directions |
| `STORYBOARD.md` | 9 frames, windows, copy, phone/reduced-motion/loading |
| `COMPONENTS.md` | Magic UI picks per section, and the ~25 rejects with reasons |
| `REFERENCE-lightweight.md` | DOM-verified findings from lightweight.info/en |
| `ASTRA-PROMPT.md` | **the deliverable** — one paste-in prompt |
| `review/` | drafts, contact sheets, rejected takes |

## Higgsfield operational notes (learned this session)

- **`LEDGER.md` does not exist on this machine.** The skill points at its "Prompt phrasing"
  section; only `VOICE.md` and `traps.md` are present in
  `~/.claude/skills/higgsfield/`. The relevant lesson already lives in `traps.md`.
- **The IN THE DARK preset nudge fires on this prompt family.** Higgsfield returns a
  `preset_recommendation` and submits NOTHING. Decline it by re-firing with
  `declined_preset_id: 24bae836-2c4a-48e0-89b6-49fcc0b21612`. No extra credits are charged
  for the refused submit. Expect it again.
- **Price tiers confirmed by `get_cost` on seedance_2_5, 10s, 24fps, 16:9:**
  480p = **25 cr**, 720p = **65 cr**. The `resolution` param is read and respected.
- **PART 2 is image-to-video** (seeded from PART 1's final frame) and therefore needs an
  upload → sequence B → **two GOs**, not one. Its cost returns only after the upload.

## Not yet done

- The `LEDGER.md` Fingerprint row. `verify-handoff` writes it after QA — not before.
- No QA pass has run; nothing has been built to QA.
