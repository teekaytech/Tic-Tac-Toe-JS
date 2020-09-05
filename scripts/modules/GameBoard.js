const GameBoard = (() => {
  const moves = ['', '', '', '', '', '', '', '', ''];

  const getMoves = () => moves;

  return { getMoves };
})();

export default GameBoard;