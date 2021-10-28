
const availableChoice= {
    0: "rock",
    1: "paper",
    2: "scissors"
}

const possibilities = [
    { combination: [0, 1], winner: 1 },
    { combination: [1, 2], winner: 2 },
    { combination: [2, 0], winner: 0},
]


const getComputerChoice = () => Math.floor(Math.random() * 3);

const displayChoice = (choices) => {
    return availableChoice[choices]
}


const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return "The game is Tied"
    } for (let rules of possibilities){
        const computer = rules.combination.includes(computerChoice)
        const user = rules.combination.includes(userChoice)

        if(computer && user){
            return displayChoice(rules.winner)
        }

    }
}

const human = 2;
const computer = getComputerChoice();


console.log(`Computer ${displayChoice(computer)}, User ${displayChoice(human)}, Winner ${determineWinner(human, computer)}`)























