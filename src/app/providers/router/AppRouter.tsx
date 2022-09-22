import React, { FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "@/shared/config"
import { Loader } from "@/features/Loader"

const AppRouter: FC = () => (
  <Suspense fallback={Loader}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
)

export default AppRouter
