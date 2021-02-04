import { useCallback } from 'react'

import MuiButton from '../../MUI/MuiButton'
import { useMyContext } from './store/Context'


const Buttons = () => {
  const {send, matches} = useMyContext()

  const handleStart = useCallback(() => send('START'), [send])
  const handleStop = useCallback(() => send('STOP'), [send])
  const handleReset = useCallback(() => send('RESET'), [send])

  return (
    <>
      {matches('idle') && <MuiButton children="Start" handler={handleStart} color="primary"/>}
      {matches('testing') && <MuiButton children="Stop" handler={handleStop} color="secondary"/>}
      {matches('result') && <MuiButton children="Reset" handler={handleReset}/>}
    </>
  )
}

export default Buttons
