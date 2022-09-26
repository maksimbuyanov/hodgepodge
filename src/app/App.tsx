import { FC, Suspense } from "react"
import "./styles/index.scss"
import { useTheme } from "./providers/ThemeProvider"
import { classNames } from "@/shared/lib"
import { AppRouter } from "@/app/providers/router"
import { Navbar } from "@/widgets/Navbar"
import { Sidebar } from "@/widgets/Sidebar"
import { Loader } from "@/features/Loader"

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div lang={theme} className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
