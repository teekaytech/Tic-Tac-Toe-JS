const Elements = (() => {
  const startButton = document.getElementById('start');
  const gameTable = document.querySelector('.board');
  const messageContainer = document.querySelector('.messages');

  return { startButton, gameTable, messageContainer };
})();

export default { Elements };