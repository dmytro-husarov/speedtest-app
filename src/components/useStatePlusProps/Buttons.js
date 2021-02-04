import { memo } from 'react'

import MuiButton from '../../MUI/MuiButton'


const Buttons = memo(({
  showStartBtn, showStopBtn, showResetBtn,
  handlerStart, handlerStop, handlerReset
}) => {
  return (
    <>
      {showStartBtn && <MuiButton children="Start" handler={handlerStart} color="primary"/>}
      {showStopBtn && <MuiButton children="Stop" handler={handlerStop} color="secondary"/>}
      {showResetBtn && <MuiButton children="Reset" handler={handlerReset}/>}
    </>
  )
})

export default Buttons
