# word-guess-game

The main objactive for thi project is to make a fully functional hangman game. 

    * By giving the player that ability to choose a random word 
        * when page loads the game should be active. The player can select any letter in the keyboard to submit an answer. 
    *track the players progress
        * Underneath player(s) guesses will show the wins and losses stats, whenever the player loses will display +1 is the loss section or wining a game will display +1 in wins section.
    *show player progress
        * all of the player guesses will shown on he screen to not allow player to guess the same letter twice.
    *check player guesses 
        * the game will check each space to see if player input mataches the character.
            * if it does, the correct letter or letter that user guessed will be shown in it order of the seceret word.
    *player has only 10 chances to guesscorrect letter
        * When a player guesses incorrecly they would be a mark down on lives by -1. 
            * Each point deduction will be display on screen 
            * once counter goes to 0, game over 
