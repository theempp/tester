# Private Jet Charter Tycoon (Roblox): Design Handoff for Codex

> Built from the two chat excerpts the user pasted. Some details from Rounds 1–4 were locked in the chat's memory but never shown in these excerpts, so they are marked **(unknown)**.

## 1. Core concept
- **Pitch:** a *private jet tycoon*. You own a private jet, and your hub is a beautiful, modern luxury hangar.
- **Progression:** upgrade the hangar and the jet, buy more jets, and buy more hangars.
- **Money source:** charter contracts flying wealthy and famous clients: businessmen, entrepreneurs, celebrities, athletes.

## 2. Market research
- **Existing games:** Airport Tycoon, Mega Jet Tycoon, Plane Tycoon 2, Airport Island Tycoon. All are build-a-plate tycoons: conveyor drip income, buy the next dropper, and a generic jet to fly as a reward.
- **Gap:** no one has built luxury private charter with named clients. The gap is real.
- **Risk:** classic tycoon is the weakest retention genre on Roblox. The loop is watching money pile up, and players churn after about 3 sessions.
- **The real hook is the contract:** you fly a demanding celebrity who rates you on **smoothness, timing and cabin service**. No other game does that loop.
- **Decision:** the hangar and jets are the **collection and status layer**. The moment-to-moment game is the **charter run**, not drip income.

## 3. Social layer (three parts)
1. **Friends fly as crew.** One pilots, one works the cabin, and the client rates the whole flight. This gives players a real reason to invite someone.
2. **Visitable hangars.** Friends drop in, walk the floor, and see your jets and your **rare tail numbers**. Status only works if someone is there to see it.
3. **Leaderboards rank client satisfaction, not money.** Money can be ground out; reputation can't. There are **weekly boards for top charter rating**, and **serialized jets are awarded at season end** (the season structure was locked earlier).

## 4. Pre-round calls (asked before Round 1)
Recommendations given:
- **Flight time:** compressed to about 8 minutes per flight (preferred over realistic long-haul with a time-skip), because session length is what kills sim games.
- **Flying:** skill-based. Real takeoffs and landings that you can do badly, which gives the rating something to measure.
- **Client:** open question: is the client an NPC walking around with mid-flight demands, or only a rating at the end? The later design (Cabin Host handling requests and mood) suggests a **live NPC with demands**.
- The final answers were locked in memory **(unknown)**. Confirm them.

## 5. Locked rounds 1–4
- **Round 1–2:** (unknown). Likely covered the core loop, rating, and seasons.
- **Round 3, destinations: four at launch.** Monaco, Dubai, an alpine ski town, and New York. **Tokyo** is held back for Season 1.
- **Round 4, session structure:**
  1. Spawn in your hangar.
  2. **The phone rings** with contract offers (LOCKED). Offers vary by pay, client difficulty and destination. They **expire**, which creates urgency. You accept or decline.
  3. Prep the jet: catering and cabin setup.
  4. Fly it.
  5. Handle the arrival and the **paparazzi** (the discretion layer).
  6. Get paid back at the hangar.
- Also locked earlier: a **1–4 player fill-queue** and the **discretion layer** (paparazzi exit, cars, umbrellas, bags).

## 6. Round 5: crew roles and solo play
Research: co-op games built for 2–4 players often lose tension when played solo. Roblox games that hold up let a solo player lock into one role, and keep most progression completable alone. Solo must feel **complete**, not reduced.

### Q1. Roles: **LOCKED, C (four soft roles)**
| Role | Duties |
|---|---|
| Captain | Flies |
| First Officer | Radio, checklists, landing assist |
| Cabin Host | Client requests and mood |
| Ground/Security | Paparazzi exit, cars, umbrellas, bags |

Players claim a role at boarding, and anyone can help anywhere.
- Rejected A (2 roles): extra players sit idle.
- Rejected B (3 roles): the 4th player has no job.
- Rejected D (fluid): everyone crowds the cockpit.

### Q2. Solo: **UNCLEAR, re-confirm**
- A) Solo player does everything manually. Punishing.
- B) NPC crew fills empty roles at lower skill.
- C) Cruise autopilot: walk the cabin, then take back control to land.
- D) **Recommended:** B + C. NPC crew is hired with in-game money, **never Robux**, and real crews pay **+10–15%** more.

⚠️ The user said "C as in cat," but the assistant logged it as the hangar decision. Re-confirm C vs. D.

### Q3. Ownership and payout: **not answered**
- A) The host owns the jet and pays the crew.
- B) Everyone earns the full fee independently.
- C) **Recommended:** the host gets jet/hangar progress, and everyone gets full currency and XP.

### Q4. Role progression: **not answered**
- A) Shared account level only.
- B) **Recommended:** separate XP per role, with role cosmetics (captain wings, host uniforms).

## 7. Hangar upgrades (in progress)
- **LOCKED:** a dual-track hangar with an **Operations** track and a **Showpiece** track.
- Proposed Operations lines (**pending approval**):
  1. **Hangar bays:** jet capacity and concurrent flight cap.
  2. **Crew quarters / training:** raises contracted NPC crew sub-skills.
  3. **Recruitment office:** better candidate quality and refresh rate on the **daily recruitment board**.
  4. **Service line** (catering, supplies): boosts client satisfaction.
- The Showpiece track is not defined yet.

## 8. Remaining rounds
- Jet tiers and unlocks (Round 6)
- Finish hangar upgrades
- Monetization (known rule: gameplay helpers like NPC crew are never sold for Robux)
- Art direction

Then write the complete Markdown build spec.

## 9. Handoff prompt
> "Continuing the private jet charter Roblox game spec. Rounds one through four are locked. I need to finish the remaining rounds before we write the build document: crew roles and what a solo player does, jet tiers and unlocks, hangar upgrades, monetization, and art direction. Go one round at a time, and for every question give me the full menu of options plus your own recommendation backed by research. When all are done, write the complete markdown build spec for Codex."
