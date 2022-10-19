import { FC, memo, useCallback } from "react"
import cls from "./LoginForm.module.scss"
import { classNames, DynamicModuleLoader, ReducersList } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme, Input, Text, TextTheme } from "@/shared/ui"
import { useDispatch, useSelector } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername"
import { getLoginUsername } from "../../model/selector/getLoginUsername/getLoginUsername"
import { getLoginsPassword } from "../../model/selector/getLoginsPassword/getLoginsPassword"
import { getLoginsLoading } from "../../model/selector/getLoginsLoading/getLoginsLoading"
import { getLoginsError } from "../../model/selector/getLoginsError/getLoginsError"

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}
// TODO нет анимации появления при первом рендере
const LoginForm: FC<LoginFormProps> = props => {
  const { t } = useTranslation()
  const { className = "" } = props
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginsPassword)
  const isLoading = useSelector(getLoginsLoading)
  const error = useSelector(getLoginsError)

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
    // @ts-expect-error  TODO Убрать
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && (
          <Text theme={TextTheme.Error} text={t("Не найден пользователь")} />
        )}
        <Input
          className={cls.input}
          type="text"
          placeholder={t("введите username")}
          autoFocus={true}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={cls.input}
          type="text"
          placeholder={t("введите password")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginButton}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(LoginForm)
