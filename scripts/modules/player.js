const Player = (name, mark = "") => {
  const getName = () => name;
  const getMark = () => mark;

  return {
    getName,
    getMark,
  };
};

export default Player;
