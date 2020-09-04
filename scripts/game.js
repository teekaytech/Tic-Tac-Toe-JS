import Board from './board';
import Player from './player';


const firstPlayer = Player();
const gameBoard = Board();

console.log(firstPlayer.getName());
console.log(gameBoard.getMoves());
// secondPlayer = Player();