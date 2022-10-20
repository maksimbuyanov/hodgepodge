import type { ButtonHTMLAttributes, FC } from "react"
import cls from "./Button.module.scss"
import { classNames } from "@/shared/lib"
import { memo } from "react"

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  ERROR = "error",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export const enum ButtonSize {
  L = "size_l",
  M = "size_m",
  XL = "size_xl",
}

type ButtonProps = {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const {
    className = "",
    children,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}
export default memo(Button)
