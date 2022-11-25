import { FC, memo } from "react"
import cls from "./ArticleEditPage.module.scss"
import { classNames } from "@/shared/lib"
import { Page } from "@/widgets/Page"
import { useParams } from "react-router-dom"
import { Text } from "@/shared/ui"
import { useTranslation } from "react-i18next"

interface ArticleEditPageProps {
  className?: string
}

export const ArticleEditPage: FC<ArticleEditPageProps> = props => {
  const { className = "" } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation("article")
  const isEdit = Boolean(id)
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? (
        <Text title={t("Редактируем страницу")} />
      ) : (
        <Text title={t("Создаем новую статью")} />
      )}
    </Page>
  )
}

export default memo(ArticleEditPage)
