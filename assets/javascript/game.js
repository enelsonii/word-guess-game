// creating varibles
var words = [
  "mario",
  "link",
  "samus",
  "pikachu",
  "kirby",
  "fox",
  "lucas",
  "sonic",
  "ike"
];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];
var word;
var winCounter = 0;

// function 
// whenever start game is called, a new random word will be selected
function startGame() {
  // picks a random word
  word = words[Math.floor(Math.random() * words.length)];
  console.log("random word = " + word);
  for (var i = 0; i < word.length; i++) {
    underScores.push("_");
  } 
  // displaying underscores
  document.getElementById("word-blanks").textContent = underScores.join(" ");
  //  reset
  wrongLetter = [];
  guessesLeft = 10;

  //HTML
  document.getElementById("guess-left").textContent = guessesLeft;

  // 
// function winLose() {
    if (winCounter === word.length) {
      alert("You win!");
      
    }
    else if (guessesLeft === 0) {
      alert("You lose!");
      
    }
    // Player Guesses
    document.onkeyup = function (event) {
      userGuesses = event.key;
      // check if the letter exist inside of the word 
      if (word.indexOf(userGuesses) > -1) {
        for (var i = 0; i < word.length; i++) {
          if (word[i] === userGuesses) {
            underScores[i] = userGuesses;
            console.log(underScores);
            winCounter++;
            winLose();
          }
        }
      }
      else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
        winLose();
      }
    }
  }


// 