import { gameRunning, playerCards, dealerCards, currentMsg, currentBet, playerMoney, playersTurn } from "./store";

let pMoney;
playerMoney.subscribe(money => {
    pMoney = money;
});

let cBet;
currentBet.subscribe(bet => {
    cBet = bet;
})

export function randomCard() {
    let card = {};
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    switch (randomNumber) {
        case 1:
            card.value = 11;
            card.name = "A";
            break;
        case 10:
            card.name = "10";
            break;
        case 11:
            card.name = "J";
            break;
        case 12:
            card.name = "Q";
            break;
        case 13:
            card.name = "K";
            break;
    }
    if (randomNumber >= 10 || randomNumber === 1) {
        card.value = 10;
    } else {
        card.value = randomNumber;
        card.name = randomNumber;
    }
    return card;
}

export function giveCardPlayer() {
    let card = randomCard();
    // add the new card to the rest of the cards in the player's hand
    playerCards.update((currentCards) => {
        return [...currentCards, card];
    });
}

export function giveCardDealer() {
    let card = randomCard();
    dealerCards.update((currentCards) => {
        return [...currentCards, card];
    })
}

export function handleReset(message) {
    currentMsg.set(message);
    gameRunning.set(false);
    playersTurn.set(false);
}

export function handlePlayerWins() {
    playerMoney.update((currentMoney) => {
        return currentMoney + (cBet * 2);
    })
    gameRunning.set(false);
    playersTurn.set(false);
}
export function handleDealerWins() {
    gameRunning.set(false);
    playersTurn.set(false);
}
export function handleDraw() {
    playerMoney.update((currentMoney) => {
        return currentMoney + cBet;
    });
    gameRunning.set(false);
    playersTurn.set(false);
}
