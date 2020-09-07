const Player = (name, mark = "") => {
  let wins = 0;
  const getName = () => name;
  const getMark = () => mark;
  const getWins = () => wins;

  const addWins = () => {
    return (wins += 1);
  };

  return {
    getName,
    getMark,
    addWins,
    getWins,
  };
};

export default Player;
