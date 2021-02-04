import { useEffect, useLayoutEffect } from "react"
import { useProxy } from "valtio"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import { state } from "./store/store"


const Result = () => {
  const {duration, elapsed, count} = useProxy(state)
  const [maxCount, setMaxCount] = useLocalStorage('Valtio', 0)
  
  useLayoutEffect(() => {
    if (elapsed >= duration) {
      state.isStart = false
      setMaxCount(count)
    }
  }, [elapsed, duration, setMaxCount, count])

  useEffect(() => {
    return () => {
      state.count = 0
      state.elapsed = 0
      state.isStart = false
    }
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
