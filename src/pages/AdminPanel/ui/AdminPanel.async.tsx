import { lazy } from "react"

export const AdminPanelAsync = lazy(async () => await import("./AdminPanel"))
