import { FC, memo, useCallback } from "react"
import cls from "./LoginForm.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui"
import { Input } from "@/shared/ui/Input/Input"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../../model/slice/loginSlice"
import { getLoginState } from "../../model/selector/getLoginState/getLoginState"
import { loginByUsername } from "@/features/AuthByUsername/model/services/loginByUsername/loginByUsername"

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = props => {
  const { t } = useTranslation()
  const { className = "" } = props
  const dispatch = useDispatch()
  const loginForm = useSelector(getLoginState)
  const onChangeUsername = useCallback(
    (data: string) => {
      dispatch(loginActions.setUsername(data))
    },
    [dispatch]
  )
  const onChangePassword = useCallback(
    (data: string) => {
      dispatch(loginActions.setPassword(data))
    },
    [dispatch]
  )
  const onLoginClick = useCallback(() => {
    const { username, password } = loginForm
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, loginForm])
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {loginForm?.error && <div>{loginForm.error}</div>}
      <Input
        className={cls.input}
        type="text"
        placeholder={t("введите username")}
        autoFocus={true}
        onChange={onChangeUsername}
        value={loginForm?.username}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t("введите password")}
        onChange={onChangePassword}
        value={loginForm?.password}
      />
      <Button
        className={cls.loginButton}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={loginForm?.isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  )
}

export default memo(LoginForm)
