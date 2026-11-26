// tabs entry: print the one-number entry from entry.txt
// The entry is a bare number; trailing whitespace is trimmed before printing.
// Output goes to stdout with a trailing newline, exactly one number.
import { readFileSync } from "node:fs";

// Resolve the entry file relative to this module, then read and print it.
const entryUrl = new URL("./entry.txt", import.meta.url);
const raw = readFileSync(entryUrl, "utf8");
const count = raw.trim();
console.log(count);
