import { useRecoilValue } from 'recoil'

import { elapsedState } from './store/store'


const Timer = () => {
  const elapsed = useRecoilValue(elapsedState)

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
