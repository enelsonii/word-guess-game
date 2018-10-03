(function () {
  "use strict";
    var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;
    function setup() {
      // create an array of words
      words = [
        "link", 
        "sonic", 
        "kirby", 
        "mario", 
        "samus", 
        "ness", 
        "pikachu",
        "yoshi",
      ]
      // all avaible letters 
      availableLetters = "abcdefghijklmnopqrstuvwxyz";
      // player lives 
      lives = 10;
      // pop up messeges on screen
      messages = {
        win: "You win!",
        lose: "Game over!",
        guessed: "You fool! You already used that letter. Hahaha I stomped you.",
        validLetter: "Enter a letter A-Z"
      };

      lettersGuessed = lettersMatched = " ";
      numLettersMatched = 0;

      // choose a word
      currentWord = words[Math.floor(Math.random() * words.length)];
      
      // create var for later
      output = document.getElementsByID("output");
      man = document.getElementById("man");
      guessInput = document.getElementById("letter");
      
      //  dislpay current lives 
      man.innerHTML = "You have" + lives + " lives remaining";
      output.innerHTML = " ";

      document.getElementById ()
    }
})









  
}


// choose random word
var word = words[Math.floor(Math.random() * words.length)];
// set up answer array
var answerArray = [];
for(var i = 0; i < word.length; i++) {
  answerArray[i] = "_"
}

var remainingLetters = word.length;

// the game loop 
while(remainingLetters > 0) {
  // show the player progress
  document.write(answerArray.join(" "));

  // get guess from the player
  var guess = document.write("Guess a letter, or click to quit game.");
  if (guess === null) {
    // end the game loop
    break;
  }
  // check for these conditions, ensuring that guess is exactly one letter.
  else if (guess.length !== 1) {
    document.write("please enter single letter.");
  }
  else {
    // update the game stats with player guesses
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters
    }
  }
}
}


