# SCROLL-STRUCTURE — the continuous film (SUPERSEDES the transition brief)

Described by the designer 2026-09-15 across two chats. **This file is now COMPLETE for the
scroll and the page** — the designer has finished describing. Nothing here is signed by a
skill and nothing has been quoted. `TRANSITION-BRIEF.md` is superseded history; its four
directions are dead and must not be written.

## The premise

The pin does not hand off to a new object. The subject — beans, then the bag — is carried
continuously from the first frame of the site to the last, through four parts under one
scroll. There are no section breaks in the subject. Only the medium changes, once.

## The four parts, in scroll order

### PART 1 — the approach — HIGGSFIELD FILM (staging LOCKED, take 4)
Site opens here. Camera closes on a curtain of falling beans pouring from the drum mouth;
beans darken pale green -> tan -> brown -> near-black glossy; machine gone by ~7s; camera
ends inside the fall, travelling downward, beans edge to edge. Ends mid-motion.
- Status: staging locked at take 4, job `1667b1e9-85e7-476f-b45c-1c9edcf275c9`, 480p draft.
- **Outstanding: 720p ship render of the IDENTICAL prompt, 65 cr.** Hard dependency.
- Exact prompt preserved in `RESUME.md`.

### PART 2 — the fall, the reveal, the wrap — HIGGSFIELD FILM (new, not generated)
Seeded from PART 1's exact final frame so the join is invisible.
1. Camera continues following the beans down.
2. **2-second pull-back.** Beans decelerate WITH the camera — shared easing, not a snap.
3. The pull-back reveals what the beans have been falling into: the coffee bag.
4. **Camera stops with the bag front and centre while the last bean is still in the air.**
   Camera stationary, bean still falling.
5. The last bean lands.
6. The bag wraps itself up. No hands in frame.
7. **Held tail:** bag front and centre, static, for a beat — this frame is the seed for PART 3.
- Revised 2026-09-15: pull-back cut from 2-3s to 1s, then settled at 2s. The wrap was moved
  INTO this part (it was previously a standalone movement 3).
- Designer was told a shorter pull-back does not by itself save credits (Higgsfield prices
  per clip duration tier, not per second of a camera move) and chose 2s on shot quality.

### PART 3 — the posed bag — LIVE 3D, NOT FILM (new)
Opens on PART 2's held final frame: bag front and centre. From here the page runs the
opening-section structure of lightweight.info/en, with our bag standing in for their rim.
**Designer picked option 3: a true live GLB in a WebGL layer**, having been shown the two
cheaper alternatives (held still + DOM, or a Blender turntable baked to frames and scrubbed
on the existing engine).
- Asset: coffee bag modelled and textured in **Blender**, exported GLB.
- Runtime: a persistent fixed WebGL canvas behind the DOM — the technique measured on
  lightweight.info (`PageBackground_isFixed`, 1 canvas, re-posed station by station; see
  `REFERENCE-lightweight.md`).
- **End state = the designer's supplied screenshot.** Subject centred-left with concentric
  hairline rings; `+` registration marks at frame corners plus mid-height crosshairs
  flanking the subject; left rail of numbered stations against a vertical hairline with a
  scroll-position thumb; right column of eyebrow -> oversized headline -> spec paragraph ->
  pill CTA; persistent top nav.
- The screenshot is this part's END state, not its start.

### PART 4 — the recentre, the rip, the pour, the pile — MEDIUM UNRESOLVED (new)
Continues from PART 3's end state. Bag stays in a FIXED position throughout; the camera
frame moves, not the bag.
1. As the user scrolls on, **the camera frame shifts LEFT**, bringing the bag from
   centred-left to dead centre of the screen.
2. Holds centred for about **1 second**.
3. **The bottom of the bag slowly rips open and beans start pouring out at the same time.**
4. **The camera holds its distance — it does not push in, does not pull back.** It simply
   follows the beans downward from a fixed distance as they fall.
