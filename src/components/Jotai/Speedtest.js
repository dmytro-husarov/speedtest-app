import { Provider } from 'jotai'

import Timer from './Timer'
import Counter from './Counter'
import Result from './Result'
import Buttons from './Buttons'


const Speedtest = () => {
  return (
    <div>
      <h4>Jotai</h4>

      <Provider>
        <Timer />
        <Counter />
        <Result />    
        <Buttons />
      </Provider>
    </div>
  )
}

export default Speedtest
