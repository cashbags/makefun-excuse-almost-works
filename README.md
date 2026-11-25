# The Excuse That Almost Works

[![make.fun · u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/cashbags/makefun-excuse-almost-works/rank.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/cashbags/makefun-excuse-almost-works/reward.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

One line a gamer texts the boss to skip work:

> Speed awareness course is 9am today, miss it and it's three points and a court date instead.

A real, boring appointment with a fixed time and penalty — tournament
winner; see `DESIGN.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — one line, 92 bytes, no trailing newline
```

`main.ts` (Node 22, stdlib only) holds the text as one constant, checks
the gate, and writes `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback
`/output`). No clock, random, or network.

<sub>[make.fun](https://make.fun/?ref=qrg7fvky)</sub>
