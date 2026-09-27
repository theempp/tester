# Roblox Flying Game — Design Handoff (for Codex)

> Source: the part of the design chat the user pasted (Round 5 plus a fragment of a later hangar round).
> Earlier rounds (1–4) were **not** included in the paste. Where this file mentions them, the details come only from references inside Round 5.

## Game concept (as far as the pasted fragment shows)
- Co-op Roblox game about flying a **private jet** for VIP clients.
- Crew of **1–4 players** joining through a **fill queue** (locked in an earlier round).
- A **discretion layer** is already locked (earlier round): paparazzi, a discreet exit, cars, umbrellas, bags. The client's privacy and mood matter.
- Design goal: **solo must feel complete, not like a reduced version**. Playing with friends is an upgrade, never a requirement.
- Research basis: co-op games built for 2–4 players often lose tension when played solo. Roblox games that hold up both ways let a solo player pick one role and lock in, and keep most progression completable alone. (Source cited: The Tested Hub, "5 Best Coop Games Roblox 2026".)

## Already locked in earlier rounds (as referenced)
- 1–4 player fill-queue.
- Discretion layer (paparazzi, cars, umbrellas, bags → needs a ground job).
- Monetization rule: NPC crew is **earned, never bought with Robux**.

---

## Round 5 — Crew roles and solo play

### Q1. Crew roles — **LOCKED: C, four soft roles**
| Role | Duties |
|---|---|
| **Captain** | Flies the jet |
| **First Officer** | Radio, checklists, assists the co-pilot on landing |
| **Cabin Host** | Client requests, client mood |
| **Ground/Security** | Paparazzi exit, cars, umbrellas, bags |

- **Soft roles:** players claim a role at boarding, and anyone can still help anywhere.
- Rationale: four roles match the cap of 4, the discretion layer needs a ground job, and no one ends up spectating.
- Rejected options:
  - A (Pilot + Cabin): leaves extra players idle.
  - B (3 roles): the 4th player has no job.
  - D (fully fluid): everyone crowds the cockpit and nobody watches the client.

### Q2. Solo player — **STATUS UNCLEAR, needs confirming**
Options:
- A) Solo player does everything manually. This is punishing, e.g. a bad landing while pouring champagne.
- B) NPC crew fills empty roles automatically, at slightly lower skill (slower).
- C) Cruise autopilot: the solo player walks the cabin, then takes the controls back for landing.
- D) B + C. **This was the recommendation.** It comes with hireable NPC crew (earned, never Robux) and real crews paying **+10–15%** more.

⚠️ The user answered "C as in cat," but the assistant logged it as *"Locked — C. Dual-track hangar, operations and showpiece."* That is a different question, so the transcript is garbled here. **Re-confirm Q2 (C vs. D).**

### Q3. Jet ownership and payout — **NOT YET ANSWERED in the pasted part**
- A) The host owns the jet and pays the crew.
- B) Everyone earns the full fee independently.
- C) **Recommended:** the host gets progress on their jet or hangar, and everyone gets full currency and XP. Friends are never penalized for joining, and hosting still feels special.

### Q4. Role progression — **NOT YET ANSWERED in the pasted part**
- A) Shared account level only.
- B) **Recommended:** separate XP per role, with role cosmetics (captain wings, host uniforms). Adds retention cheaply and gives players something to show off.

> Earlier in the chat the assistant asked whether all four recommendations (C, D, C, B) were accepted. The user switched to a voice walkthrough instead of saying yes.

---

## Hangar (appears after Round 5; its round number is unknown)
- **LOCKED (per assistant):** a **dual-track hangar** with an **Operations** track and a **Showpiece** track.
- Proposed Operations upgrade lines (**pending the user's approval**):
  1. **Hangar bays:** jet capacity and concurrent flight cap.
  2. **Crew quarters / training:** slowly raises contracted crew sub-skills.
  3. **Recruitment office:** better quality and refresh rate for candidates on the **daily recruitment board**.
  4. **Service line** (catering, supplies): directly boosts client satisfaction.
- This implies **contracted NPC crew with sub-skills** and a **daily candidate board**, which were probably defined in an earlier round.
- Open question: add or cut any line?

## Next up
- **Round 6:** jet tiers and unlocks.

## Open items for Codex
1. Confirm Q2 (solo): C or D.
2. Confirm Q3 and Q4 (recommended: C and B).
3. Approve or edit the four Operations hangar lines, and define the Showpiece track.
4. Recover the details of Rounds 1–4, which are missing from this handoff.
