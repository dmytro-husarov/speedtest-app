import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import MuiButton from '../../MUI/MuiButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'


const Speedtest = () => {
  const duration = 5000
  const [count, setCount] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [isStart, setIsStart] = useState(false)
  const [maxCount, setMaxCount] = useLocalStorage('useState', 0)

  useEffect(() => {
    if (isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        setCount(prevCount => prevCount + 1)
        setElapsed(Date.now() - startTime)
      })
      return () => clearImmediate(immediateId)
    }
  }, [isStart])

  useLayoutEffect(() => {
    if (elapsed >= duration) {
      setIsStart(false)
      setMaxCount(count)
    }
  }, [elapsed, duration, count, setMaxCount])

  const handlerStart = useCallback(() => setIsStart(true), [])
  const handlerStop = useCallback(() => setIsStart(false), [])
  const handlerReset = useCallback(() => {
    setCount(0)
    setElapsed(0)
  }, [])

  return (
    <div>
      <h4>useState</h4>

      <p>Elapsed Time: {elapsed}ms</p>
      <p>Count: {count}</p>
      <p>Result: {count ? (elapsed / count).toFixed(2) : 0}ms</p>
      {
        maxCount
         ? <p>maxResult: {duration}/{maxCount}={(duration/maxCount).toFixed(2)}ms</p>
         : <p>maxResult: ---- no results ----</p>
      }

      {!isStart && count === 0 && <MuiButton children="Start" handler={handlerStart} color="primary"/>}
      {isStart && <MuiButton children="Stop" handler={handlerStop} color="secondary"/>}
      {!isStart && count > 0 && <MuiButton children="Reset" handler={handlerReset}/>}
    </div>
  )
}

export default Speedtest
