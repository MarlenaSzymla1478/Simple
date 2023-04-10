const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('ERROR');
  }
}
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 1) {
    return "rock"
  } else if (randomNumber === 2) {
    return "paper"
  } else if (randomNumber === 3) {
    return "scissors"
  }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}
const playGame = () => {
const userChoice = getUserChoice('scissors');
const computerChoice = getComputerChoice();
console.log('You chose: ' + userChoice);
console.log('Computer chose: '  + computerChoice);
console.log(determineWinner(userChoice, computerChoice))
}
playGame()
