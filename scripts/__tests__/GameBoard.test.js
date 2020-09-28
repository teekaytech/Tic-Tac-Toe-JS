import GameBoard from '../modules/GameBoard';

const {
  getMoves, checkMoves, resetMoves, winningMoves,
} = GameBoard;
test('get moves function', () => {
  expect(getMoves()).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('check moves function', () => {
  expect(checkMoves()).toBeTruthy();
});

test('reset moves function', () => {
  expect(resetMoves()).toBeUndefined();
  expect(getMoves()).toEqual(['', '', '', '', '', '', '', '', '']);
  expect(typeof getMoves()).toBe('object');
});

test('winning moves function', () => {
  expect(winningMoves().length).toBe(8);
  expect(typeof winningMoves()).toBe('object');
});