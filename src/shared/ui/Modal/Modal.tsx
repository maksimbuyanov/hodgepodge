import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import cls from "./Modal.module.scss"
import { classNames, Mods } from "@/shared/lib"
import { Portal } from "@/shared/ui/Portal/Portal"

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = props => {
  const {
    className = "",
    children,
    onClose,
    isOpen = false,
    lazy = false,
  } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])
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
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

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
