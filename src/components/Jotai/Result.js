import { useLayoutEffect } from "react"
import { useAtom } from "jotai"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import { countState, durationState, elapsedState, isStartState } from "./store/store"


const Result = () => {
  const [duration] = useAtom(durationState)
  const [elapsed] = useAtom(elapsedState)
  const [count] = useAtom(countState)
  const [, setIsStart] = useAtom(isStartState)
  const [maxCount, setMaxCount] = useLocalStorage('Jotai', 0)
  
  useLayoutEffect(() => {
    if (elapsed >= duration) {
      setIsStart(false)
      setMaxCount(count)
    }
  }, [elapsed, duration, count, setMaxCount, setIsStart])

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
