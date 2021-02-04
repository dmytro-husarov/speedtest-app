import { useStore } from './store/store'


const Timer = () => {
  const elapsed = useStore(state => state.elapsed)

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
