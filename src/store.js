import { writable, derived } from 'svelte/store'

export let gameRunning = writable(false);
export let bettingTime = writable(false);
export let playerMoney = writable(200);
export let currentBet = writable(25);
export let playerCards = writable([]);
export let dealerCards = writable([]);
export let currentMsg = writable("");
export let playersTurn = writable(false);
export let cardLastAdded = writable({});
export let showCardView = writable(false);

export const playerSum = derived(
    playerCards,
    $playerCards => {
        let numOfAces = 0;
        for (let card of $playerCards) {
            if (card.name === "A") {
                numOfAces += 1;
            }
        }
        let initialSum = $playerCards.reduce((acc, obj) => acc + obj.value, 0)
        while (initialSum > 21 && numOfAces > 0) {
            initialSum -= 10;
            numOfAces -= 1;
        }
        return initialSum;
    }
);

export const dealerSum = derived(
    dealerCards,
    $dealerCards => {
        let aceFlag = false;
        for (let card of $dealerCards) {
            if (card.name === "A") {
                aceFlag = true;
            }
        }
        let initialSum = $dealerCards.reduce((acc, obj) => acc + obj.value, 0)
        if (initialSum > 21 && aceFlag) {
            initialSum -= 10;
        }
        return initialSum;
    }
);