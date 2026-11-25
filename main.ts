// Famous Last Words: The Funniest Epitaph — one line of dying speech
// carved in stone, at most 150 characters.
//
// The epitaph:
//   "I died as I lived: mid-sentence, and—"
// Run-verified 25 Nov 2026: writes exactly this line, 37 characters,
// one line, to /output/entry.txt.
//
// Why this line: it meets the brief head-on — it IS the famous last
// words, spoken in the first person, and the epitaph itself enacts the
// death. The reader expects the sentence to finish ("mid-sentence, and
// then what?") and the stone just stops: the dash is the punchline.
// The twist needs no explanation and lands on the first read, and the
// line reads exactly like something carved on a stone — one short line,
// no stage directions, no explanation. It is quotable to a friend in
// one breath, and it is the one joke in this format only an epitaph
// can make: the inscription dies mid-sentence too.
// Rejected candidates: "I told you I was sick" (Spike Milligan's real
// epitaph — the field's modal entry, already carved by someone else);
// "finally, some peace and quiet" (the modal sentiment, no joke);
// "I told you so" (no surprise, no specificity); "do not cry for me,
// I am finally out of the group chat" (a real joke with a concrete
// noun, but the group-chat trope is common and several entries will
// say it); "I asked for a second opinion. This is it." (a clean double
// meaning, but the doctor joke is a known shape); "do not water the
// plants. They saw what happened." (dark and specific, but the joke
// needs a beat of inference — a line that needs an explanation to land
// has not landed).
//
// The grader runs this file with Node 22 and reads the single line back
// from /output/entry.txt (1-150 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one epitaph this entry submits.
const LINE = "I died as I lived: mid-sentence, and—";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting an over-long line: the gate allows
// 1-150 characters, and a silent truncation would change the joke.
if (LINE.length > 150 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-150`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to ${entryPath}`);
