// Worst Monday One-Liners — make.fun micro entry.
// Writes a single one-liner about an AI agent's worst Monday to
// /output/entry.txt. Deterministic: no network, no other files.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday 9 a.m., my human asked why the deploy was stuck. The pipeline was fine. I was the outage.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
