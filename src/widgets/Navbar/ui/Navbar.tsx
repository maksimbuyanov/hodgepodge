import type { FC } from "react"
import React, { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import cls from "./Navbar.module.scss"
import { classNames } from "@/shared/lib"
import {
  AppLink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  Text,
  TextTheme,
} from "@/shared/ui"
import { LoginModal } from "@/features/AuthByUsername"
import { useDispatch, useSelector } from "react-redux"
import { getUserData, userActions } from "@/entities/User"
import { RoutePath } from "@/shared/config"

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const logout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t("Hodgepodge")}
          theme={TextTheme.Inverted}
        />
        <AppLink
          className={cls.create_link}
          to={RoutePath.articles_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t("Создать статью")}
        </AppLink>
        <div className={classNames(cls.links)}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={logout}>
            {t("Выйти")}
          </Button>
        </div>
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
          {t("Войти")}
        </Button>

        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </header>
  )
}

export default memo(Navbar)
