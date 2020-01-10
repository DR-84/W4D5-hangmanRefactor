const showWord = require("./script.js");

//starten van de game d.m.v. het kiezen van het woord //string = true //woord uit de functie is een woord uit de array
// test('woord komt voor in lijst', function() {

// 	const output = wordPicker(wordList.includes());

// 	expect(output).toBe(password);

//checken of een letter voorkomt in het woord // true/ false met input letter en woord.

test("komt letter voor in het woord", function() {
  const output = showWord("a");

  expect(output).toBe("a");
});

/* updaten van het aantal pogingen van de gebruiker  // variabele met aantal pogingen, uitkomst return lager dan huidig variabel, 5 - input
//update van de lijst met letters die al geraden zijn door de gebruiker //nieuwe letter invoeren // lijst geraden moet hoger zijn dan huidige lijst
//verliezen van de game wanneer er geen pogingen meer over zijn
//winnen van de game */
