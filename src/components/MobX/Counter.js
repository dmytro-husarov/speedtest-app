import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import state from './store/store'


const Counter = observer(() => {
  const isStart = state.isStart

  useEffect(() => {
    if (isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        state.setCount()
        state.setElapsed(Date.now() - startTime)
      })
      return () => clearImmediate(immediateId)
    }
  }, [isStart])

  return <p>Count: {state.count}</p>
})

export default Counter
