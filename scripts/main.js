/* eslint-disable import/extensions */

import Elements from './modules/dom.js';
import Player from './modules/player.js';
import GameBoard from './modules/GameBoard.js';
import GameController from './modules/GameController.js';

const players = [];
const board = GameBoard;
const {
  cells, gameBoard, restart, start,
} = Elements;

function gamePlay(game, cell, currentPlayer, nextPlayer) {
  if (game.makeMove(cell, currentPlayer.getMark())) {
    Elements.setMessage(`Next player to make move: ${nextPlayer.getName()}`);
  } else {
    Elements.setMessage(`Invalid Move! Player to try again: ${currentPlayer.getName()}`);
  }
}

function executeMove(game) {
  gameBoard.addEventListener('click', (event) => {
    const cell = event.target.closest('td');

    Elements.styleCell(cell);

    if (game.getTurn() === 0) {
      gamePlay(game, cell, players[0], players[1]);
    } else {
      gamePlay(game, cell, players[1], players[0]);
    }
  });
}

start.addEventListener('click', (event) => {
  const newGame = GameController(cells, board.getMoves());
  const player1 = document.getElementById('player1').value || 'Taofeek';
  const player2 = document.getElementById('player2').value || 'Frank';

  players[0] = Player(player1, 'X');
  players[1] = Player(player2, 'O');

  gameBoard.style.display = 'flex';
  Elements.setMessage(`First Player: ${players[0].getName()}`);
  event.preventDefault();
  newGame.render();
  executeMove(newGame);
});

restart.addEventListener('click', (event) => {
  event.preventDefault();
  Elements.clearStyles(cells);
  board.resetMoves();

  const newGame = GameController(cells, board.getMoves());
  newGame.render();
  executeMove(newGame);
});