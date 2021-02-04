import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { countState, elapsedState, isStartState } from './store/store'


const Counter = () => {
  const isStart = useRecoilValue(isStartState)
  const setElapsed = useSetRecoilState(elapsedState)
  const [count, setCount] = useRecoilState(countState)

  useEffect(() => {
    if (isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        setCount(prev => prev + 1)
        setElapsed(Date.now() - startTime)
      })
      return () => clearImmediate(immediateId)
    }
  }, [isStart, setCount, setElapsed])

  return <p>Count: {count}</p>
}

export default Counter
