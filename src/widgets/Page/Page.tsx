import { FC, MutableRefObject, ReactNode, useRef, UIEvent } from "react"
import cls from "./Page.module.scss"
import { classNames, useAppDispatch, useInitialEffect } from "@/shared/lib"
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll"
import {
  getScrollPositionByPass,
  scrollSaveActions,
} from "@/features/ScrollSave"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { StateSchema } from "@/app/providers/StoreProvider"
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle"
import { PAGE_ID } from "@/shared/const/page"

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = props => {
  const { className = "", children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPass(state, pathname)
  )
  const onScrollPage = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  })
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })
  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })
  return (
    <section
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScrollPage}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef}></div>}
    </section>
  )
}
