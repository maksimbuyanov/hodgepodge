import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import { Theme, ThemeContext } from "../lib/ThemeContext"
import { LOCAL_STORAGE_THEM_KEY } from "@/shared/const/localStorage"

const getDefaultTheme = (): Theme => {
  const theme =
    (localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Theme) || Theme.LIGHT
  document.body.className = theme
  return theme
}

const ThemeProvider = (props: { children: ReactNode }) => {
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
