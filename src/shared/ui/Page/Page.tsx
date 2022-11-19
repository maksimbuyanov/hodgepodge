import { FC, MutableRefObject, ReactNode, useRef } from "react"
import cls from "./Page.module.scss"
import { classNames } from "@/shared/lib"
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll"

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = props => {
  const { className = "", children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })
  return (
    <section className={classNames(cls.Page, {}, [className])} ref={wrapperRef}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  )
}
