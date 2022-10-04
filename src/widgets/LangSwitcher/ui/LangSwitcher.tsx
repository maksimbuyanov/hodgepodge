import { useTranslation } from "react-i18next"
import type { FC } from "react"
import React from "react"
import { Button, ButtonTheme } from "@/shared/ui"
import { classNames } from "@/shared/lib"

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const { className = "" } = props
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru").catch(e => {
      console.log(e.message)
    })
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames("", {}, [className])}
    >
      {t("Язык")}
    </Button>
  )
}
