const GameBoard = (() => {
  let moves = ["", "", "", "", "", "", "", "", ""];

  const getMoves = () => moves;

  function resetMoves() {
    moves = ["", "", "", "", "", "", "", "", ""];
  }

  const checkMoves = () => moves.includes("");

  const winningMoves = () => {
    return [
      moves.slice(0, 3),
      moves.slice(3, 6),
      moves.slice(6, 9),
      [moves[0], moves[3], moves[6]],
      [moves[1], moves[4], moves[7]],
      [moves[2], moves[5], moves[8]],
      [moves[0], moves[4], moves[8]],
      [moves[2], moves[4], moves[6]],
    ];
  };

  return { getMoves, resetMoves, checkMoves, winningMoves };
})();

export default GameBoard;
