function CPUPlay() {
    /* Randomly returns rock, paper, or scissors */
    let options = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

function playRound(playerSelection, CPUSelection) {
    /* 
    Rolls a round of the game.
    Compares player's selection with CPUs.
    */

    if (playerSelection === CPUSelection) {
        return ['tie', playerSelection, CPUSelection] ;
    } else if (
        (playerSelection === "rock" && CPUSelection === "scissors") ||
        (playerSelection === "paper" && CPUSelection === "rock") ||
        (playerSelection === "scissors" && CPUSelection === "paper")
    ) {
        return ["win", playerSelection, CPUSelection];
    } else {
        return ["lose", playerSelection, CPUSelection];
    }
}

function reduceLives(player) {
    let num = Number(player)
    return String(num-1)
}

function taunt(result, yourWpn, theirWpn) {
    switch(result) {
        case 'win': return `Yarrr! You ${result}! Your ${yourWpn} beats their ${theirWpn}.`;
        case 'lose': return `How unfortunate! You ${result}. Your ${yourWpn} have been beaten by their ${theirWpn}.`;
        case 'tie': return `You are still standing. Them too. Your ${yourWpn} still cannot beat their ${theirWpn}!`;
    }
}

const button = document.querySelectorAll('.btn');

function gameHandler() {
    const text = document.querySelector('.resultText');
    const pLife = document.querySelector('#playerLives');
    const cLife = document.querySelector('#CPULives');

    text.innerText = '';
    const [status, you, cpu] = playRound(this.value, CPUPlay());
    
    text.innerText = taunt(status, you, cpu)
    
    if (status === 'win') {
        cLife.innerText = reduceLives(cLife.innerText);
    } else if (status === 'lose') {
        pLife.innerText = reduceLives(pLife.innerText);
    }

    if (pLife.innerText === "0" || cLife.innerText === "0") button.forEach(btn => {
        btn.removeEventListener('click', gameHandler)
    })
}

button.forEach(btn => {
    btn.addEventListener('click', gameHandler)
})

// function game() {
//     let pcount = 0;
//     let cpucount = 0;
//     for (round = 0; round < 5; round++) {
//         let user = prompt("choose rock, paper, or scisors");
//         let result = playRound(user, CPUPlay());
//         if (result === 'win') {
//             pcount++;
//         } else if (result === "lose") {
//             cpucount++;
//         } else {
//             pcount++;
//             cpucount++;
//         }
//     }
//     return `player: ${pcount}, CPU: ${cpucount}`;
// }

