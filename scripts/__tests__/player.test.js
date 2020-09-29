import Player from '../modules/player';

const player = new Player('taofeek', 'X');

test('get player name function', () => {
  expect(player.getName()).toEqual('taofeek');
});

test('get player mark function', () => {
  expect(player.getMark()).toEqual('X');
});

test('get player wins function', () => {
  expect(player.getWins()).toEqual(0);
});

test("increment player's wins", () => {
  expect(player.addWins()).toBeUndefined();
  expect(player.getWins()).toEqual(1);
});