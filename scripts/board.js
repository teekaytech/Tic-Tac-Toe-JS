export default function Board(gameboard) {
  let moves = ['', '', '', '', '', '', '', '', ''];

  const getMoves = () => moves;

  function showBoard() {
    gameboard.style.display = 'block';
  }

  function clearBoard() {
    moves = ['', '', '', '', '', '', '', '', ''];
  }

  return { getMoves, clearBoard, showBoard };
}
