const Elements = (() => {
  const start = document.querySelector('.start-button');
  const restart = document.querySelector('.restart-button');
  const gameBoard = document.querySelector('.board');
  const cells = document.getElementsByTagName('td');
  const messages = document.querySelector('.messages');
  const status = document.querySelector('.status');

  const styleCell = (cell) => {
    if (!cell || !gameBoard.contains(cell)) return;

    cell.classList.add('highlight');
  };

  const clearStyles = (cells) => {
    for (let index = 0; index < cells.length; index += 1) {
      cells[index].classList.remove('highlight');
    }
    messages.textContent = '';
    status.textContent = '';
  };

  function setMessage(message) {
    messages.textContent = message;
  }

  return {
    restart, start, gameBoard, messages, styleCell, setMessage, clearStyles, status, cells,
  };
})();

export default Elements;