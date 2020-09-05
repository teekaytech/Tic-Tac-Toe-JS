/* eslint-disable import/extensions */

import Elements from './modules/dom.js';
import Player from './modules/player.js';
import GameBoard from './modules/GameBoard.js';
import GameController from './modules/GameController.js';

const moves = GameBoard.getMoves();
const cells = Elements.gameTable.getElementsByTagName('td');
const players = [];
const newGame = GameController(cells, moves);

function gamePlay(cell, currentPlayer, nextPlayer) {
  if (newGame.makeMove(cell, currentPlayer.getMark())) {
    Elements.setMessage(`Next player to make move: ${nextPlayer.getName()}`);
  } else {
    Elements.setMessage(`Invalid Move! Player to try again: ${currentPlayer.getName()}`);
  }
}

Elements.startButton.addEventListener('click', (event) => {
  const player1 = document.getElementById('player1').value || 'Taofeek';
  const player2 = document.getElementById('player2').value || 'Frank';

  players[0] = Player(player1, 'X');
  players[1] = Player(player2, 'O');

  event.preventDefault();
  newGame.render();

  Elements.gameTable.style.display = 'flex';
  Elements.setMessage(`First Player: ${players[0].getName()}`);
});

Elements.gameTable.addEventListener('click', (event) => {
  const cell = event.target.closest('td');
  const table = Elements.gameTable;

  Elements.styleCell(table, cell);

  if (newGame.getTurn() === 0) {
    gamePlay(cell, players[0], players[1]);
  } else {
    gamePlay(cell, players[1], players[0]);
  }
});
