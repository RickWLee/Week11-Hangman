//* `word.js` should contain all of the methods which will check the letters guessed versus the random word selected.

//pass the value of word from game.js
var word = require('./game.js');
// console.log(word);

//set the array for the PCselectedLetter
var PCselectedLetter = [];


for (i=0; i<word.length; i++){
	PCselectedLetter[i]=word.charAt(i);
}


console.log(PCselectedLetter);