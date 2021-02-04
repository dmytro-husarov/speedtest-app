import {makeAutoObservable} from 'mobx'

class State {
  duration = 5000
  count = 0
  elapsed = 0
  isStart = false

  constructor() {
    makeAutoObservable(this)
  }

  setCount() {
    this.count = this.count + 1
  }
  setElapsed(elaps) {
    this.elapsed = elaps
  }
  setIsStart(bool) {
    this.isStart = bool
  }
  resetState() {
    this.count = 0
    this.elapsed = 0
    this.isStart = false
  }

  get showStartBtn() {
    return (!this.isStart && this.count === 0)
  }
  get showStopBtn() {
    return this.isStart
  }
  get showResetBtn() {
    return (!this.isStart && this.count > 0)
  }
}

export default new State()
