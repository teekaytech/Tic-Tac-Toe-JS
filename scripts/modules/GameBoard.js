const GameBoard = (() => {
  let moves = ['', '', '', '', '', '', '', '', ''];

  const getMoves = () => moves;

  function resetMoves() {
    moves = ['', '', '', '', '', '', '', '', ''];
  }

  return { getMoves, resetMoves };
})();

export default GameBoard;