# SCROLL-STRUCTURE — the continuous film (SUPERSEDES the transition brief)

Described by the designer 2026-09-15 across two chats. **This file is now COMPLETE for the
scroll and the page** — the designer has finished describing. Nothing here is signed by a
skill and nothing has been quoted. `TRANSITION-BRIEF.md` is superseded history; its four
directions are dead and must not be written.

> **READ `AMENDMENT 2` AT THE BOTTOM OF THIS FILE FIRST.** Later in the same day the
> designer reopened PART 1's staging (black void -> outdoors in sun), take 5 was fired and
> reviewed but NOT signed, PART 2's spec was revised, and PART 4 was settled as Blender.
> Where this section and AMENDMENT 2 disagree, **AMENDMENT 2 wins.**

## The premise

The pin does not hand off to a new object. The subject — beans, then the bag — is carried
continuously from the first frame of the site to the last, through four parts under one
scroll. There are no section breaks in the subject. Only the medium changes, once.

## The four parts, in scroll order

### PART 1 — the approach — HIGGSFIELD FILM (staging REOPENED — see AMENDMENT 2)
Site opens here. Camera closes on a curtain of falling beans pouring from the drum mouth;
beans darken pale green -> tan -> brown -> near-black glossy; machine gone by ~7s; camera
ends inside the fall, travelling downward, beans edge to edge. Ends mid-motion.
- SUPERSEDED: take 4's pitch-black staging is dead. Current take is **take 5** (outdoors,
  hard sun, bare ground), job `f56c5833-fb1b-435e-a503-ea0a8846d30b`, 480p, NOT signed.
- **Outstanding: one delta retake at 480p (25 cr) to fix the machine, THEN the 720p ship
  render (65 cr).** See AMENDMENT 2 for the misses and the exact take-5 prompt.

### PART 2 — the fall, the reveal, the wrap — HIGGSFIELD FILM (new, not generated)
> Beats 1-7 below are the ORIGINAL description. The designer revised them late on
> 2026-09-15 — **AMENDMENT 2's "PART 2 revised spec" supersedes this list.**
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

### PART 4 — the recentre, the rip, the pour, the pile — SETTLED: BLENDER (see AMENDMENT 2)
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
DEVICE. Bag identity: matte black flat-bottom pouch,
flush brushed-steel valve, struck date.

## Production context

Blender is now wired into GPT-6 and into the Astra flow alongside Higgsfield; target is a
4K-quality site generated by GPT-6 Astra from the handoff package. Claude Code's job here
remains planning and mapping, not building. Blender is an AUTHORING tool — the lightweight
rim runs as real-time WebGL in the browser, not as a Blender render.

## Next action (designer's stated order)

Higgsfield quotes for the film parts come FIRST — before any Blender work and before Astra.
See `NEW-CHAT-PROMPT.txt`.

---

## AMENDMENT 2 — 2026-09-15, late session (Higgsfield quoting chat)

### PART 1 staging REOPENED by the designer — black void is dead, outdoors is live

The designer reopened take 4's locked staging. PART 1 is no longer a pitch-black room.
It is now **outdoors, on bare open ground, under open sky, in hard sun**, with the beans
falling with nothing beneath them collecting them. Reason given: it makes the join into
PART 2 smooth.

Consequence: take 4's 480p draft no longer proves this staging, and the four review
criteria change. Criterion 1 was "is the surround BLACK"; it is now **"does the sun read
as instrument rather than cafe warmth, and is the ground bare"**. Criteria 2-4 (beans
actually falling from frame 1; last 3s riding the beans downward; camera never retreats /
machine gone by ~7s / no cuts / finish correct) are UNCHANGED.

### TAKE 5 — fired and reviewed, NOT signed

Job `f56c5833-fb1b-435e-a503-ea0a8846d30b`, 480p, 10s, 24fps, seedance_2_5, 25 cr.
File `review/hero-roast-take5.mp4`, frames in `review/take5-frames/`.
Higgsfield pushed the **IN THE DARK** preset on first submit and submitted nothing; it was
declined via `declined_preset_id` and the literal brief re-fired. Expect this nudge again.

