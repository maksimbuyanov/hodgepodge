import { BudButton } from "@/app/providers/ErrorBoundary"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/Page"

export const ForbiddenPage: FC = () => {
  const { t } = useTranslation()
  return (
    <Page>
      {t("У Вас нет доступа к этой странице")}
      <BudButton />
    </Page>
  )
}
