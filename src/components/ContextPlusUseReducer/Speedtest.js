import MyProvider from './store/Context'
import Counter from './Counter'
import Timer from './Timer'
import Result from './Result'
import Buttons from './Buttons'


const Speedtest = () => {
  return (
    <div>
      <h4>Context+useReducer</h4>

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
