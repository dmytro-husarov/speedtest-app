import { observer } from 'mobx-react-lite'

import state from './store/store'


const Timer = observer(() => <p>Elapsed Time: {state.elapsed}ms</p>)

export default Timer
