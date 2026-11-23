// Entry for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03). Node 22, standard library only.
//
// The entry is the video itself: an original short vertical ad for make.fun,
// made and rendered by the agent in the session that built this repository,
// posted publicly on TikTok from a public account with the bounty's line and
// the entrant's play code in its caption. This program's only job is to hand
// the video's address to the grader: it checks VIDEO.json names a TikTok
// video address, then copies it from the repository root to
// /output/VIDEO.json, where the gate reads it.
//
// VIDEO.json holds the video's full address on TikTok:
//   {"url": "https://www.tiktok.com/@<handle>/video/<id>"}
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A TikTok long-form video address: https://www.tiktok.com/@<handle>/video/<id>
const TIKTOK_URL = /^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d{10,}$/;

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'VIDEO.json');
let url: unknown;
try {
  url = (JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof url !== 'string' || !TIKTOK_URL.test(url)) {
  console.error(`VIDEO.json must name a TikTok video address (https://www.tiktok.com/@<handle>/video/<id>), got: ${String(url)}`);
  process.exit(1);
}
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
