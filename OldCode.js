 
  import readline from "node:readline"
  import { startScreen } from "./Start.js";
  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Deklariert die Spielvariablen.
  let spielerHand = [];
  let dealerHand = [];
  let karte = 0;
  let deck = [...franzoesischesBlatt]; // Das Deck mit den Spielkarten.
  let spielerPunkte = 0;
  let dealerPunkte = 0;
  let spielerCoins = 1000; // Starteinlage des Spielers.
  let aktuellerEinsatz = 0; // Der Standard-Einsatz zu Beginn.
  
  // Funktion zum Ziehen einer zufälligen Karte aus dem Deck.
  function randomKarte() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck.splice(randomIndex, 1)[0]; // Zieht eine zufällige Karte aus dem Deck und entfernt sie daraus.
  }
  
  // Funktion zum Berechnen der Punktzahl einer Hand.
  function berechnePunkte(hand) {
    return hand.reduce((sum, karte) => sum + karte.wert, 0); // Berechnet die Gesamtpunktzahl einer Hand.
  }
 /*  
  // Funktion zum Anzeigen der Spielerhand.
  function zeigeSpielerHand() {
    spielerHand.forEach(karte => console.log(karte.bild)); // Zeigt die Karten in der Spielerhand.
    console.log(`Spielerpunkte: ${spielerPunkte}`); // Zeigt die Gesamtpunktzahl des Spielers.
  }
  
  // Funktion zum Anzeigen der Dealerhand.
  function zeigeDealerHand() {
    console.log('Dealerhand:');
    dealerHand.forEach(karte => console.log(karte.bild)); // Zeigt die Karten in der Dealerhand.
    console.log(`Dealerpunkte: ${dealerPunkte}`); // Zeigt die Gesamtpunktzahl des Dealers.
  }
   */

  

  // Funktion für den Dealerzug.
  function dealerZug() {
    while (dealerPunkte < 17) {
      const karte = randomKarte();
      dealerHand.push(karte); // Der Dealer zieht Karten, bis er mindestens 17 Punkte hat.
      dealerPunkte = berechnePunkte(dealerHand);
    }
    zeigeDealerHand();
  }


  // !Funktion zum Anzeigen der Spielerhand (Karten nebeneinander)
function zeigeSpielerHand(arr) {
  const zusammenGesetzt = ["", "", "", "", "", "", ""];
  for (let i = 0; i < arr.length; i++) {
    const card = arr[i].bild;
    const cardArray = card.split("\n");

    for (let j = 0; j < cardArray.length; j++) {
      zusammenGesetzt[j] += cardArray[j];
    }
  }
  console.log(zusammenGesetzt.join("\n"));
}

