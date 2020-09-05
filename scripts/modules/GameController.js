
const GameController = (cells, moves) => {
  const populateTable = () => {
    for (let index = 0; index < cells.length; index += 1) {
      cells[index].textContent = moves[index];
    }
  };

  const render = () => {
    populateTable();
  };

  const validateMove = (cell) => (moves[cell.dataset.moveVal] === '');

  const makeMove = (cell, mark) => {
    console.log(validateMove(cell));
    if (validateMove(cell)) {
      moves[cell.dataset.moveVal] = mark;
      render();
      return true;
    }
    return false;
  };

  return { render, makeMove };
};

export default GameController;