import { useMyContext } from './store/Context'


const Counter = () => {
  const {count} = useMyContext()

  return <p>Count: {count}</p>
}

export default Counter
