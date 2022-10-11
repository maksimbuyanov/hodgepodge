import { FC } from "react"
import cls from "./LoginModal.module.scss"
import { classNames } from "@/shared/lib"
import { Modal } from "@/shared/ui/Modal/Modal"
import { LoginForm } from "../LoginForm/LoginForm"

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = props => {
  const { className = "", onClose, isOpen } = props
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm />
    </Modal>
  )
}
