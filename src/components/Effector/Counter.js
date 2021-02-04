import { useEffect } from 'react'
import { useStore } from 'effector-react'

import { countState, isStartState, setCount, setElapsed } from './store/store'


const Counter = () => {
  const isStart = useStore(isStartState)
  const count = useStore(countState)

  useEffect(() => {
    if (isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        setCount()
        setElapsed(Date.now() - startTime)
      })
      return () => clearImmediate(immediateId)
    }
  }, [isStart])

  return <p>Count: {count}</p>
}

export default Counter
