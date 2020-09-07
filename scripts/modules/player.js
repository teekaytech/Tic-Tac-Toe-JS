const Player = (name, mark = "") => {
  let wins = 0;
  const getName = () => name;
  const getMark = () => mark;
  const addWins = () => (wins += 1);
  const getWins = () => wins;

  return {
    getName,
    getMark,
    addWins,
    getWins,
  };
};

export default Player;
