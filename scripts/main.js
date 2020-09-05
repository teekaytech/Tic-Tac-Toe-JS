/* eslint-disable import/extensions */

import Elements from './modules/dom.js';
import Player from './modules/player.js';
import GameBoard from './modules/GameBoard.js';
import GameController from './modules/GameController.js';

const moves = GameBoard.getMoves();
const players = [];
const { cells, gameBoard } = Elements;
const newGame = GameController(cells, moves);


function gamePlay(cell, currentPlayer, nextPlayer) {
  if (newGame.makeMove(cell, currentPlayer.getMark())) {
    Elements.setMessage(`Next player to make move: ${nextPlayer.getName()}`);
  } else {
    Elements.setMessage(`Invalid Move! Player to try again: ${currentPlayer.getName()}`);
  }
}

Elements.start.addEventListener('click', (event) => {
  const player1 = document.getElementById('player1').value || 'Taofeek';
  const player2 = document.getElementById('player2').value || 'Frank';

  players[0] = Player(player1, 'X');
  players[1] = Player(player2, 'O');

  event.preventDefault();
  newGame.render();

  gameBoard.style.display = 'flex';
  Elements.setMessage(`First Player: ${players[0].getName()}`);
});

gameBoard.addEventListener('click', (event) => {
  const cell = event.target.closest('td');

  Elements.styleCell(cell);

  if (newGame.getTurn() === 0) {
    gamePlay(cell, players[0], players[1]);
  } else {
    gamePlay(cell, players[1], players[0]);
  }
});

// Elements.restartButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   Elements.clearStyles(cells);
// });