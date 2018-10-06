//create array of words
var words = [
  "mario",
  "link",
  "samus",
  "ness",
  "snake",
  "fox",
  "pit",
  "falco",
  "pikachu"
];
//   choose random word
var word = words[Math.floor(Math.random() * words.length)];


//set up answer array 
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  
}
console.log(answerArray);