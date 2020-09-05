const Elements = (() => {
  const startButton = document.querySelector('.start-button');
  const gameTable = document.querySelector('.board');
  const messageContainer = document.querySelector('.messages');

  return {
    startButton, gameTable, messageContainer,
  };
})();

export default Elements;