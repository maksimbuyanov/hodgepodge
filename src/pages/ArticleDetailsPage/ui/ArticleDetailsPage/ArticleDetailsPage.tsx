import { FC, memo } from "react"
import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "@/entities/Article"

interface ArticleDetailsPageProps {
  className?: string
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
    </div>
  )
}

export default memo(ArticleDetailsPage)
