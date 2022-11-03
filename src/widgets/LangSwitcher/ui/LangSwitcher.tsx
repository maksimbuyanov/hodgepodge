import { useTranslation } from "react-i18next"
import type { FC } from "react"
import React, { memo } from "react"
import { Button, ButtonTheme } from "@/shared/ui"
import { classNames } from "@/shared/lib"

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const { className = "", short = false } = props
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
      {t(short ? "Короткий язык" : "Язык")}
    </Button>
  )
}

export default memo(LangSwitcher)
