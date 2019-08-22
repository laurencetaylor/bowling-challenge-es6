'use strict'

class Frame {
  constructor (brand) {
    this._MAXPINS = 10
    this._rollOne = null
    this._rollTwo = null
    this._isStrike = false
    this._isSpare = false
  }

  addRollOne (pins) {
    this._rollOne = pins
    this._checkIfStrike()
  }

  addRollTwo (pins) {
    this._rollTwo = pins
    this._checkIfSpare()
  }

  // Getter methods
  rollOne () {
    return this._rollOne
  }

  rollTwo () {
    return this._rollTwo
  }

  isStrike () {
    return this._isStrike
  }

  isSpare () {
    return this._isSpare
  }

  // Private Methods
  _checkIfStrike () {
    if (this._rollOne === this._MAXPINS) { this._updateIsStrike() }
  }

  _updateIsStrike () {
    this._isStrike = true
  }

  _checkIfSpare () {
    if (this._rollOne + this._rollTwo === this._MAXPINS) { this._updateIsSpare() }
  }

  _updateIsSpare () {
    this._isSpare = true
  }
}

module.exports = Frame
