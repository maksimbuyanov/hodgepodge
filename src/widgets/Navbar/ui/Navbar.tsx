import type { FC } from "react"
import React, { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import cls from "./Navbar.module.scss"
import { classNames } from "@/shared/lib"
import { Button, ButtonTheme } from "@/shared/ui"
import { Modal } from "@/shared/ui/Modal/Modal"

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
          {t("Войти")}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          {t("Войти")}
        </Modal>
      </div>
    </nav>
  )
}
