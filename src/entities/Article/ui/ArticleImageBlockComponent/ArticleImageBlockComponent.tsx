import { FC } from "react"
import cls from "./ArticleImageBlockComponent.module.scss"
import { classNames } from "@/shared/lib"

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent: FC<
  ArticleImageBlockComponentProps
> = props => {
  const { className = "" } = props
  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    ></div>
  )
}
