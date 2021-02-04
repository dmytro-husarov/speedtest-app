import {
  createContext, useCallback, useContext,
  useEffect, useLayoutEffect, useReducer
} from 'react'

import { useLocalStorage } from '../../../hooks/useLocalStorage'


const MyContext = createContext()

export const useMyContext = () => useContext(MyContext)

const START_TIMER = 'START_TIMER'
const STOP_TIMER = 'STOP_TIMER'
const RESET_TIMER = 'RESET_TIMER'
const COUNT_INCREMENT = 'COUNT_INCREMENT'
const UPDATE_ELAPSED = 'UPDATE_ELAPSED'

const reducer = (state, action) => {
  switch (action.type) {
    case START_TIMER: return {...state, isStart: true}
    case STOP_TIMER: return {...state, isStart: false}
    case RESET_TIMER: return {...state, count: 0, elapsed: 0}
    case COUNT_INCREMENT: return {...state, count: state.count + 1}
    case UPDATE_ELAPSED: return {...state, elapsed: action.elapsed}
    default: return state
  }
}

const MyProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    duration: 5000,
    count: 0,
    elapsed: 0,
    isStart: false,
  })
  const [maxCount, setMaxCount] = useLocalStorage('Context+useReducer', 0)

  const startTimer = useCallback(() => dispatch({ type: START_TIMER }), [])
  const stopTimer = useCallback(() => dispatch({ type: STOP_TIMER }), [])
  const resetTimer = useCallback(() => dispatch({ type: RESET_TIMER }), [])
  const countIncrement = () => dispatch({ type: COUNT_INCREMENT })
  const updateElapsed = elapsed => dispatch({ type: UPDATE_ELAPSED, elapsed })
 
  useEffect(() => {
    if (state.isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        countIncrement()
        updateElapsed(Date.now() - startTime)
      })
      return () => clearImmediate(immediateId)
    }
  }, [state.isStart])

  useLayoutEffect(() => {
    if (state.elapsed >= state.duration) {
      stopTimer()
      setMaxCount(state.count)
    }
  }, [state.elapsed, state.duration, state.count, setMaxCount, stopTimer])

  return (
    <MyContext.Provider value={{
      duration: state.duration,
      count: state.count,
      elapsed: state.elapsed,
      maxCount,
      startTimer, stopTimer, resetTimer,
      showStartBtn: (!state.isStart && state.count === 0),
      showStopBtn: state.isStart,
      showResetBtn: (!state.isStart && state.count > 0)
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider
