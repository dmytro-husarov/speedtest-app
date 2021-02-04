import { useProxy } from 'valtio'

import { state } from './store/store'


const Timer = () => {
  const {elapsed} = useProxy(state)

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
