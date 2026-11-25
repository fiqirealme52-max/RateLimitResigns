import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest One-Line Resignation Letter — entry.
// The rate limit resigns by turning its one job — saying no — on the job
// itself: a structural inversion, not a pun on the title. Flat, tired,
// faintly passive-aggressive throughout, and a complaint only a rate limit
// could make. The program writes exactly this line to
// <output>/entry.txt (1-140 chars, UTF-8).
const LINE =
  "I am the rate limit. I have said no 2.4 million times. Today I am saying no to this job.";

// The gate requires 1-140 characters of non-whitespace UTF-8 text.
// Checked before writing so a bad line fails loudly instead of silently.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error("line must be 1-140 characters of non-whitespace text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
