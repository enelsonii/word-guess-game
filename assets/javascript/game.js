window.onload = function () {

  // Use this array to dynamically create buttons on the screen.
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS

  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    ;
    //Create a variable named "letterBtn" equal to $("<button>");
    var letterBtn = $("<button>");

    //Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    $(letterBtn).addClass("letter-button letter letter-button-color");
    // Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
    $(letterBtn).attr("data-letter", letters[i])

    //Then give each "letterBtn" a text equal to "letters[i]".
    $(letterBtn).text(letters[i])

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#buttons").append(letterBtn);
  }
  // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
  // 7. Create an "on-click" event attached to the ".letter-button" class.
  $(".letter-button").on("click", function () {
    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
    var guessedLetter = $("<div>")
    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
    guessedLetter.addClass("letter guessedLetter-color").text($(this).attr("data-letter"));

    $("#display").append(guessedLetter);
    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
  });
  // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
  // 12. Create an "on-click" event attached to the "#clear" button id.
  $("#reset").on("click", function () {
    // Inside the on-click event...

    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
    $("#display").empty();
  });

  var word;              // Selected word
  var guess;             // Geuss
  var geusses = [];      // Stored geusses
  var lives;             // Lives
  var counter;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Elements
  var showLives = document.getElementById("userlives");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
      confirm.log(list.innerHTML)
    }
  }


  // Create geusses list
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;

      } else {

      }
    }
  }


  // Play
  play = function () {
    words = [
      "mario",
      "link",
      "samus",
      "ness",
      "snake",
      "fox",
      "pit",
    ];

    chosenWord = words[Math.floor(Math.random() * words.length)];
    word = chosenWord[Math.floor(Math.random() * chosenWord.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
  }

  play();

};

// Reset

document.getElementById('reset').onclick = function () {
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  showClue.innerHTML = "";
  context.clearRect(0, 0, 400, 400);
  play();
}

