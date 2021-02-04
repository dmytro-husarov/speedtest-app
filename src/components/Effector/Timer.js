import { useStore } from 'effector-react'

import { elapsedState } from './store/store'


const Timer = () => {
  const elapsed = useStore(elapsedState)

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
