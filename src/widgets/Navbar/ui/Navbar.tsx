import type { ReactNode } from "react"
import React, { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import cls from "./Navbar.module.scss"
import { classNames } from "@/shared/lib"
import {
  AppLink,
  AppLinkTheme,
  Avatar,
  Button,
  ButtonTheme,
  Dropdown,
  HStack,
  Icon,
  Popover,
  Text,
  TextTheme,
} from "@/shared/ui"
import { LoginModal } from "@/features/AuthByUsername"
import { useDispatch, useSelector } from "react-redux"
import {
  getUserData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User"
import { RoutePath } from "@/shared/config"
import NotificationIcon from "../../../shared/assets/house.svg"

interface NavbarProps {
  className?: string
  children?: ReactNode
}

export const Navbar = (props: NavbarProps) => {
  const { className = "" } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const logout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager
  const adminButtons = isAdminPanelAvailable
    ? [
        {
          content: t("Админка"),
          href: RoutePath.admin_panel,
        },
      ]
    : []

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
        <HStack gap={"16"} className={cls.actions}>
          <Popover
            trigger={
              <Button theme={"clear"}>
                <Icon Svg={NotificationIcon} className={cls.notificationIcon} />
              </Button>
            }
          >
            12312313
          </Popover>

          <Dropdown
            direction={"bottom-left"}
            items={[
              ...adminButtons,
              {
                content: t("Выйти"),
                onClick: logout,
              },
              {
                content: t("Профиль"),
                href: RoutePath.profile + userData.id,
              },
            ]}
            trigger={
              <Avatar src={userData.avatar} size={30} alt={userData.username} />
            }
          />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.actions)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
          {t("Войти")}
        </Button>

        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </header>
  )
}

export default memo(Navbar)
