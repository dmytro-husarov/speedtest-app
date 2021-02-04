import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { countIncrement, updateElapsed } from './store/store'


const Counter = () => {
  const {count, isStart} = useSelector(state => ({...state}))
  const dispath = useDispatch()

  useEffect(() => {
    if (isStart) {
      const startTime = Date.now()
      let immediateId = setImmediate(function go() {
        immediateId = setImmediate(go)
        dispath(countIncrement())
        dispath(updateElapsed(Date.now() - startTime))
      })
      return () => clearImmediate(immediateId)
    }
  }, [isStart, dispath])

  return <p>Count: {count}</p>
}

export default Counter
