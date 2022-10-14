import { FC, Suspense, useEffect } from "react"
import "./styles/index.scss"
import { classNames } from "@/shared/lib"
import { AppRouter } from "@/app/providers/router"
import { Navbar } from "@/widgets/Navbar"
import { Sidebar } from "@/widgets/Sidebar"
import { Loader } from "@/features/Loader"
import { useDispatch } from "react-redux"
import { userActions } from "@/entities/User"

const App: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
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
