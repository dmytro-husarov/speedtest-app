import create from 'zustand'

export const useStore = create((set, get) => ({
  duration: 5000,
  count: 0,
  elapsed: 0,
  isStart: false,
  setCount: () => set(state => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
  setElapsed: value => set({ elapsed: value }),
  resetElapsed: () => set({ elapsed: 0 }),
  setIsStart: value => set({ isStart: value }),
  buttons: () => ({
    showStartBtn: (!get().isStart && get().count === 0),
    showStopBtn: get().isStart,
    showResetBtn: (!get().isStart && get().count > 0)
  })
}))

export const {
  setCount, resetCount,
  setElapsed, resetElapsed,
  setIsStart
} = useStore.getState()
