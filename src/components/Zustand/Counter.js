import { useEffect } from 'react'

import { useStore, setCount, setElapsed } from './store/store'


const Counter = () => {
  const isStart = useStore(state => state.isStart)
  const count = useStore(state => state.count)

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
