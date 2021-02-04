import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {reducer} from './store/store'
import Timer from './Timer'
import Counter from './Counter'
import Result from './Result'
import Buttons from './Buttons'


const Speedtest = () => {
  const store = createStore(reducer)

  return (
    <div>
      <h4>Redux</h4>

      <Provider store={store}>
        <Timer />
        <Counter />
        <Result />
        <Buttons />
      </Provider>
    </div>
  )
}

export default Speedtest
