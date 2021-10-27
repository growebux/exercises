const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Please, choose between rock, paper, or scissors."
  }  
};

const getComputerChoice = () => {
  let math = Math.floor(Math.random() * 3)

  switch (math) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb') {
    return "The user won!"
  }
  
  if (userChoice === computerChoice) {
    return "The game is tied";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won";
    } else {
      return "You won!";
    }
  }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer won!";
      } else {
        return "You won!";
      }
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return "The computer won!";
        } else {
          return "You won!";
        }
      }
      
    }
  };

  const playGame = () =>{
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log('The user choose: ' + userChoice)
    console.log('The computer choose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };

 playGame();









