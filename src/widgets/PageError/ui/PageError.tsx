import { FC } from "react"
import cls from "./PageError.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "@/shared/ui"

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation()
  const reloadPage = (): void => {
    location.reload()
  }
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t("Произошла непредвиденная ошибка")}
      <Button onClick={reloadPage} theme={ThemeButton.ERROR}>
        {t("Обновить страницу")}
      </Button>
    </div>
  )
}
