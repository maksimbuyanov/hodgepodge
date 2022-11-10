import { FC, memo } from "react"
import cls from "./ArticleTextBlockComponent.module.scss"
import { classNames } from "@/shared/lib"
import { ArticleTextBlock } from "../../model/types/article"
import { Text } from "@/shared/ui"

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<
  ArticleTextBlockComponentProps
> = props => {
  const { className = "", block } = props
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph, index) => {
        return <Text text={paragraph} key={index} className={cls.paragraph} />
      })}
    </div>
  )
}

export default memo(ArticleTextBlockComponent)
