import { MutableRefObject, useEffect, useRef } from "react"

export interface UseInfiniteScroll {
  callback: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: UseInfiniteScroll) => {
  const { callback, wrapperRef, triggerRef } = props

  useEffect(() => {
    const options = {
      root: wrapperRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    }
    const obs = new IntersectionObserver(([entry]) => {
      console.log("Объект в поле видимости")
    }, options)
    obs.observe(triggerRef.current)

    return () => {
      if (obs) {
        obs.unobserve(triggerRef.current)
      }
    }
  }, [triggerRef, wrapperRef])
}
