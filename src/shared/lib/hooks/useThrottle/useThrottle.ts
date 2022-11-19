import { useCallback, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useThrottle = (
  callbackFu: (...args: any[]) => void,
  delay: number = 250
) => {
  const throttleRef = useRef(false)
  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callbackFu(...args)
        throttleRef.current = true
        setTimeout(() => {
          throttleRef.current = false
        }, delay)
      }
    },
    [callbackFu, delay]
  )
}
