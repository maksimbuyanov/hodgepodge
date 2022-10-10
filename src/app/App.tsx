import { FC, Suspense } from "react"
import "./styles/index.scss"
import { classNames } from "@/shared/lib"
import { AppRouter } from "@/app/providers/router"
import { Navbar } from "@/widgets/Navbar"
import { Sidebar } from "@/widgets/Sidebar"
import { Loader } from "@/features/Loader"

const App: FC = () => {
  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
