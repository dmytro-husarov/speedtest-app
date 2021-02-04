import { useProxy } from 'valtio'
import { useCallback } from 'react'

import MuiButton from '../../MUI/MuiButton'
import { state } from './store/store'


const Buttons = () => {
  const {isStart, count} = useProxy(state)
  const showStartBtn = (!isStart && count === 0)
  const showStopBtn = isStart
  const showResetBtn = (!isStart && count > 0)

  const handleStart = useCallback(() => state.isStart = true, [])
  const handleStop = useCallback(() => state.isStart = false, [])
  const handleReset = useCallback(()=>{
    state.count = 0
    state.elapsed = 0
  }, [])

  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={handleStart} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={handleStop} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={handleReset}/>}
    </>
  )
}

export default Buttons
