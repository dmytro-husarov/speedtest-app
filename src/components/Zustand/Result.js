import { useEffect, useLayoutEffect } from "react"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useStore, resetCount, resetElapsed, setIsStart } from "./store/store"


const Result = () => {
  const duration = useStore(state => state.duration)
  const elapsed = useStore(state => state.elapsed)
  const count = useStore(state => state.count)
  const [maxCount, setMaxCount] = useLocalStorage('Zustand', 0)

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
