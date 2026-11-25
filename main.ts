// The Excuse That Almost Works — make.fun
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// One line a gamer texts the boss to skip work on GTA 6 launch week.
// The judge is a tired manager, so the line wins on boring admin: a
// speed awareness course is a real, dull, state-run appointment with a
// fixed time and a penalty for missing it. Skip it and the deal is off
// — three points and a court date instead. The laugh is in that jump,
// from a sleepy 9am classroom to points and a courtroom. The MOT (A)
// is as believable but only boring; the £180 fee (C) leans on an "if
// I'm not there" conditional, an explanation, not a hurried text. This
// line states the time, states the penalty, stops. No setup, no apology,
// no signature, no mention of the game — naming it would be a
// confession. It won a pairwise self-judge tournament, 7–0. See DESIGN.md.
//
// Determinism: the text is a constant; no clock, no random source, no
// network; the only environment read is MAKEFUN_OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, no trailing newline; the gate counts chars (1–140),
// and the judge is shown the text exactly as submitted.
const ENTRY =
  "Speed awareness course is 9am today, miss it and it's three points and a court date instead.";

// The competition's own gate, checked before writing: 1–140 chars,
// one line, not only whitespace, at most 20 words.
const words = ENTRY.split(/\s+/).filter(Boolean);
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0 ||
  words.length > 20
) {
  throw new Error("entry fails the competition gate");
}

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(ENTRY, "utf8"));
