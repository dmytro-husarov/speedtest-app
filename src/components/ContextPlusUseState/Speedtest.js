import MyProvider from './store/Context'
import Timer from './Timer'
import Counter from './Counter'
import Result from './Result'
import Buttons from './Buttons'


const Speedtest = () => {
  return (
    <div>
      <h4>Context+useState</h4>

      <MyProvider>
        <Timer />
        <Counter />
        <Result />
        <Buttons />
      </MyProvider>
    </div>
  )
}

export default Speedtest
