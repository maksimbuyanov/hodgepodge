import { useContext } from "react"
import { Theme, ThemeContext } from "./ThemeContext"
import { LOCAL_STORAGE_THEM_KEY } from "@/shared/const/localStorage"

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme = Theme.LIGHT, setTheme = () => {} } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme)
    setTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
