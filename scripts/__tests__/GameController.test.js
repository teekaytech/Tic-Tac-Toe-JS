import GameController from '../modules/GameController';


const moves = ['', '', '', '', '', '', '', '', ''];
const cells = '';
const cell = document.createElement('td');
cell.setAttribute('data-move-val', '0');
const playerMark = 'X';
const Game = GameController(cells, moves);

test('should get current player turn ', () => {
  expect(Game.getTurn()).toBe(0);
});

test('should toggle turn', () => {
  expect(Game.toggleTurn()).toBe(1);
  expect(Game.toggleTurn()).toBe(0);
});

test('should check if a move is a winning move', () => {
  const wMoves = [
    moves.slice(0, 3),
    moves.slice(3, 6),
    moves.slice(6, 9),
    [moves[0], moves[3], moves[6]],
    [moves[1], moves[4], moves[7]],
    [moves[2], moves[5], moves[8]],
    [moves[0], moves[4], moves[8]],
    [moves[2], moves[4], moves[6]],
  ];
  expect(Game.checkWinMove(wMoves, playerMark)).toBeFalsy();
  wMoves[0][0] = 'X';
  wMoves[0][1] = 'X';
  wMoves[0][2] = 'X';
  expect(Game.checkWinMove(wMoves, playerMark)).toBeTruthy();
});

test('should make a player move', () => {
  expect(Game.makeMove(cell, playerMark)).toBeTruthy();
  expect(Game.makeMove(cell, playerMark)).toBeFalsy();
});

test('should check the return of render function', () => {
  expect(Game.render()).toBeUndefined();
});
