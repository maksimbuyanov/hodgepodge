import type { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from '@/shared/lib'

export enum ThemeButton {
  CLEAR = 'clear',
}

type ButtonProps = {
  className?: string
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, ...otherProps } = props
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}>
      {children}
    </button>
  )
}
