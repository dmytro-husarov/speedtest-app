import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useLocalStorage } from "../../hooks/useLocalStorage"
import { stopTimer } from "./store/store"


const Result = () => {
  const {duration, elapsed, count} = useSelector(state => ({...state}))
  const [maxCount, setMaxCount] = useLocalStorage('Redux', 0)
  const dispath = useDispatch()
  
  useLayoutEffect(() => {
    if (elapsed >= duration) {
      dispath(stopTimer())
      setMaxCount(count)
    }
  }, [elapsed, duration, count, setMaxCount, dispath])

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
