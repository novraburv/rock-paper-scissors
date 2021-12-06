function computerPlay() {
    /* Randomly returns Rock, Paper, or Scissors */
    let options = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

function playRound(playerSelection, computerSelection) {
    /* 
    Rolls a round of the game.
    Compares player's selection with computers.
    */
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

// function game() {
//     let pcount = 0;
//     let cpucount = 0;
//     for (round = 0; round < 5; round++) {
//         let user = prompt("choose rock, paper, or scisors");
//         let result = playRound(user, computerPlay());
//         if (result === 'win') {
//             pcount++;
//         } else if (result === "lose") {
//             cpucount++;
//         } else {
//             pcount++;
//             cpucount++;
//         }
//     }
//     return `player: ${pcount}, computer: ${cpucount}`;
// }

