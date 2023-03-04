import { StateSchema } from "@/app/providers/StoreProvider"
import { createSelector } from "@reduxjs/toolkit"
import { Role } from "../types/user"

export const getUserRole = (state: StateSchema): Role[] | undefined =>
  state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRole, roles =>
  Boolean(roles?.includes(Role.Admin))
)
export const isUserManager = createSelector(getUserRole, roles =>
  Boolean(roles?.includes(Role.Manager))
)
