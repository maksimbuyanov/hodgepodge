import { FC, ReactNode } from "react"
import cls from "./Page.module.scss"
import { classNames } from "@/shared/lib"

interface PageProps {
  className?: string
  children: ReactNode
}

export const Page: FC<PageProps> = props => {
  const { className = "", children } = props
  return (
    <section className={classNames(cls.Page, {}, [className])}>
      {children}
    </section>
  )
}
