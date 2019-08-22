const Frame = require('../src/frame');

describe('Frame', () => {
  test('stores first roll of the frame', () => {
    let frame = new Frame();
    frame.addRollOne(5);
    expect(frame.rollOne()).toBe(5);
  });
});
