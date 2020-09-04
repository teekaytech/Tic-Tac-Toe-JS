/* eslint-disable import/extensions */

import Elements from './dom.js';
import Board from './board.js';
import Player from './player.js';

const firstPlayer = Player();
const gameBoard = Board();

console.log(Elements);
console.log(firstPlayer.getName());
console.log(gameBoard.getMoves());
// secondPlayer = Player();