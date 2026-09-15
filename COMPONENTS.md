# Component map — Magic UI registry

Source: `magic` MCP (Magic UI registry, 78 components). NOT the designer's 21st.dev
bookmarks — that server is unauthorized in this session, see master.md ASSUMED.

Every pick answers "what does this prove about the brief." A component that only
looks cool is not a pick. Rejects are listed because refusing them is the decision.

## The pin stays quiet (frames 1-6)

TASTE: pin jobs use one engine and quiet chrome. All density lives BELOW the pin,
built by `below-fold-ui` as named sections. Nothing here puts a second engine on
the pin.

| Component | Where | Why it earns it |
|---|---|---|
| `number-ticker` | Frame 6 only — THE ROLL | The one place a count-to-target is correct. Everywhere else the readout is derived from scroll progress, never animated, so it cannot desync on reverse scroll. |
| `hyper-text` | Frame 3 — FIRST CRACK | Scramble-then-resolve is the instrument register's native reveal. Hard-cut in, no fade. |
| `noise-texture` | Site-wide, `fixed z-[-2]` | Fills the `grain-canvas` chrome slot. SVG feTurbulence, no generated asset, no cost. |
| `scroll-progress` | Site-wide rail | Restyled to read in HOURS SINCE ROAST, not percent — LEDGER Worked: a progress instrument speaking in the concept's own unit beat a generic percentage. |

## Below the pin — the long run

| # | Section | Components | Why |
|---|---|---|---|
| 1 | The stamp (frame 7) | `lens` | Zoom into the ink date at macro. Makes the proof inspectable instead of asserted — the single strongest anti-skepticism move on the page. |
| 2 | The comparison (frame 8) | `number-ticker`, `text-reveal` | 48 against 90-180. The second number counts up and stops hard. |
| 3 | The roast log | `animated-list`, `grid-pattern` | Batches arriving in sequence: date, origin, roast time, hours since. Reads as a live instrument log, not a testimonial wall. |
| 4 | Origins rail | `marquee` + `scroll-based-velocity` | Rail speed reports scroll velocity — the unitedcarriers KM/H readout logged in LEDGER Liked, re-cast in this brief's unit. Type and tabular data only, no imagery: keeps the asset gate at three slots. |
| 5 | The cafes | `marquee` (second row, reversed, slower) | Wholesale names as ambient proof. Two rows at different rates = parallax without a parallax layer. |
| 6 | Tasting notes | `dia-text-reveal`, `text-animate` | A band sweeping across the note text. The one warm-adjacent moment, and it is type, not photography. |
| 7 | The four facts | `bento-grid` + `magic-card` | Roast to order · 48 hours · Connecticut · small batch. Spotlight borders give hover life without colour. |
| 8 | Objections | `progressive-blur`, `text-reveal` | The blur gradient at the scroll edge says there is more, which is the point in a long page. |
| 9 | CTA (frame 9) | `interactive-hover-button` | Hairline restyle. Buy a bag. |
| — | Cursor | `smooth-cursor` | Physics-based spring matches the signed `weight: damped`. |
| — | Chassis | `grid-pattern`, `dot-pattern` | Hairline instrument grid behind the DOM sections. |

## Rejected — and why

These belong to a different world than "cold instrument over a hot process," and
picking them would break the signed NOT line in one scroll.

`rainbow-button`, `neon-gradient-card`, `aurora-text`, `sparkles-text`,
`shimmer-button`, `shiny-button`, `pulsating-button` — glow and colour-shift are
the editorial-luxury register the NOT line rules out.

`confetti`, `cool-mode`, `meteors`, `comic-text`, `spinning-text`, `warp-background`,
`retro-grid` — playful or retro; the brief is machined restraint.

`globe`, `dotted-map`, `icon-cloud`, `orbiting-circles`, `floating-3d-particles` —
a second WebGL surface on a page that already spends its engine budget on the pin.

`iphone`, `android`, `safari`, `terminal`, `file-tree`, `code-comparison`,
`tweet-card` — product-SaaS furniture. There is no app here.
