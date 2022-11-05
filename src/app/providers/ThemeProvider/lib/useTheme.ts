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
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.BLOOD
        break
      case Theme.BLOOD:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.DARK
        break
    }
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme)
    setTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
