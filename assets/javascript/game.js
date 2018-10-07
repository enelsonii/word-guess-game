
var word;
//user guess
var guess;
//correctly guessed letters	
var letters = [];
//incorrectly guessed letters	
var wrongLetters = [];
//counts correct letters
var counter;
var losses = 0;
var wins = 0;

// display wins and loss
document.getElementById("losses").innerHTML = losses;
document.getElementById("wins").innerHTML = wins;
// secret words
var wordList = [
  "mario",
  "luigi",
  "mart",
  "ike",
  "fox",
  "falco",
  "kirby",
  "pikachu",
  "sonic",
  "sonic"
];


//randomly chooses a word from the array and replaces letters with underscores
function start() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  counter = 10;
  document.getElementById("counter").innerHTML = counter;
  for (i = 0; i < word.length; i++) {
    letters[i] = "__";
  }

  document.getElementById("answer").innerHTML = letters.join(" ");
  console.log(word);

}


//checks if letter is in the word
function checkLetter() {
  document.onkeyup = function (event) {
    guess = event.key.toLowerCase();
    var found = false;
    for (i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        letters[i] = guess;
        document.getElementById("answer").innerHTML = letters.join(" ");
        found = true;
      }
    }
    //wrong letters put in wrongLetters array and are shown on screen
    if (found) return;
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
      //every wrong guess -1 from the counter
      counter--;
      console.log(counter);
      document.getElementById("counter").innerHTML = counter;
      
      //+1 to the wins if player guesses correrct
      if (counter > 0 && letters.join(" ") == word) {
        document.getElementById("wins").innerHTML = wins + 1;
        console.log(wins);
        confirm("YOU WIN! Would You Like To Play Again?");
          wins++;
          counter = 10;
          letters= [];
          wrongLetters = [];
          start();
      };

      //when counter reaches 0 it's Game Over
      if (counter === 0) {
        document.getElementById("losses").innerHTML = losses + 1;
        console.log(losses);
        confirm("YOU LOSE! Would You Like to Playe again Play again?"); {
          losses++;
          counter = 10;
          letters = [];
          wrongLetters = [];
          start();
        }

      }
    }
  }
}


start();
checkLetter();
