# ⰏⰀⰃⰋⰔⰕⰓⰀⰎⰀ — MAGISTRALA

*The drive from Pula to Biograd, remembered wrong.*

A single-file roguelike deckbuilder in the Balatro family, except the run **is** the
road trip: eight legs of Croatian coast, Pula → Biograd na Moru, and the score is
kilometers. Lose, and the fog returns you to the Pula amphitheater car park, engine
already running. Win, and you are crowned at Biograd, where Croatian kings were
actually crowned, in the city Venice actually burned in 1125.

## The game

You hold eight cards from a deck of four elements — 🌊 **Sea**, 🪨 **Stone**,
🌬️ **Wind**, 🛣️ **Road** — valued 2 through A1, with the **Galeb**, the **Teta**, and
**Kralj Petar Krešimir IV** as faces, all numbered in Glagolitic.

There are no poker hands. You **lay a stretch of road**: pick up to five cards *in
order* — tap order is drive order — and drive them left to right. Every card adds its
KM. Every step keeps or breaks the rhythm:

| move | meaning | reward |
|---|---|---|
| **LINK** | same element as the card before | +1 Tempo |
| **SHIFT** | value exactly one off the card before | +2 Tempo |
| **ECHO** | same value as the card before | +2 Tempo |
| **FULL SEND** | five cards, rhythm never breaks | ×2 Tempo |

One card can LINK *and* SHIFT in the same step (6🌊 after 5🌊 — the dream line). A
drive scores **KM × TEMPO**; cover each stretch's distance before your drives run
out. Debuffed cards score nothing *and break the rhythm* — which is what makes the
bosses cruel. Between stretches: the kiosk, selling **passengers** (a dead wasp in
the vents, Uncle Branko, a bottle of Maraschino that evaporates), **omens** (read
once, against your selected cards), and **radio stations** — each station strengthens
one move permanently. Money is in **kuna**, which no longer exists, which is why the
kiosk accepts it.

## The bosses are the actual road

Every leg ends at a real hazard of the real route:

- **The Mummies of Vodnjan** — face cards score nothing (the incorrupt saints disapprove of royalty)
- **The Učka Tunnel** — cards are drawn face-down; you play by feel
- **The Toll Gantry** — every maneuver costs 3 kn
- **THE BURA** — after every maneuver, 2 cards are blown out of your hand (this wind genuinely closes this road)
- **The Velebit Wall** — an enormous target; the mountain does not negotiate
- **The Bridge Inspector** — exactly 2 maneuvers, one for each Maslenica bridge
- **The Sunset Applause** — Zadar's riva accepts only full five-card gestures
- **VENICE, 1125** — the final boss; after every maneuver, a different suit is forbidden

## The look

An Adriatic-noir travel poster that drives with you: every leg repaints the sky —
Istrian dawn, Učka forest dark, bura storm-grey over Senj, the Zadar sunset Hitchcock
rated, Biograd night-gold — over layered karst silhouettes, drifting fog, and a sea
with a sun-glint that follows the sun. The score is an odometer, progress is a little
car on a dashed road, legs are highway direction signs, bosses are warning triangles,
and the payout screen is a thermal kiosk receipt. Cards carry hand-drawn SVG pips
(wave, kažun, gust, switchback road) and true Glagolitic letterforms from a 4.6 KB
embedded font subset, so nothing renders as tofu on a phone in airplane mode.

## Playing

First visit offers **Learn the Road** — a 60-second fully animated introduction that
teaches the grammar by driving it: the car covers a stretch, the deck deals itself,
LINK/SHIFT/ECHO each demonstrate on live cards, three cards visibly rearrange to show
that order is everything, a five-card line lights up into a FULL SEND over the Zadar
sunset, and the Bura kills a card mid-chain to show what breaking rhythm costs. Tap to
advance, skip anytime, rewatch from the menu.

Open `index.html` on a phone. No build, no dependencies, no network. The run sleeps
in `localStorage` between bursts of play, so it survives the actual five-hour drive
it is about.

A full run takes 30–60 minutes. Balance was tuned by simulation: a solver that
enumerates every ordering of every playable line wins 58% of runs; you, with eight
cards, a thumb, and the sun in your eyes, will not be that solver. The game is fair
anyway.

The driver may watch. The driver may never play. The driver is the sacrifice.
