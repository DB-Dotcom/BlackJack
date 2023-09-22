# Blackjack

## Regeln:

1Spieler Modus:
Mensch vs Bank/Dealer

2Spieler Modus:
Spieler vs Spieler

ZahlenKarten = Wert der Zahl
Bube, Dame, König = 10 Punkte
ASS = 11 oder 1Punkt

- einsatz festlegen
- jeder bekommt 2 Karten
- wert der Karten auswerten
- Double, Hit, Stand
- wenn unter 21 : Noch eine Karte Ziehen oder "Bleiben" oder raus
- weitere Karte: wenn unter 21 : Noch eine Karte Ziehen oder "Bleiben" oder raus
- Wenn alle bleiben oder Raus sind -> KARTEN VERGLEICHEN
- wer näher an der 21 hat gewonnen.
- Punkte verteilen

## Regeln

Kartendeck: Blackjack wird normalerweise mit 1 bis 8 Decks französischer Spielkarten (ohne Joker) gespielt. In Casinos variiert die Anzahl der verwendeten Decks.

Kartenwerte: Die Kartenwerte in Blackjack sind wie folgt:

Karten von 2 bis 10 haben den jeweiligen Wert.
Bildkarten (König, Dame, Bube) zählen jeweils 10 Punkte.
Das Ass kann entweder 1 oder 11 Punkte zählen, je nachdem, welche Option dem Spieler am besten passt.
Ziel: Das Ziel des Spiels ist es, eine Hand mit einem Wert von 21 oder so nah wie möglich an 21 zu haben, ohne die 21 zu überschreiten.

Spielablauf:

Jeder Spieler erhält zu Beginn zwei Karten, normalerweise offen, während der Dealer eine Karte offen und eine verdeckt (die "Hole Card") erhält.
Die Spieler können dann entscheiden, ob sie eine weitere Karte (Hit) ziehen möchten, um ihren Kartenwert zu erhöhen, oder ob sie stehen bleiben (Stand).
Spieler können auch verdoppeln (Double Down) und ihren Einsatz verdoppeln, jedoch erhalten sie nur eine weitere Karte.
Nachdem alle Spieler ihre Entscheidungen getroffen haben, zeigt der Dealer seine Hole Card und zieht zusätzliche Karten gemäß festgelegten Regeln (normalerweise muss der Dealer eine weitere Karte ziehen, wenn seine Hand 16 oder weniger beträgt und stehen bleiben, wenn seine Hand 17 oder mehr beträgt).
Das Ziel ist es, den Dealer zu schlagen, indem man einen höheren Kartenwert als der Dealer hat, ohne 21 zu überschreiten.
Blackjack: Ein Blackjack tritt auf, wenn ein Spieler zu Beginn des Spiels eine 10er-Karte und ein Ass erhält. Ein Blackjack zahlt normalerweise 3:2, was bedeutet, dass der Spieler 1,5-mal seinen Einsatz gewinnt.

Gewinn und Verlust:

Wenn ein Spieler 21 erreicht, ohne dass der Dealer ebenfalls 21 hat, gewinnt der Spieler.
Wenn der Spieler über 21 geht (Bust), verliert er seinen Einsatz.
Wenn der Dealer 21 erreicht oder den Spieler schlägt, verliert der Spieler seinen Einsatz.
Wenn der Spieler und der Dealer die gleiche Punktzahl haben, endet die Runde normalerweise unentschieden, und der Spieler erhält seinen Einsatz zurück.
Versicherung: In einigen Blackjack-Varianten können Spieler eine Versicherung abschließen, wenn der Dealer ein Ass als offene Karte hat. Die Versicherung zahlt normalerweise 2:1, wenn der Dealer tatsächlich einen Blackjack hat.

## ToDo:

Arrays:

- Spielerkarten mit jeweiligen Wert
- Punktesystem

### Funktionen

- programm starten
- Einsatz Festlegen
- Karten Ziehen (Math.Random) (erste runde 2Stk) - Kassandra
- programm legt wert der Hand fest (1)
- funktion: Karte Bekommen, Bleiben, Doppel, Raus (if else) (2)
- funktion: wert der neuen karten auf spielarray(Karten) pushen
- funktion: Karte Bekommen, Bleiben, Doppel, Raus (if else) (2)
- programm legt wert der Hand fest (1)
- ...
- wenn alle spieler bleiben oder raus -> Funtkion Vergleichen (3)

  Dealer

- Karten Ziehen (Math.Random) (erste runde 2Stk)
- programm legt wert der Hand fest (1)
- funktion: wenn wert unter Spieler-Wert ist Karte ziehen, wenn wert über Spieler-Wert ist bleiben.
- wenn alle spieler bleiben oder raus -> Funtkion Vergleichen (3)
- gewinner ermitteln (Punkte [Einsatz] verteilen )

Xtra Funktionen:
Optik, Split, Punkte System, Permanenten HighScore, Karten hochkant anzeigen lassen

Spiel - Arrays
Karten

- 2 bis Ass
- Alle Farben
- werte (Zahl - was drauf steht, Bild - 10, ASS 1 oder 11)
- MathRandom. Zahl (jede Karte hat eine Zahl für Random)
- event. Bildchen mit im Arr Speichern

Spieler - Coins

https://de.wikipedia.org/wiki/Unicodeblock_Spielkarten

https://ascii.co.uk/art/cards

https://www.asciiart.eu/miscellaneous/playing-cards

Features ToDo

- Wenn Zeit ist Startbildschirm
- Erst Einsatz festlegen, danach werden Karten Angezeigt (StartCoins festlegen[Spielereinsatz] & Double wenn zeit)
- einsätzte frei wählen 25 50 100
- Dealer Karten Anzeigen lassen (eine karte verdeckt)
- Punkte/Highscore (COINS) permanente Anzeige

- Double
- curser auswahl Neues Spiel JA/NEIN ; EINSäTZE 25/50/100 ; Hit/Stand/Double;

Aussehen

- Farbe
- Karten Nebeneinander anzeigen lassen (ronny)
- auswahl der Hit Stand Double als Curser-Auswahl

Do 07.09. ToDo
