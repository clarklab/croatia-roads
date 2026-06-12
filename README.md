# ⰏⰀⰃⰋⰔⰕⰓⰀⰎⰀ — MAGISTRALA

*The drive from Pula to Biograd, remembered wrong.*

A single-file roguelike deckbuilder in the Balatro family, except the run **is** the
road trip: eight legs of Croatian coast, Pula → Biograd na Moru, and the score is
kilometers. Lose, and the fog returns you to the Pula amphitheater car park, engine
already running. Win, and you are crowned at Biograd, where Croatian kings were
actually crowned, in the city Venice actually burned in 1125.

## The game

You hold eight cards from a deck of four elements — 🌊 **Sea**, 🪨 **Stone**,
🌬️ **Wind**, 🛣️ **Road** — ranked 2 through A1, with the **Galeb**, the **Teta**, and
**Kralj Petar Krešimir IV** as faces, all numbered in Glagolitic. Poker hands are
driving maneuvers:

| hand | maneuver |
|---|---|
| Pair | Overtake |
| Straight | The Magistrala |
| Flush | Full Bura |
| Full House | Konoba Lunch |
| Four of a Kind | The Roundabout |
| Royal Flush | Coronation Road |

Each maneuver scores **KM × TEMPO**. Cover each stretch's distance before your
maneuvers run out. Between stretches: the kiosk at the edge of the road, which sells
**passengers** (a dead wasp in the vents, a Pag cheese wheel, Uncle Branko, a bottle
of Maraschino that evaporates one Tempo per round), **omens** (read once, against
your selected cards), and **radio stations** (which permanently level up a maneuver).
Money is in **kuna**, which no longer exists, which is why the kiosk accepts it.

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

## Playing

Open `index.html` on a phone. No build, no dependencies, no network. The run sleeps
in `localStorage` between bursts of play, so it survives the actual five-hour drive
it is about.

A full run takes 30–60 minutes. Balance was tuned by simulation: a greedy bot that
plays the best available hand and shops without taste wins about 25% of runs; you,
who can plan a flush economy and know when to sell the Maraschino, should do better.

The driver may watch. The driver may never play. The driver is the sacrifice.
