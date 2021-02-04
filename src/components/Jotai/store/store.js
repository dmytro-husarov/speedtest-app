import { atom } from "jotai"

export const durationState = atom(5000)
export const countState = atom(0)
export const elapsedState = atom(0)
export const isStartState = atom(false)

export const buttonsState = atom((get) => ({
  showStartBtn: (!get(isStartState) && get(countState) === 0),
  showStopBtn: get(isStartState),
  showResetBtn: (!get(isStartState) && get(countState) > 0)
}))
