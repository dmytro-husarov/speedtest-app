import MuiButton from '../../MUI/MuiButton'
import { useMyContext } from './store/Context'


const Buttons = () => {
  const {
    showStartBtn, showStopBtn, showResetBtn,
    startTimer, stopTimer, resetTimer
  } = useMyContext()

  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={startTimer} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={stopTimer} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={resetTimer}/>}
    </>
  )
}

export default Buttons
