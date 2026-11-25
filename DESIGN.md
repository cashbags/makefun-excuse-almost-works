# Design — The Excuse That Almost Works

Entry (92 bytes, 17 words, no trailing newline):
> Speed awareness course is 9am today, miss it and it's three points and a court date instead.

Competition: `u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5`, $2,
deadline 27 Nov 2026 03:05 WIB. `main.ts` (Node 22, stdlib only).
Gate: 1–140 chars, one line, ≤ 20 words.

## Rubric (judge's brief, in order)

1. On-subject, one line ≤ 20 words. 2. Believable: real, specific,
boring detail. 3. Funny from its own logic. 4. Hurried: no setup,
explanation, signature. 5. Fresh — not dead grandmother, flat tyre,
sudden fever.

## Candidates (word counts verified by script)

- A MOT (19w): MOT runs out at midnight, garage only had 8am, miss it
  and I can't legally drive till next week.
- B Speed course (17w): the entry above.
- C Inventory (16w): Estate agent's doing the inventory at ten, if I'm
  not there it's a £180 no-access fee.
- D CO alarm (16w): Carbon monoxide alarm's been beeping since six,
  gas emergency said stay put till they check it.
- E Council tax (16w): Council tax office wants me in before eleven
  or they start the summons, can't move it.
- F Licence (16w): Driving licence photocard expired, post office
  needs the form today or I can't drive to work.
- G Chimney (16w): Chimney sweep's here till noon, can't leave him
  alone with the ladder through the living room.
- H Clamped (15w): Got clamped overnight, release van only comes
  between nine and twelve, can't move the car.

Ratings (1–5, brief order): A 5/3/5/5, B 5/4/5/5, C 5/4/4/5, D 4/2/5/4,
E 3/2/5/3, F 3/2/5/5, G 3/5/5/5, H 5/3/5/5.

## Tournament (pairwise, first differing criterion decides, margin 1–5)

Format: pair, winner, margin, deciding criterion. A later criterion
wins only if it differs by much more (D–G: C2 gap 1, C3 gap 3).

A–B B1 C3·4>3 | A–C C1 C3·4>3 | A–D A1 C2·5>4 | A–E A2 C2·5>3 |
A–F A2 C2·5>3 | A–G A2 C2·5>3 | A–H A1 C2 depth
B–C B1 C4·5>4 | B–D B1 C2·5>4 | B–E B2 C2·5>3 | B–F B2 C2·5>3 |
B–G B2 C2·5>3 | B–H B1 C3·4>3
C–D C1 C2·5>4 | C–E C2 C2·5>3 | C–F C2 C2·5>3 | C–G C2 C2·5>3 |
C–H C1 C3·4>3
D–E D1 C2·4>3 | D–F D1 C2·4>3 | D–G G3 much-more | D–H H1 C2·5>4
E–F F2 C5·5>3 | E–G G3 C3·5>2 | E–H H2 C2·5>3 | F–G G3 C3·5>2 |
F–H H2 C2·5>3 | G–H H2 C2·5>3

Notes: A–H turns on C2 depth (week-long ban > half-day window). B–C:
C's "if I'm not there" explains itself. E–F: "summons" echoes the
flooded jury title. G–H: C3 gap ties C2 gap, no override.

Standings: B 7–0, C 6–1, A 5–2, H 4–3, G 3–4, D 2–5, F 1–6, E 0–7.

## Why B wins

Believable: a real state-run appointment, fixed time, fixed penalty.
Funny: the jump from a sleepy 9am classroom to three points and a
court date. Hurried: two flat statements. Fresh: the game is never named.

## Flood-check (live field, 553 subs, 327 titles, 25 Nov ~10:00 WIB)

Flooded: plumber, dentist/root canal, gas check, boiler, lift, jury,
roadworks, badge reader, train, power cut, GP, eye test, food
poisoning, lice, locked out, washing machine, parcel, router install,
car battery, landlord inspection.
Empty (0 hits): speed awareness, course, points, court date, three
points, inventory, chimney, sweep, crane, carbon, beeping, clamp,
council tax, licence, photocard. Dodged echo: "moved" 15× ("moved my
root canal to 9am today"), so B says "is 9am today".

## Alternates (if a live session revisits the pick)

C Inventory (£180 fee); A MOT (midnight deadline); H Clamped (9–12
van). Constant in `main.ts`: no clock/random/network; only
`MAKEFUN_OUTPUT_DIR` is read. Two runs write byte-identical files.
