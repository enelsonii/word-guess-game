// create an array of words
var word = [
  "link", 
  "sonic", 
  "kratos", 
  "mario", 
  "samus", 
  "master chief", 
  "soild snake",
  "donkey kong",
]
// choose random word
var randomWord = Math.floor(Math.random() * word.length);
var chosenWord = word[randomWord]; 
var underScores = [];
console.log(chosenWord);
// create underscores based on word
var generateUnderscore = () => {
  for (var i = 0; i < chosenWord.length; i++){
     underScores.push("_");
  }
  return underScores;
}

console.log(generateUnderscore());
//  get users guess
document.addEventListener("keypress", (event) => {
  var keyword = String.fromCharCode(keyCode);
  console.log(keyword)
});
//  check if guess is right 
// if right pish to right array
// if wrong push to wrong array
 