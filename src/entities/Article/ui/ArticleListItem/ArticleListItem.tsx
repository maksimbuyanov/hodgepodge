import { FC, HTMLAttributeAnchorTarget, useCallback } from "react"
import cls from "./ArticleListItem.module.scss"
import { classNames } from "@/shared/lib"
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article"
import {
  AppLink,
  Avatar,
  Button,
  ButtonTheme,
  Icon,
  Text,
  TextTheme,
} from "@/shared/ui"
import { parseViewers } from "@/entities/Article/model/lib/parseViewers/parseViewers"
import EyeIcon from "@/shared/assets/eye-20-20.svg"
import { Card } from "@/shared/ui/Card/Card"
import { useTranslation } from "react-i18next"
import { ArticleTextBlockComponent } from "@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "@/shared/config"

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = props => {
  const { className = "", article, view, target } = props
  const { t } = useTranslation("article")

  if (view === ArticleView.COLUMN) {
    const testBlock = article.blocks.find(block => {
      return block.type === ArticleBlockType.TEXT
    })
    return (
      <div className={classNames("", {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
              alt={article.user.username}
            />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          <Text text={article.type.join(", ")} className={cls.types} />
          <img src={article.image} alt={article.title} className={cls.img} />
          {testBlock && (
            <ArticleTextBlockComponent
              block={testBlock as ArticleTextBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={RoutePath.articles_detail + article.id}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>{t("Читать далее")}</Button>
            </AppLink>

            <Text text={parseViewers(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} className={cls.icon} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      className={classNames("", {}, [className, cls[view]])}
      to={RoutePath.articles_detail + article.id}
      target={target}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img src={article.image} alt={article.title} className={cls.img} />
          <Text
            text={article.createdAt}
            className={cls.date}
            theme={TextTheme.Bold}
          />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(", ")} className={cls.types} />
          <Text text={parseViewers(article.views)} className={cls.views} />
          <Icon Svg={EyeIcon} className={cls.icon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  )
}
