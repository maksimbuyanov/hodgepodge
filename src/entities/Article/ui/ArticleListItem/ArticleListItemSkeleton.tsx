import { FC } from "react"
import cls from "./ArticleListItem.module.scss"
import { classNames } from "@/shared/lib"
import { ArticleView } from "@/entities/Article"
import { ArticleTextBlock } from "@/entities/Article/model/types/article"
import { Card } from "@/shared/ui/Card/Card"
import { Icon, Skeleton } from "@/shared/ui"

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: FC<
  ArticleListItemSkeletonProps
> = props => {
  const { className = "", view } = props

  if (view === ArticleView.COLUMN) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.skeletonCart}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border={"50%"} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={150} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={32} />
          </div>
        </Card>
      </div>
    )
  }
  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.skeletonCart}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
          <Skeleton className={cls.date} width={150} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} className={cls.types} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
}
