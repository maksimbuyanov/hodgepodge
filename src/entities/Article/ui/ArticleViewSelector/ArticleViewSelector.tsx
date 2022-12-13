import { FC, memo, useMemo } from "react"
import cls from "./ArticleViewSelector.module.scss"
import { classNames } from "@/shared/lib"
import { ArticleView } from "../../model/types/article"
import ListIcon from "@/shared/assets/article-list.svg"
import GridIcon from "@/shared/assets/article-grid.svg"
import { Button, ButtonTheme, Icon } from "@/shared/ui"

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = props => {
  const { className = "", onViewClick, view } = props
  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView)
    }
  }
  const viewTypes = useMemo(
    () => [
      { view: ArticleView.GRID, icon: GridIcon },
      { view: ArticleView.COLUMN, icon: ListIcon },
    ],
    []
  )
  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(ViewType => {
        return (
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onClick(ViewType.view)}
            key={ViewType.view}
          >
            <Icon
              Svg={ViewType.icon}
              className={classNames("", {
                [cls.selected]: ViewType.view === view,
              })}
            />
          </Button>
        )
      })}
    </div>
  )
}

export default memo(ArticleViewSelector)
