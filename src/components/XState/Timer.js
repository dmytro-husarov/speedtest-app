import { useMyContext } from './store/Context'


const Timer = () => {
  const {elapsed} = useMyContext()

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
