const GameBoard = (() => {
  let moves = ['', '', '', '', '', '', '', '', ''];

  const getMoves = () => moves;

  function resetBoard() {
    moves = ['', '', '', '', '', '', '', '', ''];
  }

  return { getMoves, resetBoard };
})();

export default GameBoard;