
const GameController = (moves) => {
  // const validateMove = (player, mark) => {

  // };

  const populateTable = (cells, moves) => {
    for (let index = 0; index < cells.length; index += 1) {
      cells[index].textContent = moves[index];
    }
  };

  const render = (cells) => {
    populateTable(cells, moves);
  };

  // const makeMove = () => {

  // };

  return { render };
};

export default GameController;