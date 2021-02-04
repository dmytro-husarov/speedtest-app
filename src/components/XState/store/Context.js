import { createContext, useContext } from 'react'
import { useMachine } from "@xstate/react"

import MyMachine from './store'


const MyContext = createContext()

export const useMyContext = () => useContext(MyContext)

export const MyProvider = ({ children }) => {
  const [state, send] = useMachine(MyMachine)
  const {elapsed, count, duration} = state.context

  return (
    <MyContext.Provider value={{
      elapsed, count, duration, send, matches: state.matches
    }}>
      { children }
    </MyContext.Provider>
  )
}
