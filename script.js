// Initialize ALL global variables here

// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

//let word;
wordPicker = word => {
  let index = Math.floor(Math.random() * word.length);

  return word[index];
};
// console.log(wordPicker(wordList));

letterChecker = (letter, woord) => {
  return woord.includes(letter);
};

//let inputs;
wordGuessed = (word, inputs) => {
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(function(letter) {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};

clean = () => (document.querySelector("input").value = "");

let gameOver;
winTheGame = () => (document.querySelector(".win").style.display = "block");
gameOver = true;

lostGame = () => (document.querySelector(".lose").style.display = "block");
gameOver = true;

spanTheWord1 = word =>
  (document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`);

let tries = 0;
updateTriesDisplay = tries =>
  (document.querySelector(".lives span").innerHTML = 5 - tries);

lettersInTheRow = (word, inputs) => {
  let wrongLetters = inputs.filter(function(letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

showWord = (word, inputLetterWords) => {
  let display = word.map(function(letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

let maxAmount = 5;
guessLetter = () => {
  if (gameOver) {
    return;
  }
  const input = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input) || input === "") {
    return;
  }

  if (!word.includes(input)) {
    tries++;
    document.querySelector(".lives span").innerHTML = maxAmount - tries;
  }

  inputs.push(input);
  showWord(word, inputs);
  lettersInTheRow(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= maxAmount) {
    lostGame();
  }
};

beginTheGameWithPlayer = player1 => {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  showWord(word, inputs);
  lettersInTheRow(word, inputs);
};

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

module.exports = { lostGame, wordPicker, letterChecker };
