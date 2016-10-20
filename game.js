  // * Your `game.js` file will randomly select a word for the player.

//define var for all the words to be randomly select by the computer
var choices=['i','just','cannot','do','the','homework'];

//random select the word from the Math.floor function
var word = choices[Math.floor(choices.length * Math.random())];
// console.log(word);

//make the word vaule available to pass on.
module.exports=word;	