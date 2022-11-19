import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/Page"

const AboutPage: FC = () => {
  const { t } = useTranslation("about")
  return <Page>{t("О нас")}</Page>
}

export default AboutPage
