import { useEffect } from 'react'
import { useAtom } from 'jotai'

import { countState, elapsedState, isStartState } from './store/store'


const Counter = () => {
  const [isStart] = useAtom(isStartState)
  const [, setElapsed] = useAtom(elapsedState)
  const [count, setCount] = useAtom(countState)

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
