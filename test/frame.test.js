const Frame = require('../src/frame');

describe('Frame', () => {
  describe('#addRollOne', () => {
    test('stores first roll of the frame', () => {
      let frame = new Frame();
      frame.addRollOne(5);
      expect(frame.rollOne()).toBe(5);
    });

    test('isStrike is true when rollOne is 10', () => {
      let frame = new Frame();
      frame.addRollOne(10);
      expect(frame.isStrike()).toBe(true);
    });
  });

  describe('#addRollTwo', () => {
    test('stores second roll of the frame', () => {
      let frame = new Frame();
      frame.addRollTwo(5);
      expect(frame.rollTwo()).toBe(5);
    });

    test('isSpare is true when the two rolls sum to 10', () => {
      let frame = new Frame();
      frame.addRollOne(5);
      frame.addRollTwo(5);
      expect(frame.isSpare()).toBe(true);
    });
  });
});
