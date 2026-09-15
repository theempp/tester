# lightweight.info/en — inspected 2026-09-15, live DOM

Not a capture. Consent declined (reject-all) before inspection.

## What it actually is

A dark product site for bicycle wheels. Its identity — the wheel, the carbon
world, its palette and section order — is NOT transferable. Techniques only.

## Measured

| Fact | Value |
|---|---|
| Document height @ 768vh viewport | 13,698px |
| **Total runway** | **17.84vh** |
| Stack | Next.js |
| WebGL canvases | 1, backing 1536x1152 @ DPR 1.5 |
| 2D canvases | 2 (`GrainOverlay_grainCanvas`) |

## The opening scroll animation (what they asked about)

One persistent WebGL object, **fixed for the whole page**, re-posed station by
station. It is not a pin that mounts and unmounts — the layer is
`PageBackground_isFixed`, permanently mounted behind the DOM, and the scroll
changes what it is doing rather than whether it exists.

Stations observed at 0 / 700 / 1500 / 2600px:
1. Two rims stacked and overlapping, near-black, type over the top
2. One wheel, side on, pushed left — and the whole theme inverts dark to light
3. Wheel left, spec paragraph right, light ground
4. Wheel re-posed, a hairline annotation line drawn out to a labelled callout

## Transferable techniques

1. **A fixed persistent background layer, not a per-section pin.** The subject
   layer never unmounts; stations change its state. Same principle as oryzo's
   persistent Canvas, but achieved with `position: fixed` behind the DOM flow
   rather than a pin spacer — cheaper, and it survives every section boundary.
   For this job the layer is the roast video, not a mesh.
2. **`PlusFrame`** — four fixed 9px "+" registration marks at the frame
   corners, permanently on screen. Near-free, and it does more for the
   instrument register than any amount of colour. Taking this.
3. **Theme inversion as a chapter device.** Dark to light mid-scroll, carried
   by a class on the nav (`theme-dark`) rather than per-element colours.
4. **`ScrollTimeline`** — a fixed full-viewport progress instrument. Third
   independent confirmation of the persistent-progress-readout technique
   (oryzo, weevolveit, now this).
5. **Annotation callouts drawn onto the subject** at a station, hairline leader
   line to a label.
6. **`GrainOverlay` 2D canvas** — fourth confirmation of the site-wide grain
   field. This is now the best-evidenced technique in the vault.

## Calibration

17.84vh is the honest number for "long." Our signed runway (14vh pin + ~22vh
sections = ~36vh) is roughly twice this site. That is a deliberate choice for a
page carrying ten sections, not an accident.
