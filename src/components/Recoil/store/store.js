import { atom, selector } from "recoil"

export const durationState = atom({
  key: 'duration',
  default: 5000
})
export const countState = atom({
  key: 'count',
  default: 0
})
export const elapsedState = atom({
  key: 'elapsed',
  default: 0
})
export const isStartState = atom({
  key: 'isStart',
  default: false
})

export const buttonsState = selector({
  key: 'buttonsState',
  get: ({get}) => ({
    showStartBtn: (!get(isStartState) && get(countState) === 0),
    showStopBtn: get(isStartState),
    showResetBtn: (!get(isStartState) && get(countState) > 0)
  })
})
