import { proxy } from "valtio"

export const state = proxy({
  duration: 5000,
  count: 0,
  elapsed: 0,
  isStart: false
})