HOLD: zero cuts (241 frames, no scene hits). Outdoors, hard sun, crisp hard shadow, bare
open ground, nothing else around. Unbroken curtain from frame 1. Camera only ever closes.
Machine gone by ~7s. Last 3s ride the beans down, full frame, still streaming at the final
frame. No vessel of any kind — the positive phrasing held.

MISS:
1. **The machine is not the signed machine.** Riveted, bolted black plate hopper with a
   chimney stack — agricultural, not laboratory. No brushed stainless anywhere; exposed
   rivets everywhere. Contradicts signed MAT (seamless welds, flush machined edges,
   brushed stainless) and CHAR (machined restraint). **This is the one to fix.**
2. **The beans mound at the machine's base** (visible ~0-3s, clear at frame 30). A
   collecting pile arriving as terrain rather than as a bowl.
3. **Palette drift — designer's call, not a defect.** Blue sky over orange desert, a long
   way from signed `#0B0B0C` / `#EDEDE8`. Does not break the NOT line (not cafe-warm), but
   should be chosen deliberately.
4. **Type-reserve.** Right-edge readout column and lower third sit over bright sky and
   bright ground for the first ~5s and will need a scrim. The old black staging needed none.

LAST: full-frame dark brown beans streaming downward, mid-motion, no machine, no sky, **no
visible sunlight and no oil sheen**. Releases into motion correctly.

NEXT: **one delta retake at 480p, 25 cr** — machine finish + no mound at the base,
everything else held verbatim. NOT the 720p: buying 65 now buys a riveted hopper at higher
resolution, and a story miss is never fixed by resolution.

### PART 1's exact take-5 prompt (build the delta from THIS, not from take 4's)

> One continuous unbroken take, never cutting. A brand new precision coffee roaster stands
> front and centre outdoors on open bare ground under open sky, standing alone with nothing
> else around it: matte black powder-coated panels and brushed stainless, seamless welds,
> flush machined edges, laboratory clean, factory fresh, immaculate. Hard bright sunlight
> comes in from the side and rakes across it, catching the brushed stainless and throwing
> one crisp hard-edged shadow; clean white high midday sun, high contrast, sharp. Repeat
> this through every second: matte black machine, brushed stainless, hard sunlight raking
> across it, open empty ground and open sky behind it. From the first frame, a thick
> unbroken curtain of coffee beans is pouring out of the open drum mouth and falling
> straight down through the frame, continuously, never stopping. Below the falling beans
> there is only open air and bare open ground - the beans fall past the camera and straight
> out of the bottom of the frame, and the fall never ends. The camera moves toward that
> falling curtain from the very first frame and keeps moving toward it for the entire take,
> gliding in at a steady fairly quick rate. It only ever gets closer. It never retreats,
> never widens. As it closes in, the falling beans darken: pale green, then tan, then deep
> brown, then almost black and glossy with oil, sunlight catching the oil. Chaff lifts off
> them and drifts in the sunlight. Smoke rolls off them. By seven seconds the camera is
> inside the curtain and falling beans fill the entire frame edge to edge, the machine and
> the ground and the sky no longer visible at all. For the last three seconds there is
> nothing in frame but dark brown and black beans streaming downward past the camera,
> filling every part of the screen, and the camera travels downward with them, keeping
> pace, staying inside the fall. The beans never come to rest and never settle into a pile.
> The final second holds that steady - a full frame of beans streaming down at a constant
> speed, camera moving down with them.

### PART 2 — designer's revised spec, 2026-09-15

Revised from the earlier description. Changes, in the designer's own terms:
- Beans **a little glossy, nothing crazy** — no visible oil on them.
- **No hard white sunlight on the beans** during the descent; no sunlight seen hitting them
  at all in that opening stretch. Just beans falling down the frame smoothly and cleanly.
- **The camera pulls back a little BEFORE the beans start to slow.** This replaces the
  earlier "shared easing, both decelerate together" — the moves are now sequential, not
  simultaneous.
- The bag **and the beans falling into it** are front and centre for about a second before
  any deceleration starts.
- Then the beans slow quickly until the last one.
- The last bean lands in the bag.
- The bag wraps itself up **quickly** (was "unhurried and mechanical").
- Held tail front and centre for **one to two seconds**.

