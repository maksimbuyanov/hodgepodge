import React, { FC, memo, Suspense, useMemo } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "@/shared/config"
import { Loader } from "@/features/Loader"
import { useSelector } from "react-redux"
import { getUserData } from "@/entities/User"

const AppRouter: FC = () => {
  const isAuth = useSelector(getUserData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      return !(route.authOnly && !isAuth)
    })
  }, [isAuth])
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
