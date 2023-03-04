export enum Role {
  User = "User",
  Manager = "Manager",
  Admin = "Admin",
}

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: Role[]
}

export interface UserSchema {
  authData?: User

  _inited: boolean
}
