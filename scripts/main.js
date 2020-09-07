/* eslint-disable import/extensions */

import Elements from "./modules/dom.js";
import Player from "./modules/player.js";
import GameBoard from "./modules/GameBoard.js";
import GameController from "./modules/GameController.js";

const players = [];
const board = GameBoard;
const { cells, gameBoard, restart, start } = Elements;
let gameOn = true;
let victor = false;

function gamePlay(game, cell, currentPlayer, nextPlayer) {
  if (game.makeMove(cell, currentPlayer.getMark()) === true) {
    Elements.setMessage(`Next player to make move: ${nextPlayer.getName()}`);
  } else {
    Elements.setMessage(`Invalid Move! Try again ${currentPlayer.getName()}`);
  }
}

function executeMove(game) {
  gameBoard.addEventListener("click", (event) => {
    const cell = event.target.closest("td");
    if (!cell || !gameBoard.contains(cell)) return;

    cell.addEventListener("mousemove", () => {
      const winner =
        game.checkWinMove(board.winningMoves(), players[0].getMark()) ||
        game.checkWinMove(board.winningMoves(), players[1].getMark());
      if (winner) {
        victor = players[0].getMark() === winner ? players[0] : players[1];
        Elements.setMessage(`${victor.getName()} is the Winner, CONGRATS!`);
        gameOn = false;
      } else if (!board.checkMoves()) {
        Elements.setMessage(`Game Ended In a Draw!`);
        gameOn = false;
      }
    });

    if (gameOn) {
      Elements.styleCell(cell);
      if (game.getTurn() === 0) {
        gamePlay(game, cell, players[0], players[1]);
      } else {
        gamePlay(game, cell, players[1], players[0]);
      }
    }
  });
}

function playNow(event) {
  event.preventDefault();
  const newGame = GameController(cells, board.getMoves());
  newGame.render();
  executeMove(newGame);
}

start.addEventListener("click", (event) => {
  const player1 = document.getElementById("player1").value || "Taofeek";
  const player2 = document.getElementById("player2").value || "Frank";

  players[0] = Player(player1, "X");
  players[1] = Player(player2, "O");

  Elements.toggleComponent();
  Elements.setMessage(`First Player: ${players[0].getName()}`);
  playNow(event);
});

restart.addEventListener("click", (event) => {
  if (victor) {
    victor.addWins();
    victor = false;
  }

  Elements.clearStyles(cells);
  Elements.setScore(players);
  board.resetMoves();
  gameOn = true;

  playNow(event);
});
