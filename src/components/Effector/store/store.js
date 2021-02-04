import { createStore, createApi, combine } from "effector"

export const durationState = createStore(5000)
export const countState = createStore(0)
export const elapsedState = createStore(0)
export const isStartState = createStore(false)

export const buttonsState = combine(isStartState, countState,
  (isStart, count) => ({
    showStartBtn: (!isStart && count === 0),
    showStopBtn: isStart,
    showResetBtn: (!isStart && count > 0)
  })
)

export const {setCount, resetCount} = createApi(countState, {
  setCount: count => count + 1,
  resetCount: () => 0
})
export const {setElapsed, resetElapsed} = createApi(elapsedState, {
  setElapsed: (_, value) => value,
  resetElapsed: () => 0
})
export const {setIsStart} = createApi(isStartState, {
  setIsStart: (_, value) => value
})
