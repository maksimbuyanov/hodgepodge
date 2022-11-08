import { FC, memo } from "react"
import cls from "./ArticleImageBlockComponent.module.scss"
import { classNames } from "@/shared/lib"
import { ArticleImageBlock } from "../../model/types/article"
import { Text, TextAlign, TextSize } from "@/shared/ui"

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<
  ArticleImageBlockComponentProps
> = props => {
  const { className = "", block } = props
  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <img src={block.src} alt={block.title} className={cls.image} />
      {block.title && (
        <Text text={block.title} size={TextSize.M} className={cls.title} />
      )}
    </div>
  )
}

export default memo(ArticleImageBlockComponent)
