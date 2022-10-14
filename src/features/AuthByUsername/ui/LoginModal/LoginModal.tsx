import { FC } from "react"
import { classNames } from "@/shared/lib"
import { Modal } from "@/shared/ui/Modal/Modal"
import LoginForm from "../LoginForm/LoginForm"

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = props => {
  const { className = "", onClose, isOpen } = props
  return (
    <Modal
      className={classNames("", {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm />
    </Modal>
  )
}