const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "lizard" || userInput === "spock") {
        return userInput;
    } else {
        console.log("ERROR")
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 5)
    switch (randomNumber) {
        case 0:
        return "rock"
        break;
        case 1:
        return "paper"
        break;
        case 2:
        return "scissors"
        break;
        case 3:
        return "lizard"
        break;
        case 4:
        return "spock"
        break
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Tie"
    }
    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "rock") {
        if (computerChoice === "lizard") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "lizard") {
        if (computerChoice === "spock") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "spock") {
        if (computerChoice === "scissors") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "lizard") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "lizard") {
        if (computerChoice === "paper") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "spock") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "spock") {
        if (computerChoice === "rock") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You Win!"
        } else {
            return "The computer Won!"
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice("spock")
    const computerChoice = getComputerChoice()
    console.log("You chose: " + userChoice)
    console.log("Computer chose: " + computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()