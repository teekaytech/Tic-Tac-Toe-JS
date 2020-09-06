const GameBoard = (() => {
  let moves = ["", "", "", "", "", "", "", "", ""];

  const getMoves = () => moves;

  function resetMoves() {
    moves = ["", "", "", "", "", "", "", "", ""];
  }

  const checkMoves = () => moves.includes("");

  return { getMoves, resetMoves, checkMoves };
})();

export default GameBoard;
