import { FC, memo } from "react"
import cls from "./ArticlePage.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"

interface ArticlePageProps {
  className?: string
}

export const ArticlePage: FC<ArticlePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  return <div className={classNames(cls.ArticlePage, {}, [className])}>123</div>
}

export default memo(ArticlePage)
