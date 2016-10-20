//* `word.js` should contain all of the methods which will check the letters guessed versus the random word selected.

//pass the value of word from game.js
var word = require('./game.js');
// console.log(word);

//set the array for the PCselectedLetter
var PCselectedLetter = [];
var maskLetter=[];


for (i=0; i<word.length; i++){
	//take the selected random word and put it into each letter in the array PCselectedLetter
	PCselectedLetter[i]=word.charAt(i);
	//create "_" to mask the correct letters for the PCselectedLetter
	maskLetter[i]='_';
}


console.log(PCselectedLetter);
console.log(maskLetter);