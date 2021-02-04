import { useAtom } from 'jotai'

import { elapsedState } from './store/store'


const Timer = () => {
  const [elapsed] = useAtom(elapsedState)

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
