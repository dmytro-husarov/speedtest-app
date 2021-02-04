import { useEffect, useLayoutEffect } from "react"
import { useStore } from "effector-react"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import {
  countState, durationState, elapsedState,
  resetCount, resetElapsed, setIsStart
} from "./store/store"


const Result = () => {
  const duration = useStore(durationState)
  const elapsed = useStore(elapsedState)
  const count = useStore(countState)
  const [maxCount, setMaxCount] = useLocalStorage('Effector', 0)

  const resetState = () => {
    resetCount()
    resetElapsed()
    setIsStart(false)
  }
  
  useLayoutEffect(() => {
    if (elapsed >= duration) {
      setIsStart(false)
      setMaxCount(count)
    }
  }, [elapsed, duration, setMaxCount, count])

  useEffect(() => {
    return () => resetState()
  }, [])

  return (
    <>
      <p>Result: {count ? (elapsed / count).toFixed(2) : 0}ms</p>
      {
        maxCount
         ? <p>maxResult: {duration}/{maxCount}={(duration/maxCount).toFixed(2)}ms</p>
         : <p>maxResult: ---- no results ----</p>
      }
    </>
  )
}

export default Result
