import { useCallback, useRef } from "react"

type CallbackFn = (...arg: any[]) => void

export const useDebounce = (
  callbackFn: CallbackFn,
  delay: number
): CallbackFn => {
  const timer = useRef<NodeJS.Timer>()

  return useCallback<CallbackFn>(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callbackFn(...args)
      }, delay)
    },
    [callbackFn, delay]
  )
}
