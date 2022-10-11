import { FC } from "react"
import cls from "./LoginForm.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui"
import { Input } from "@/shared/ui/Input/Input"

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = props => {
  const { t } = useTranslation()
  const { className = "" } = props
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type="text"
        placeholder={t("введите username")}
        autoFocus={true}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t("введите password")}
      />
      <Button className={cls.loginButton} theme={ButtonTheme.OUTLINE}>
        {t("Войти")}
      </Button>
    </div>
  )
}
