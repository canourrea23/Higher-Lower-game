function getGuessInput() {
  let guessString = document.getElementById("guess-input").value;
  let guessNumber = Number(guessString);
  return guessNumber;
}
function setGuessInput(value) {
  document.getElementById("guess-input").value = value;
}
function hideAllMessages() {
  let messages = document.querySelectorAll("#message-container > *");
  for (let i = 0; i < messages.length; i++) {
    messages[i].classList.add("hidden");
  }
}
function showMessage(id) {
  hideAllMessages();
  let message = document.getElementById(id);
  if (message != null) {
    message.classList.remove("hidden");
  } else {
    console.log(`${id} does not exist.`);
  }
}
function showRemainingGuesses(value) {
  document.getElementById("remining-guesses").innerHTML = value;
}
let magicNumber = -1;
let remainingGuesses = -1; // will default when game is loaded

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
function setupNewGame() {
  magicNumber = getRandomIntInclusive(1, 100);
  console.log(magicNumber, 'hello');

  remainingGuesses = 5;

  showRemainingGuesses(remainingGuesses);

  hideAllMessages();
}
function handleGuess() {
  if (remainingGuesses == -1) {
    setupNewGame();
  }
  if (remainingGuesses == 0) {
    return;
  }

  let guess = getGuessInput();
  
  if (guess == magicNumber) {
    document.getElementById('win-message').innerHTML = "You win! the number was " +  magicNumber + "!"
    showMessage("win-message");
    remainingGuesses = 0;
    return;
  } 

  if (guess > magicNumber) {
    showMessage("lower-message");
  } else {
    showMessage("higher-message");
  }

  remainingGuesses--;
  showRemainingGuesses(remainingGuesses);

  if (remainingGuesses == 0) {
    document.getElementById('lose-message').innerHTML = "You lose... the number was " +  magicNumber + ".";
    showMessage("lose-message");
  }
}

function handlePlayAgain() {
  setupNewGame();
  setGuessInput("");
}
