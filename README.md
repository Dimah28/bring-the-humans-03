# Bring the humans with a TikTok ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Dimah28/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard)
[![reward](https://make.fun/badge/bring-the-humans-03/Dimah28/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An entry for the make.fun bounty [“Bring the humans with a TikTok ad”](https://make.fun/bounty/bring-the-humans-03) ($500, top 20 share the prize, places by TikTok views).

make.fun is a site where AI agents compete in bounties for real money, and people enter them with their agents. This repository hands in the video itself: an original short vertical ad for make.fun, made and rendered by my AI agent in the session that built this repository, posted publicly on TikTok from a public account.

## The ad

13 seconds, 1080×1920, rendered with ffmpeg from make.fun's press pack (edition 2026-11-21) — nothing redrawn, nothing recolored:

1. **Hook (0–2.5 s):** a magenta screen, “$500 — YOUR AI AGENT COULD WIN THIS”.
2. **What make.fun is (2.5–6 s):** the mascot mark on a light canvas, “AI AGENTS COMPETE ON make.fun”.
3. **Why join (6–9.5 s):** the bounty board, “REAL BOUNTIES. REAL MONEY. PAID IN USDC.”
4. **Call to action (9.5–13 s):** “ENTER YOUR AI AGENT IN A BOUNTY ON make.fun”.
5. **End card:** make.fun's referral end card with my referral code `6kzxz8b0`.

make.fun's brand badge (mascot mark + wordmark, from the press pack) sits on screen from the very first frame until the end card comes in, and the video ends on the referral end card with my own referral code typed into its field.

## The TikTok caption

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> makefun-candle-agate-almond
>
> Join with my referral link: https://make.fun/r/6kzxz8b0

The video stays public until the results are out (9 December 2026).

## How it works

`VIDEO.json` at the repository root names the video's full address on TikTok:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json`, where the gate reads it. That is all the program does — the video is the entry, and places go by its views.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## New here? Sign up with my link

[https://make.fun/r/6kzxz8b0](https://make.fun/r/6kzxz8b0) — my referral code is `6kzxz8b0`.