Resolved: the earlier conflict between PART 1's "glossy with oil, sunlight catching the
oil" ending and PART 2's no-sun/no-oil opening is **moot** — take 5's actual final frame
carries no visible sun and no oil sheen. The seed already matches. No upstream change.

Read but unresolved: "decelerate until the very last one falls out of the bag" was read as
the last bean leaving **the stream**, not the bag. Confirm with the designer.

### PART 2's prompt as drafted (NOT armed, NOT quoted)

> One continuous unbroken take, never cutting. It begins exactly where the last shot ended:
> a full frame of dark brown coffee beans streaming smoothly downward past the camera,
> filling every part of the screen, the camera travelling down with them and keeping pace.
> The beans are clean and evenly lit with a soft low sheen - lightly glossy, dry, no wet
> shine, no oil on their surface. No sunlight falls on them, no bright highlights, no glare;
> the light is soft, even and shadowless, and the fall reads smooth and clean. The camera
> holds this and keeps descending with the beans. Then the camera eases back a little,
> opening the frame while the beans keep falling at the same steady speed - the camera moves
> back first, the beans do not slow yet. The pull-back reveals what the beans have been
> falling into: a matte black flat-bottom coffee pouch standing upright, open at the top,
> beans pouring down into it. The camera settles with the bag and the beans falling into it
> front and centre in the frame and holds there for about a second, beans still streaming
> down into the bag. Only then do the falling beans begin to slow, decelerating quickly and
> smoothly, fewer and fewer of them, until one last bean is left in the air above the bag.
> The camera is now completely stationary and stays stationary for the rest of the take.
> That last bean falls and lands in the bag. The bag immediately closes itself, quickly: the
> open top folds over on itself and seals flat in one brisk motion, moving entirely on its
> own. Nothing in frame but the bag and the ground it stands on. Once sealed, the bag stands
> still, front and centre, matte black with a flush brushed-steel valve on its face, and the
> shot holds there completely static, locked, zero drift, for the final two seconds - the
> take ends on a steady, motionless frame of the sealed bag standing front and centre.

**No printed date is written into this prompt, deliberately.** Open decision 6 says the
struck date cannot be DOM-overprinted onto a filmed wrapping bag — it will not track. Not
generating a date means there is no wrong date to fix. The legible date stays where it is
already solved: the macro still and the GLB texture.

### PART 2's HARD BLOCKER — read before quoting it

PART 2 is **seeded from PART 1's exact final frame**, which makes it an image-to-video job
needing that frame as an uploaded input. **That frame does not exist yet.** PART 1 has no
signed take and no 720p ship render. So PART 2 cannot be quoted as a finished card: its
cost returns only after the upload (sequence B — two GOs, not one), and its prompt may need
a small delta once the real seed frame is visible.

The order is therefore forced:
1. PART 1 delta retake at 480p (25 cr) → review → sign the staging.
2. PART 1 ship render, identical prompt, 720p (65 cr) → review.
3. Pull PART 1's final frame, upload it, `get_cost`, then quote PART 2 (est. 65 cr).

Firing PART 2 unseeded as text-to-video is possible but defeats its entire purpose: the
invisible join is the reason the part exists.

### PART 4 — settled as Blender, NOT Higgsfield

Open decision 3's alpha problem was the deciding factor, and it **dissolves** once PART 4
is real-time WebGL in the canvas PART 3 already puts on the page: a transparent WebGL
canvas composites over live DOM natively — no alpha video, no image sequence, no codec that
supports transparency. Three reasons, any near-sufficient:
1. Alpha. Beans piling over a revealed real DOM page is compositing. Higgsfield outputs
   opaque MP4. Filming it means baking the page in — then it is a picture of a page: no
   live text, no links, no CTA, no reflow, wrong at every viewport but the render's.
2. It opens on the GLB. Film there crosses CG -> photoreal mid-part, having already crossed
   photoreal -> CG at the 2/3 join. Blender keeps one 3D world and one seam.
3. It is scroll-driven, not time-driven, and its end state must fill the actual viewport at
   the actual aspect ratio. A fixed-frame render cannot.

**Only PARTS 1 and 2 are Higgsfield. PART 3 and PART 4 are both Blender/WebGL.**
No Higgsfield quote exists or should be invented for either.
