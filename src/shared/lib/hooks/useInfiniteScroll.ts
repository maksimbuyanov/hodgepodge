import { MutableRefObject, useEffect } from "react"

export interface UseInfiniteScroll {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: UseInfiniteScroll): void => {
  const { callback, wrapperRef, triggerRef } = props

  useEffect(() => {
    let obs: IntersectionObserver | null = null
    const wrapper = wrapperRef.current
    const trigger = triggerRef.current

    if (callback) {
      const options = {
        root: wrapper,
        rootMargin: "0px",
        threshold: 1.0,
      }
      obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (__PROJECT__ !== "storybook") {
            callback()
          }
        }
      }, options)
      obs.observe(trigger)
    }
    return () => {
      if (obs) {
        obs.unobserve(trigger)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
