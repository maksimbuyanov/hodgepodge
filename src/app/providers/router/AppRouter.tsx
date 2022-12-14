import React, { FC, memo, Suspense, useCallback } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "@/shared/config"
import { Loader } from "@/features/Loader"
import { AppRoutesProps } from "@/shared/config/routerConfig/routerConfig"
import { RequireAuth } from "@/app/providers/router/RequireAuth"

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const { element, path, authOnly } = route

    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    )
  }, [])
  return (
    <Suspense fallback={<Loader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
