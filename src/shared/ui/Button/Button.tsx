import type { ButtonHTMLAttributes, FC } from "react"
import cls from "./Button.module.scss"
import { classNames, Mods } from "@/shared/lib"
import { memo } from "react"

export const ButtonTheme = {
  CLEAR: "clear",
  CLEAR_INVERTED: "clearInverted",
  ERROR: "error",
  OUTLINE: "outline",
  OUTLINE_RED: "outline_red",
  BACKGROUND: "background",
  BACKGROUND_INVERTED: "backgroundInverted",
} as const
type ButtonThemeType = valueOf<typeof ButtonTheme>

export const ButtonSize = {
  L: "size_l",
  M: "size_m",
  XL: "size_xl",
} as const
type ButtonSizeType = valueOf<typeof ButtonSize>

type ButtonProps = {
  className?: string
  theme?: ButtonThemeType
  square?: boolean
  size?: ButtonSizeType
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
  const mods: Mods = {
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
