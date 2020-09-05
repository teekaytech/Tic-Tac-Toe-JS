/* eslint-disable import/extensions */

import Elements from './modules/dom.js';
import GameBoard from './modules/GameBoard.js';
import GameController from './modules/GameController.js';

// const firstPlayer = Player();
const moves = GameBoard.getMoves();
const cells = Elements.gameTable.getElementsByTagName('td');
const newGame = GameController(moves);


Elements.startButton.addEventListener('click', (event) => {
  event.preventDefault();
  newGame.render(cells);
  Elements.gameTable.style.display = 'flex';
});
