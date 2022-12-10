import { FC, memo, useCallback } from "react"
import { classNames } from "@/shared/lib"
import { Button, ButtonTheme, HStack } from "@/shared/ui"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "@/shared/config"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getArticleDetailsData } from "@/entities/Article"
import { isUserOwnerArticle } from "@/pages/ArticleDetailsPage/model/selectors/article/article"

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader: FC<
  ArticleDetailsPageHeaderProps
> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])
  const onClickEdin = useCallback(() => {
    if (article) {
      navigate(`${RoutePath.articles_edit}${article?.id}/edit`)
    }
  }, [article, navigate])
  const isOwner = useSelector(isUserOwnerArticle)
  return (
    <HStack justify={"between"} className={classNames("", {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t("Назад к списку")}
      </Button>
      <Button
        theme={ButtonTheme.OUTLINE}
        disabled={!isOwner}
        onClick={onClickEdin}
      >
        {t("Редактировать статью")}
      </Button>
    </HStack>
  )
}

export default memo(ArticleDetailsPageHeader)
