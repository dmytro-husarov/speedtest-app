import { useLayoutEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import { countState, durationState, elapsedState, isStartState } from "./store/store"


const Result = () => {
  const duration = useRecoilValue(durationState)
  const elapsed = useRecoilValue(elapsedState)
  const count = useRecoilValue(countState)
  const setIsStart = useSetRecoilState(isStartState)
  const [maxCount, setMaxCount] = useLocalStorage('Recoil', 0)
  
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
