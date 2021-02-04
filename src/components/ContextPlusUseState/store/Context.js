import {
  createContext, useCallback, useContext,
  useEffect, useLayoutEffect, useState
} from 'react'

import { useLocalStorage } from '../../../hooks/useLocalStorage'


const MyContext = createContext()

export const useMyContext = () => useContext(MyContext)

const MyProvider = ({children}) => {
  const duration = 5000
  const [count, setCount] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [isStart, setIsStart] = useState(false)
  const [maxCount, setMaxCount] = useLocalStorage('Context+useState', 0)
    
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
    <MyContext.Provider value={{
      duration, count, elapsed, maxCount,
      handlerStart, handlerStop, handlerReset,
      showStartBtn: (!isStart && count === 0),
      showStopBtn: isStart,
      showResetBtn: (!isStart && count > 0)
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider
