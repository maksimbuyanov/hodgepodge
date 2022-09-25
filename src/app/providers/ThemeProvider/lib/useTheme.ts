import { useContext } from "react"
import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from "./ThemeContext"

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme = Theme.LIGHT, setTheme = () => {} } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme)
    setTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
