// Initialize ALL global variables here
//alle functies in arrow functions noteren

// This code here selects a random word
const wordList = [
	'vis',
	'toeter',
	'developer',
	'telefoon',
	'moeder',
	'snoer',
	'geeuw'
];
setWordToBeGuessed = value => {
	//wordList?
	let index = Math.floor(Math.random() * value.length); //wordList?
	const x = value;
	return x[index];
};

splitLetterWordToBeGuessed = letters => {
	let loseLetters = setWordToBeGuessed(wordList).split('');
	document.querySelector('.lose p span').innerHTML = `"${loseLetters.join(
		''
	)}"`;
};

let inputs; //nieuwe naam  //letterGuessedByUser
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

clean = () => (document.querySelector('input').value = '');

let gameOver;
winTheGame = () => (document.querySelector('.win').style.display = 'block');
//gameOver = true;

lose4 = () => (document.querySelector('.lose').style.display = 'block');
//gameOver = true;

spanTheWord1 = word =>
	(document.querySelector('.lose p span').innerHTML = `"${word.join('')}"`);

let tries = 0;
updateTriesDisplay = tries =>
	(document.querySelector('.lives span').innerHTML = 5 - tries);

lettersInTheRow = (word, inputs) => {
	let wrongLetters = inputs.filter(function(letter) {
		// If the letter is in the word return.... false/true (we want to remove that then)
		return !word.includes(letter);
	});
	document.querySelector('.guessed_letters').innerHTML = wrongLetters.join(' ');
};

showWord = (word, inputLetterWords) => {
	let display = word.map(function(letter) {
		if (inputLetterWords.includes(letter)) {
			return letter;
		} else {
			return '_';
		}
	});
	document.querySelector('.the_word').innerHTML = display.join(' ');
};

let maxAmount = 5;
guessLetter = () => {
	if (gameOver) {
		return;
	}
	const input1 = document.querySelector('input').value;
	document.querySelector('input').value = '';

	if (inputs.includes(input1) || input1 === '') {
		return;
	}

	if (!word.includes(input1)) {
		tries++;
		document.querySelector('.lives span').innerHTML = maxAmount - tries;
	}

	inputs.push(input1);
	showWord(word, inputs);
	lettersInTheRow(word, inputs);

	if (wordGuessed(word, inputs)) {
		winTheGame();
	} else if (tries >= maxAmount) {
		lose4();
	}
};

//schone functie schrijven. alleen aanroepen niet uitschrijven in functie.
startGame = () => {
	gameOver = false;
	document.querySelector('.win').style.display = 'none';
	document.querySelector('.lose').style.display = 'none';
	document.querySelector('input').value = '';
	splitLetterWordToBeGuessed();
	console.log(setWordToBeGuessed(wordList));
	//ontvang 1 woord van de woordlist -random

	tries = 0;
	document.querySelector('.lives span').innerHTML = 5 - 0;

	inputs = [];
	showWord(word, inputs);
	lettersInTheRow(word, inputs);
};

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('.guess').addEventListener('click', guessLetter);
	document.querySelector('.restart').addEventListener('click', startGame);
	startGame();
	//console.log toevoegen
});
