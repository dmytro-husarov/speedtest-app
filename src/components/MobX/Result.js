import { useEffect, useLayoutEffect } from "react"
import { observer } from 'mobx-react-lite'

import { useLocalStorage } from "../../hooks/useLocalStorage"
import state from "./store/store"


const Result = observer(() => {
  const [maxCount, setMaxCount] = useLocalStorage('MobX', 0)
  const elapsed = state.elapsed
  const duration = state.duration

  useLayoutEffect(() => {
    if (elapsed >= duration) {
      state.setIsStart(false)
      setMaxCount(state.count)
    }
  }, [setMaxCount, elapsed, duration])

  useEffect(() => {
    return () => state.resetState()
  }, [])

  return (
    <>
      <p>Result: {state.count ? (elapsed / state.count).toFixed(2) : 0}ms</p>
      {
        maxCount
         ? <p>maxResult: {duration}/{maxCount}={(duration/maxCount).toFixed(2)}ms</p>
         : <p>maxResult: ---- no results ----</p>
      }
    </>
  )
})

export default Result
