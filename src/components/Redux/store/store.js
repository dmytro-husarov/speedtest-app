const START_TIMER = 'START_TIMER'
const STOP_TIMER = 'STOP_TIMER'
const RESET_TIMER = 'RESET_TIMER'
const COUNT_INCREMENT = 'COUNT_INCREMENT'
const UPDATE_ELAPSED = 'UPDATE_ELAPSED'

const initialState = {
  duration: 5000,
  count: 0,
  elapsed: 0,
  isStart: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: return {...state, isStart: true}
    case STOP_TIMER: return {...state, isStart: false}
    case RESET_TIMER: return {...state, count: 0, elapsed: 0}
    case COUNT_INCREMENT: return {...state, count: state.count + 1}
    case UPDATE_ELAPSED: return {...state, elapsed: action.elapsed}
    default: return state
  }
}

export const startTimer = () => ({ type: START_TIMER })
export const stopTimer = () => ({ type: STOP_TIMER })
export const resetTimer = () => ({ type: RESET_TIMER })
export const countIncrement = () => ({ type: COUNT_INCREMENT })
export const updateElapsed = elapsed => ({ type: UPDATE_ELAPSED, elapsed })
