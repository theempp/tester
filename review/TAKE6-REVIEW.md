# Take 6 — reviewed, NOT signed

Job `0e80d63e-ce56-402a-a848-5fcb378bab6c`, seedance_2_5, 480p, 10s, 24fps, **30 cr**
(AMENDMENT 2 quoted the delta at 25 — see miss 4). Fired 2026-09-15 20:52 UTC.
File `review/hero-roast-take6.mp4`, frames in `review/take6-frames/`.

Recovered from the transaction ledger, not from a handoff: this take was fired and billed
without being recorded in any project file. Found during the bag-round-1 reconciliation.

**A parallel session was reviewing this same take concurrently** (its frames were written
~16:57, this review's at ~16:58). If its notes disagree, reconcile rather than assume.

## HOLD
Zero cuts (241 frames, no scene detections above 0.35). Outdoors, clean hard white sun,
one crisp hard-edged shadow — instrument, not cafe warmth. Unbroken curtain from frame 1.
Beans darken pale green -> tan -> brown -> near-black. Camera only ever closes, never
retreats or widens. Machine gone by ~7s. Last 3s ride the beans down, full frame, still
streaming at frame 240.

## MISS
1. **The mound is WORSE — this was the retake's entire purpose.** Frame 30 shows a large
   green-bean pile spilling wide across the ground, larger than take 5's. The delta added
   "the ground ... stays bare, flat, smooth and completely empty ... nothing resting on it
   and nothing gathering on it". That is negation, and `traps.md` already records that
   naming a forbidden thing summons it. **Do not fix this with more negation.** Either
   stop describing the ground entirely, or change the framing so the ground is never in
   shot.
2. **Fasteners survived.** Visible bolt heads along every panel edge and around the mouth
   (`review/take6-frames/zoom-machine.jpg`), despite "no visible fasteners anywhere" and
   "not one visible fastener" appearing twice. Partial win: the riveted agricultural
   hopper is gone and the brushed stainless bands arrived. Still contradicts signed MAT.
3. **The machine stopped being a machine.** "One single smooth machined object" flattened
   it into a featureless black slab with a rectangular slot — no drum, no mechanism,
   nothing that reads as a precision roaster. Take 5 at least read as equipment. This is a
   regression the delta introduced.
4. **`generate_audio: true` on a silent scrub film.** Credit doctrine says false unless the
   brief needs sound. Take 4 had it false. This is the likely cause of 30 cr vs the 25
   quoted. Set it false on every subsequent take.

## LAST FRAME — the one unambiguous win
Full-frame beans streaming downward, mid-motion, dry and matte, **no oil sheen and no
visible sun**. This is exactly what PART 2's revised prompt opens on. The seed is right
even though the take is not.

## NEXT — no take fired, nothing quoted
Two takes have now failed the same way. Recommended before spending again:
- Drop every negative clause about the ground. Describe only what IS in frame.
- Describe the machine positively (what it is and has), not as an absence of fasteners.
- `generate_audio: false`.
- Consider whether the ground needs to be in shot at all.
