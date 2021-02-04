import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MuiButton from '../../MUI/MuiButton'
import { resetTimer, startTimer, stopTimer } from './store/store'


const Buttons = () => {
  const {showStartBtn, showStopBtn, showResetBtn} = useSelector(state => ({
    showStartBtn: (!state.isStart && state.count === 0),
    showStopBtn: state.isStart,
    showResetBtn: (!state.isStart && state.count > 0)
  }))
  const dispath = useDispatch()

  const handleStart = useCallback(()=>dispath(startTimer()), [dispath])
  const handleStop = useCallback(()=>dispath(stopTimer()), [dispath])
  const handleReset = useCallback(()=>dispath(resetTimer()), [dispath])

  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={handleStart} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={handleStop} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={handleReset}/>}
    </>
  )
}

export default Buttons
