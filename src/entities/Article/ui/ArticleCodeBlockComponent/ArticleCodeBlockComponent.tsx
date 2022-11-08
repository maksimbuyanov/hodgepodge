import { FC, memo } from "react"
import cls from "./ArticleCodeBlockComponent.module.scss"
import { classNames } from "@/shared/lib"
import { ArticleCodeBlock } from "@/entities/Article/model/types/article"
import { Code } from "@/shared/ui"

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<
  ArticleCodeBlockComponentProps
> = props => {
  const { className = "", block } = props
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code>{block.code}</Code>
    </div>
  )
}

export default memo(ArticleCodeBlockComponent)
