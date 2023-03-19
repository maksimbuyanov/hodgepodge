import { ReactNode, useMemo } from "react"
import { useSelector } from "react-redux"
import { getUserData, getUserRole, Role } from "@/entities/User"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePath } from "@/shared/config"

interface RequireAuthProps {
  roles?: Role[]
  children: ReactNode
}

export const RequireAuth = (props: RequireAuthProps): JSX.Element => {
  const { children, roles } = props
  const user = useSelector(getUserData)
  const userRoles = useSelector(getUserRole)
  const location = useLocation()

  const hasNecessary = useMemo(() => {
    if (!roles) {
      return true
    }
    return roles.some(role => {
      return userRoles?.includes(role)
    })
  }, [roles, userRoles])

  if (!user) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasNecessary) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    )
  }
  return <>{children}</>
}
