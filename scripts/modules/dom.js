const Elements = (() => {
  const start = document.querySelector(".start-button");
  const restart = document.querySelector(".restart-button");
  const gameBoard = document.querySelector(".board");
  const cells = document.getElementsByTagName("td");
  const messages = document.querySelector(".messages");
  const playerForm = document.querySelector(".p-name");
  const scoreBoard = document.querySelector(".scoreboard");

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

  function setScore(players) {
    scoreBoard.textContent = `Score Board:
    ${players[0].getName()} : ${players[0].getWins()} |
    ${players[1].getName()} : ${players[1].getWins()} `;
  }

  const toggleComponent = () => {
    gameBoard.style.display = "flex";
    playerForm.style.display = "none";
  };

  return {
    restart,
    start,
    gameBoard,
    styleCell,
    setMessage,
    clearStyles,
    cells,
    toggleComponent,
    setScore,
  };
})();

export default Elements;
