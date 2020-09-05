const GameBoard = (() => {
  let moves = ['X', '0', 'X', '0', 'X', '0', 'X', '0', 'X'];

  const getMoves = () => moves;

  // function showBoard() {
  //   gameboard.style.display = 'block';
  // }

  function resetBoard() {
    moves = ['', '', '', '', '', '', '', '', ''];
  }

  return { getMoves, resetBoard };
})();

export default GameBoard;