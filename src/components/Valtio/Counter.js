import { useEffect } from 'react'
import { useProxy } from 'valtio'

import { state } from './store/store'


const Counter = () => {
  const {isStart, count} = useProxy(state)

  useEffect(() => {
    if (isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        state.count++
        state.elapsed = Date.now() - startTime
      })
      return () => clearImmediate(immediateId)
    }
  }, [isStart])

  return <p>Count: {count}</p>
}

export default Counter
