import { FC } from "react"
import cls from "./ArticleTextBlockComponent.module.scss"
import { classNames } from "@/shared/lib"

interface ArticleTextBlockComponentProps {
  className?: string
}

export const ArticleTextBlockComponent: FC<
  ArticleTextBlockComponentProps
> = props => {
  const { className = "" } = props
  return (
    <div
      className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
    ></div>
  )
}
