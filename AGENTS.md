# test — job folder

A job folder for the Astra website system. This file is the local route; it
defers to the system and adds only what is job-specific.

**The system lives in the sibling folder [`../astraflow2/`](../astraflow2/).**
Read [`../astraflow2/AGENTS.md`](../astraflow2/AGENTS.md) first — it is the
always-on route and overrides the global `~/.codex/AGENTS.md`. Everything it
names resolves from there:

- Route and stops: `../astraflow2/AGENTS.md`
- Full spec (step order, capability map, quality gates, cost locks):
  `../astraflow2/workflow2.md`
- Taste rules: `../astraflow2/TASTE.md` (Core only, unless a skill names more)
- The record: `../astraflow2/LEDGER.md`
- Evidence vault: `../astraflow2/skills/reference-intake/VAULT.md`
- Reference dossiers: `../astraflow2/references/`

## Status

**Unsigned.** There is no `master.md` in this folder yet, so this job has not
been through kickoff. The route sends it to `job-kickoff`, which runs the
three steps in order:

1. **Interview** — two cards in one turn: the business (`model`, `audience`)
   and the look (the six motion/feel fields).
2. **Idea + blueprint** — the best three story directions, each carrying its
   own `CHAR · TYPE · MAT · MOVE` look line. The pick signs story *and*
   identity, then `engine-decision` runs in the same turn for
   MECHANISM/MOTION/RUNWAY/STORYBOARD/SLOTS.
3. **Assets** — every slot marked `generate` is quoted on one Higgsfield
   card. A standalone `GO` fires them; then the build continues.

## What this job is for

**This is a dry run of the three-step loop, not a client job.** The point is
to see whether the route behaves: whether step 1 asks only the eight things it
should, whether step 2 fits on one screen with three genuinely different
looks, and whether step 3 actually fires a quote instead of deferring the
assets to build time.

Treat the brief as real and build the work honestly — a dry run that gets a
soft version of the process tests nothing. Nothing here ships, and no ledger
rule should be rewritten off this job alone.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
