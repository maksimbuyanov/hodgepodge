import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/Page"

const AdminPanel: FC = () => {
  const { t } = useTranslation("translation")
  return <Page>{t("Админ панель")}</Page>
}

export default AdminPanel
