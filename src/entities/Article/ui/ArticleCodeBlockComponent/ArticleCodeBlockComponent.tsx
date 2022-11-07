import { FC } from "react"
import cls from "./ArticleCodeBlockComponent.module.scss"
import { classNames } from "@/shared/lib"

interface ArticleCodeBlockComponentProps {
  className?: string
}

export const ArticleCodeBlockComponent: FC<
  ArticleCodeBlockComponentProps
> = props => {
  const { className = "" } = props
  return (
    <div
      className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
    ></div>
  )
}
