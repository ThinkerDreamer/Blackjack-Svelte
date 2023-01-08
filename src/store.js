import { writable } from 'svelte/store'

export let gameRunning = writable(false);
export let bettingTime = writable(false);
export let playerMoney = writable(200);
export let currentBet = writable(25);