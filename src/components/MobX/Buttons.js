import { observer } from 'mobx-react-lite'

import MuiButton from '../../MUI/MuiButton'
import state from './store/store'


const Buttons = observer(() => {

  const handleStart = () => state.setIsStart(true)
  const handleStop = () => state.setIsStart(false)
  const handleReset = () => state.resetState()

  return (
    <>
      {state.showStartBtn && <MuiButton children="Start" handler={handleStart} color="primary"/>}
      {state.showStopBtn && <MuiButton children="Stop" handler={handleStop} color="secondary"/>}
      {state.showResetBtn && <MuiButton children="Reset" handler={handleReset}/>}
    </>
  )
})

export default Buttons
