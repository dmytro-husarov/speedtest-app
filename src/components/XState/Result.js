import { useLayoutEffect } from "react"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useMyContext } from "./store/Context"


const Result = () => {
  const {duration, elapsed, count} = useMyContext()
  const [maxCount, setMaxCount] = useLocalStorage('XState', 0)
  
  useLayoutEffect(() => {
    if (elapsed >= duration) {
      setMaxCount(count)
    }
  }, [elapsed, duration, setMaxCount, count])

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
