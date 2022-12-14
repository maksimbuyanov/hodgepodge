import type { FC } from "react"
import cls from "./ThemeSwitcher.module.scss"
import { classNames } from "@/shared/lib"
import { Theme, useTheme } from "@/app/providers/ThemeProvider"
import LightIcon from "@/shared/assets/theme-light.svg"
import DarkIcon from "@/shared/assets/theme-dark.svg"
import BloodIcon from "@/shared/assets/theme-blood.svg"
import { Button, ButtonTheme } from "@/shared/ui"
import { memo } from "react"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const { className = "" } = props

  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK && <LightIcon />}
      {theme === Theme.LIGHT && <BloodIcon />}
      {theme === Theme.BLOOD && <DarkIcon />}
    </Button>
  )
}

export default memo(ThemeSwitcher)