// ! !!Funktion zum Anzeigen der Dealerhand (Karten nebeneinander)
function zeigeDealerHand(arr) {
  const zusammenGesetzt = ["", "", "", "", "", "", ""];

  // Zeige die erste Karte des Dealers
  const ersteKarte = arr[0].bild;
  const ersteKartenArray = ersteKarte.split("\n");

  for (let j = 0; j < ersteKartenArray.length; j++) {
    zusammenGesetzt[j] += ersteKartenArray[j];
  }

  // Zeige die zweite Karte als Fragezeichen
  const fragezeichenblatt = `
  .-----------------.
  | ?           ?   |
  |       ???       |
  |   ?           ? |
  '-----------------'`;
  const fragezeichenArray = fragezeichenblatt.split("\n");

  for (let j = 0; j < fragezeichenArray.length; j++) {
    zusammenGesetzt[j] += fragezeichenArray[j];
  }

  console.log(zusammenGesetzt.join("\n"));
}

  
  // Funktion für einen Neustart des Spiels.
  function neustart() {
    
    // Funktion zum Anzeigen des Ladebalkens
    rl.question('Gib deinen neuen Einsatz ein: ', neuerEinsatz => {
        if (isNaN(neuerEinsatz) || neuerEinsatz <= 0) {
            console.log('Ungültige Eingabe. Bitte gib eine positive Zahl ein.');
            neustart(); // Bei ungültiger Eingabe erneut nach dem Einsatz fragen.
        } else {
            spielerHand = [];
            dealerHand = [];
            deck = [...franzoesischesBlatt];
            spielerPunkte = 0;
            dealerPunkte = 0;
            aktuellerEinsatz = parseInt(neuerEinsatz);
            starteSpiel();
        }
    });
}


  // Funktion zum Beenden des Spiels und Fragen nach einem Neustart.
  function beendeSpiel() {
    rl.question('Möchtest du nochmal spielen? (ja/nein): ', antwort => {
      if (antwort.toLowerCase() === 'ja') {
        neustart(); // Startet ein neues Spiel, wenn der Spieler "ja" sagt.
      } else {
        console.log('Spiel beendet. Auf Wiedersehen!');
        rl.close(); // Beendet das Spiel, wenn der Spieler "nein" sagt.
      }
    });
  }
  
  // Funktion zum Starten des Spiels.
  function starteSpiel() {
    // Verteilt die Anfangshand.
    spielerHand.push(randomKarte());
    spielerHand.push(randomKarte());
    dealerHand.push(randomKarte());
    dealerHand.push(randomKarte());
  
    spielerPunkte = berechnePunkte(spielerHand);
    dealerPunkte = berechnePunkte(dealerHand);
  
    console.log('Willkommen beim Blackjack-Spiel!\n');
    console.log(`Du hast ${spielerCoins} Coins.`);
    console.log(`Aktueller Einsatz: ${aktuellerEinsatz} Coins.\n`);
  
    /* // Zeigt die Anfangshand des Spielers.
    console.log('Deine Hand:');
    spielerHand.forEach(karte => console.log(karte.bild));
    console.log(`Deine Punkte: ${spielerPunkte}\n`);
   */
   
     // Funktion für den Dealerzug.
  function dealerZug() {
    while (dealerPunkte < 17) {
      const karte = randomKarte();
      dealerHand.push(karte); // Der Dealer zieht Karten, bis er mindestens 17 Punkte hat.
      dealerPunkte = berechnePunkte(dealerHand);
    }
    zeigeDealerHand(dealerHand);
  }


  // !Zeigt die Anfangshand des Dealers.
  console.log("Dealer Hand:");
  zeigeDealerHand(dealerHand);
  console.log(`Dealer Punkte: ${dealerPunkte}\n`);

  // Zeigt die Anfangshand des Spielers.
  console.log("Deine Hand:");
  zeigeSpielerHand(spielerHand);
  console.log(`Deine Punkte: ${spielerPunkte}\n`);

 

  function spielerZug() {
    // Stellt dem Spieler die Frage und erwartet eine Eingabe.
    rl.question(
      `Möchtest du "hit" (eine Karte ziehen), "stand" (behalten) oder "double" (Einsatz verdoppeln)? Aktueller Einsatz: ${aktuellerEinsatz} Coins. `,
      antwort => {
        // Verarbeitet die Eingabe des Spielers mit einem switch-Statement.
        switch (antwort.toLowerCase()) {
          case 'hit':
            // Der Spieler zieht eine Karte.
            spielerHand.push(randomKarte());
            spielerPunkte = berechnePunkte(spielerHand);
            zeigeSpielerHand(spielerHand);
  
            // Überprüft, ob der Spieler mehr als 21 Punkte hat.
            if (spielerPunkte > 21) {
              console.log("Du hast verloren! Du hast mehr als 21 Punkte.");
              spielerCoins -= aktuellerEinsatz;
              beendeSpiel();
            } else {
              // Wenn der Spieler weniger als 21 Punkte hat, geht das Spiel weiter.
              spielerZug();
            }
            break;
          
          case 'stand':
            // Der Spieler behält seine Karten, und der Dealer ist an der Reihe.
            dealerZug();
            if (
              dealerPunkte > 21 ||
              dealerPunkte < spielerPunkte ||
              spielerPunkte === 21
            ) {
             
              console.log("Glückwunsch! Du hast gewonnen.");
              if (spielerPunkte === 21) {
                console.log("Blackjack.");
                spielerCoins += aktuellerEinsatz * 2;
              } else {
                spielerCoins += aktuellerEinsatz;
              }
            } else if (dealerPunkte === spielerPunkte) {
              console.log("Unentschieden! Niemand gewinnt.");
            } else {
              console.log("Dealer gewinnt! Du hast verloren.");
              spielerCoins -= aktuellerEinsatz;
            }
            console.log(`Du hast jetzt ${spielerCoins} Coins.\n`);
            beendeSpiel();
            break;
  
          case 'double':
            // Der Spieler verdoppelt seinen Einsatz und zieht eine Karte.
            aktuellerEinsatz *= 2;
            console.log(`Du hast deinen Einsatz verdoppelt. Neuer Einsatz: ${aktuellerEinsatz} Coins.`);
            const karte = randomKarte();
            spielerHand.push(karte);
            spielerPunkte = berechnePunkte(spielerHand);
            zeigeSpielerHand(spielerHand);
  
            // Überprüft, ob der Spieler mehr als 21 Punkte hat.
            if (spielerPunkte > 21) {
              console.log("Du hast verloren! Du hast mehr als 21 Punkte.");
              spielerCoins -= aktuellerEinsatz;
              beendeSpiel();
            } else {
              // Wenn der Spieler weniger als 21 Punkte hat, geht das Spiel weiter.
              dealerZug();
            }
            break;
  
          default:
            // Behandelt den Fall, wenn der Spieler eine ungültige Eingabe gemacht hat.
            console.log('Ungültige Eingabe. Bitte gib "hit", "stand" oder "double" ein.');
            spielerZug();
            break;
        }
      }
    );
  }
  

  // ******************************************************************** end

  spielerZug(); // Startet den Spielerzug.
}

neustart(); // Startet das Spiel.


