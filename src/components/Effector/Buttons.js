import { useStore } from 'effector-react'
import { useCallback } from 'react'

import MuiButton from '../../MUI/MuiButton'
import { buttonsState, resetCount, resetElapsed, setIsStart } from './store/store'


const Buttons = () => {
  const {showStartBtn, showStopBtn, showResetBtn} = useStore(buttonsState)

  const handleStart = useCallback(() => setIsStart(true), [])
  const handleStop = useCallback(() => setIsStart(false), [])
  const handleReset = useCallback(() => {
    resetCount()
    resetElapsed()
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
