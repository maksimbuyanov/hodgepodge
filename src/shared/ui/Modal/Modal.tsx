import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import cls from "./Modal.module.scss"
import { classNames } from "@/shared/lib"
import { Portal } from "@/shared/ui/Portal/Portal"

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = props => {
  const { className = "", children, onClose, isOpen = false } = props
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()
  const closeHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])
  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeHandler()
      }
    },
    [closeHandler]
  )
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  useEffect(() => {
    if (isOpen) {
      console.log(1)
      window.addEventListener("keydown", onKeyDown)
    }
    return () => {
      console.log(2)
      clearTimeout(timerRef.current)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
