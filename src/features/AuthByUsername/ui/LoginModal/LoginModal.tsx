import { FC, Suspense } from "react"
import { classNames } from "@/shared/lib"
import { Modal } from "@/shared/ui"
import { LoginFormAsync } from "../LoginForm/LoginForm.async"
import { Loader } from "@/features/Loader"

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
