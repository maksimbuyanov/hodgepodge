import { BudButton } from "@/app/providers/ErrorBoundary"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/shared/ui"

const MainPage: FC = () => {
  const { t } = useTranslation()
  return (
    <Page>
      {t("Главная страница")}
      <BudButton />
    </Page>
  )
}

export default MainPage
