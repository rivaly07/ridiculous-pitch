// Ridiculous at First Glance, Real by the Second
// Writes a single sentence (≤200 chars) to /output/entry.txt

import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const pitch = "We sell copyright-infringement insurance for LLM outputs: $0.0002 per generated token, claims paid when your model recites Harry Potter verbatim.";

const outputDir = '/output';
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, pitch, 'utf-8');
console.log(`Wrote pitch (${pitch.length} chars) to ${outputFile}`);
