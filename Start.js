  import readline from 'readline'

export const startScreen = `
888     888                888       d8b                888      
888     888                888       Y8P                888      
888     888                888                          888      
88888b. 888 8888b.  .d8888b888  888 8888 8888b.  .d8888b888  888 
888 "88b888    "88bd88P"   888 .88P "888    "88bd88P"   888 .88P 
888  888888.d888888888     888888K   888.d888888888     888888K  
888 d88P888888  888Y88b.   888 "88b  888888  888Y88b.   888 "88b 
88888P" 888"Y888888 "Y8888P888  888  888"Y888888 "Y8888P888  888 
                                     888                         
                                    d88P                         
                                  888P"       
                                                                                                                                                                                                          
`;

console.log(startScreen);
 function showProgressBar() {
    const totalSections = 50; // Gesamtanzahl der Abschnitte
    let currentSection = 0;
  
    const interval = setInterval(() => {
      process.stdout.clearLine();  // Löscht die vorherige Zeile im Terminal
      process.stdout.cursorTo(0); // Setzt den Cursor an den Anfang der Zeile
  
      currentSection++;
  
      if (currentSection <= totalSections) {
        const progress = (currentSection / totalSections) * 100;
        const filled = '█'.repeat(currentSection);
        const empty = ' '.repeat(totalSections - currentSection);
  
        process.stdout.write(`Loading... [${filled}${empty}] ${progress.toFixed(1)}%`);
      } else {
        clearInterval(interval);
        process.stdout.write('\n'); // Neue Zeile nach Abschluss des Ladebalkens
      }
    }, 50);
  }
  
  // Funktion aufrufen, um den Ladebalken anzuzeigen
  showProgressBar();
  console.clear;
  


const menuOptions = ["Spiel", "2 Spieler", "Highscore", "Hilfe"];

function displayMenu() {
 // Löscht den vorherigen Bildschirminhalt
  console.log("Willkommen zum Spiel Menü:\n");
  
  for (let i = 0; i < menuOptions.length; i++) {
    console.log(`${i + 1}. ${menuOptions[i]}`);
  }
  
  console.log("\nWähle eine Option (Geben Sie die Nummer ein):");
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('> ', (choice) => {
    choice = parseInt(choice);
    if (!isNaN(choice) && choice >= 1 && choice <= menuOptions.length) {
      handleMenuChoice(choice - 1);
    } else {
      console.log("Ungültige Auswahl. Bitte gib die Nummer einer Option ein.");
      rl.close();
      displayMenu();
    }
  });
}

function handleMenuChoice(index) {
  console.log(`Du hast "${menuOptions[index]}" ausgewählt.`);
  // Hier kannst du die entsprechende Aktion für jede Option implementieren.
  // Zum Beispiel: Wenn "Spiel" ausgewählt wurde, starte das Spiel.
  // Wenn "Hilfe" ausgewählt wurde, zeige die Hilfeseite an.
  // Füge weitere Aktionen für die anderen Optionen hinzu.
}





  
