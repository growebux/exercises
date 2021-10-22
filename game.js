const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Index not found");
    }
  };
  
  function getComputerChoice() {
    let math = Math.floor(Math.random() * 3);
  
    switch (math) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "The game is tied";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Won";
      } else {
        return "You won!";
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
    }
  }
  console.log(getComputerChoice())
  console.log(determineWinner("paper", "scissors")); // prints something like 'The computer won!'
  