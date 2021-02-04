import { createMachine, assign } from "xstate"

const MyMachine = createMachine({
  id: 'speedtest',
  initial: 'idle',
  context: {
    duration: 5000,
    count: 0,
    elapsed: 0,
    startTime: 0
  },
  states: {
    idle: {
      on: {
        START: 'testing'
      }
    },
    testing: {
      entry: ['addStartTime'],
      always: {
        target: 'result',
        cond: 'stopTimer'
      },
      invoke: {
        src: 'timer'
      },
      on: {
        TICK: {
          actions: ['updateTimer']
        },
        STOP: 'result'
      }
    },
    result: {
      on: {
        RESET: {
          target: 'idle',
          actions: ['resetResult']
        }
      }
    }
  }
},
{
  actions: {
    addStartTime: assign({
      startTime: () => Date.now(),
    }),
    updateTimer: assign({
      elapsed: context => Date.now() - context.startTime,
      count: context => context.count + 1
    }),
    resetResult: assign({
      count: 0,
      elapsed: 0
    })
  },
  guards: {
    stopTimer: context => {
      return context.elapsed >= context.duration
    }
  },
  services: {
    timer: () => cb => {
      let timeoutId = setImmediate(function go() {
        timeoutId = setImmediate(go)
        cb('TICK')
      })
      return () => clearImmediate(timeoutId)
    }
  }
})

export default MyMachine
