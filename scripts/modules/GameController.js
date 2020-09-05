
const GameController = (cells, moves) => {
  let turn = 0;
  const populateTable = () => {
    for (let index = 0; index < cells.length; index += 1) {
      cells[index].textContent = moves[index];
    }
  };

  const render = () => {
    populateTable();
  };

  function toggleTurn() {
    turn = (turn === 0) ? 1 : 0;
    return turn;
  }

  const validateMove = (cell) => (moves[cell.dataset.moveVal] === '');

  const makeMove = (cell, mark) => {
    if (validateMove(cell)) {
      moves[cell.dataset.moveVal] = mark;
      toggleTurn();
      render();
      return true;
    }
    return false;
  };

  const getTurn = () => turn;

  return {
    render, makeMove, toggleTurn, getTurn,
  };
};

export default GameController;