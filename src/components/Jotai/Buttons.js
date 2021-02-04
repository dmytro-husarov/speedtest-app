import { useAtom } from 'jotai'
import { useCallback } from 'react'

import MuiButton from '../../MUI/MuiButton'
import { buttonsState, countState, elapsedState, isStartState } from './store/store'


const Buttons = () => {
  const [{showStartBtn, showStopBtn, showResetBtn}] = useAtom(buttonsState)
  const [, setIsStart] = useAtom(isStartState)
  const [, resetCount] = useAtom(countState)
  const [, resetElapsed] = useAtom(elapsedState)

  const handleStart = useCallback(() => setIsStart(true), [setIsStart])
  const handleStop = useCallback(() => setIsStart(false), [setIsStart])
  const handleReset = useCallback(()=>{
    resetCount(0)
    resetElapsed(0)
  }, [resetCount, resetElapsed])

  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={handleStart} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={handleStop} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={handleReset}/>}
    </>
  )
}

export default Buttons
