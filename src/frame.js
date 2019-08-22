class Frame {
  constructor(brand) {
    this._rollOne = null
  }

  addRollOne(pins) {
    this._rollOne = pins
  }

  rollOne() {
    return this._rollOne
  }
}

module.exports = Frame
