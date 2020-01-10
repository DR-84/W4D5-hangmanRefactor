const { lostGame, wordPicker, letterChecker } = require("./script.js");

// test 1
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

test("is een string", function() {
  const output = wordPicker(wordList);
  console.log(output);
  expect(output).toBeTruthy();
});

// test 2
const letter = "a";
const woord = "appel";

test("heeft het woord letter ..", function() {
  const output = letterChecker(letter, woord);
  console.log(output);
  expect(output).toBe(true);
});

// test 3
test("Geen pogingen meer over", function() {
  const output = lostGame();
  console.log(output);
  expect(output).toBe(true);
});