5. As it follows them down, the bag leaves frame and **the next page is revealed underneath**.
6. With the bag completely out of sight, the beans keep falling, **hit the ground, and pile
   up until the entire screen is filled**. This is the last page for now.
All of it driven by scroll.

## Open decisions — flagged to the designer, NOT resolved

1. **"Four videos" is not four Higgsfield renders.** PART 3 is a Blender/GLB asset, not
   film. On the current picks, only PARTS 1 and 2 are unambiguously Higgsfield. PART 4's
   medium is genuinely open (see 2 and 3). Quote accordingly; do not invent a PART 3 quote.
2. **PART 4 opens on the GLB bag.** If PART 4 is Higgsfield footage, the page crosses
   CG -> photoreal mid-part, having already crossed photoreal -> CG at the 2/3 join. Keeping
   PART 4 in Blender keeps one continuous 3D world and one seam instead of two.
3. **Step 5 needs ALPHA.** Beans falling and piling OVER a revealed DOM page means
   transparency. Higgsfield outputs opaque MP4 — it has no alpha channel. Either the beans
   are Blender-rendered with alpha and composited over the real page, or the "page
   underneath" is baked into the video and is not real DOM. This is the single biggest
   technical constraint in PART 4 and it points hard at Blender.
4. **The CG/photoreal join at 2 -> 3.** PART 2's held tail is where the swap hides. The GLB's
   opening pose, lighting and lens framing must be matched to that exact frame. PART 2's
   final frame is the modelling and texturing reference.
5. **Two engines, two fallbacks.** Phone and reduced-motion already have a still path for the
   film scrub; the WebGL layer needs its own or the page has a hole on low-end devices.
6. **The stale 2025 struck date.** `ASTRA-PROMPT.md` §8's DOM-overprint fix was scoped to a
   macro STILL. The bag is now on screen large and held for a long stretch, and in PART 3-4
   it is a 3D object. On the GLB the date is a texture and is fixable for free at export.
   Over PART 2's filmed wrapping bag, the overprint will not track. Unresolved.
7. **The DEVICE's detach point moves again.** The counter currently detaches at the unpin.
   The pin now runs through PART 4. The DEVICE itself is not reopened — only where it lands.
8. **RUNWAY and IA are stale.** `master.md` RUNWAY (14vh pin) and IA assume the pin ends at
   frame 6. Four parts is far longer. `STORYBOARD.md`, `COMPONENTS.md` and
   `ASTRA-PROMPT.md` §5 remain provisional until this is costed and the medium of PART 4 is
   settled.

## MECHANISM — designer-signed amendment, recorded not re-decided

`master.md` is signed `MECHANISM: pin-film`, `PRIMITIVES: n/a`, with a `WHY` that explicitly
rejects `pin-live-scene`. By picking option 3 the designer has put a live WebGL layer on the
page alongside the film scrub. **The page is now a hybrid: pin-film for PARTS 1-2, live 3D
from PART 3 on.** This was raised as a conflict and the designer confirmed the pick.
`engine-decision` has NOT been re-run and is not to be re-run. This paragraph exists so that
Astra does not read `master.md` and build a single-engine page.

## What is NOT reopened

Signed identity (cold instrument over a hot process; `#0B0B0C` / `#EDEDE8`; ember `#C4491F`
reserved for counter and CTA; mono, tabular-nums, hairlines; the three NOT registers). The
DEVICE. The film's locked staging at take 4. Bag identity: matte black flat-bottom pouch,
flush brushed-steel valve, struck date.

## Production context

Blender is now wired into GPT-6 and into the Astra flow alongside Higgsfield; target is a
4K-quality site generated by GPT-6 Astra from the handoff package. Claude Code's job here
remains planning and mapping, not building. Blender is an AUTHORING tool — the lightweight
rim runs as real-time WebGL in the browser, not as a Blender render.

## Next action (designer's stated order)

Higgsfield quotes for the film parts come FIRST — before any Blender work and before Astra.
See `NEW-CHAT-PROMPT.txt`.
