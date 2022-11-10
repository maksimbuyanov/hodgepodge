import { FC, memo } from "react"
import cls from "./ArticleCopyrightBlockComponent.module.scss"
import { classNames } from "@/shared/lib"
import { ArticleCopyrightBlock } from "../../model/types/article"
import { Text, TextAlign, TextSize } from "@/shared/ui"

interface ArticleCopyrightBlockComponentProps {
  className?: string
  block: ArticleCopyrightBlock
}

export const ArticleCopyrightBlockComponent: FC<
  ArticleCopyrightBlockComponentProps
> = props => {
  const { className = "", block } = props
  return (
    <a
      className={classNames(cls.ArticleCopyrightBlockComponent, {}, [
        className,
      ])}
      href={block?.url}
    >
      <Text
        className={cls.link}
        text={block.text ?? block.url}
        align={TextAlign.RIGHT}
        size={TextSize.M}
      />
    </a>
  )
}

export default memo(ArticleCopyrightBlockComponent)
