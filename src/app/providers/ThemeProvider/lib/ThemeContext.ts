import React from "react"

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  BLOOD = "app_blood_theme",
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({})
