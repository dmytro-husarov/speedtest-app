import { useSelector } from 'react-redux'

const Timer = () => {
  const {elapsed} = useSelector(state => ({elapsed: state.elapsed}))

  return <p>Elapsed Time: {elapsed}ms</p>
}

export default Timer
