import type { FC } from "react"
import { useMemo, useState } from "react"
import {
  LOCAL_STORAGE_THEM_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext"

const getDefaultTheme = (): Theme => {
  const theme =
    (localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Theme) || Theme.LIGHT
  document.body.className = theme
  return theme
}

const ThemeProvider: FC = props => {
  const { children } = props

  const [theme, setTheme] = useState<Theme>(getDefaultTheme())

  const def = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={def}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
