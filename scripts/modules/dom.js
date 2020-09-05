const Elements = (() => {
  const startButton = document.querySelector('.start-button');
  const gameTable = document.querySelector('.board');
  const messageContainer = document.querySelector('.messages');

  const styleCell = (table, cell) => {
    if (!cell || !table.contains(cell)) return;

    cell.classList.add('highlight');
  };

  function setMessage(message) {
    messageContainer.textContent = message;
  }

  return {
    startButton, gameTable, messageContainer, styleCell, setMessage,
  };
})();

export default Elements;