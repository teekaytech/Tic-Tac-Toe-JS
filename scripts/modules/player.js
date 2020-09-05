const Player = (name, mark = '') => {
  const getName = () => name;
  const getMark = () => mark;
  const gamesWon = () => 0;
  const gamesPlayed = () => 0;

  return {
    getName, getMark, gamesWon, gamesPlayed,
  };
};

export default Player;