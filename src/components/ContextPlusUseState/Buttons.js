import MuiButton from '../../MUI/MuiButton'
import { useMyContext } from './store/Context'


const Buttons = () => {
  const {
    showStartBtn, showStopBtn, showResetBtn,
    handlerStart, handlerStop, handlerReset
  } = useMyContext()

  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={handlerStart} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={handlerStop} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={handlerReset}/>}
    </>
  )
}

export default Buttons
