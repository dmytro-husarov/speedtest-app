import { RecoilRoot } from 'recoil'

import Timer from './Timer'
import Counter from './Counter'
import Result from './Result'
import Buttons from './Buttons'


const Speedtest = () => {
  return (
    <div>
      <h4>Recoil</h4>

      <RecoilRoot>
        <Timer />
        <Counter />
        <Result />
        <Buttons />
      </RecoilRoot>
    </div>
  )
}

export default Speedtest
