import { FC } from "react"
import { useSelector } from "react-redux"
import { getUserData } from "@/entities/User"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePath } from "@/shared/config"

export const RequireAuth: FC = props => {
  const { children } = props
  const user = useSelector(getUserData)
  const location = useLocation()
  if (!user) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }
  return <>{children}</>
}
