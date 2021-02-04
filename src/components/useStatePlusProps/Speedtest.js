import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import Timer from './Timer'
import Counter from './Counter'
import Result from './Result'
import Buttons from './Buttons'


const Speedtest = () => {
  const duration = 5000
  const [count, setCount] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [isStart, setIsStart] = useState(false)
  const [maxCount, setMaxCount] = useLocalStorage('useState+Props', 0)

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
      <h4>useState+Props</h4>

      <Timer elapsed={elapsed} />
      <Counter count={count} />
      <Result
        duration={duration}
        maxCount={maxCount}
        count={count}
        elapsed={elapsed}
      />
      <Buttons
        showStartBtn={(!isStart && count === 0)}
        showStopBtn={isStart}
        showResetBtn={(!isStart && count > 0)}
        handlerStart={handlerStart}
        handlerStop={handlerStop}
        handlerReset={handlerReset}
      />
    </div>
  )
}

export default Speedtest
