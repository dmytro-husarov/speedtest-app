import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'

import MuiButton from '../../MUI/MuiButton'
import { buttonsState, countState, elapsedState, isStartState } from './store/store'


const Buttons = () => {
  const {showStartBtn, showStopBtn, showResetBtn} = useRecoilValue(buttonsState)
  const setIsStart = useSetRecoilState(isStartState)
  const resetCount = useResetRecoilState(countState)
  const resetElapsed = useResetRecoilState(elapsedState)

  const handleStart = () => setIsStart(true)
  const handleStop = () => setIsStart(false)
  const handleReset = ()=>{
    resetCount()
    resetElapsed()
  }

  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={handleStart} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={handleStop} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={handleReset}/>}
    </>
  )
}

export default Buttons
