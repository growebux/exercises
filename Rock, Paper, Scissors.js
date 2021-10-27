const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Please, chose between rock, paper, or scissors.";
  }
};

const getComputerChoice = () => {
  let math = Math.floor(Math.random() * 3);

  switch (math) {
    case 0:
      return "rock";
    case 1:
      return "paper";ß
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
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
    if (useChoice === "bomb") {
      return "Congratulation you won the opportunity to follow the Empire D.C at https://www.facebook.com/empiredcofficial";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("The user choose: " + userChoice);
  console.log("The computer choose: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
