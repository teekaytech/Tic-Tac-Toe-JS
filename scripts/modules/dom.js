const Elements = (() => {
  const start = document.querySelector(".start-button");
  const restart = document.querySelector(".restart-button");
  const gameBoard = document.querySelector(".board");
  const cells = document.getElementsByTagName("td");
  const messages = document.querySelector(".messages");
  const scores = document.querySelector(".status");

  const styleCell = (cell) => {
    cell.classList.add("highlight");
  };

  const clearStyles = (cells) => {
    for (let index = 0; index < cells.length; index += 1) {
      cells[index].classList.remove("highlight");
    }
    messages.textContent = "";
  };

  function setMessage(message) {
    messages.textContent = message;
  }

  function setScore(message) {
    scores.innerHTML = "";
    scores.innerHTML = message;
  }

  return {
    restart,
    start,
    gameBoard,
    styleCell,
    setMessage,
    clearStyles,
    cells,
    setScore,
  };
})();

export default Elements;
