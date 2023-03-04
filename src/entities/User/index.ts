export { userActions, userReducer } from "./modal/slice/userSlice"
export type { UserSchema, User } from "./modal/types/user"
export { getUserData } from "./modal/selectors/getUserData/getUserData"
export { getUserInited } from "./modal/selectors/getUserInited/getUserInited"
export {
  isUserAdmin,
  getUserRole,
  isUserManager,
} from "./modal/selectors/getUserRole"
export { Role } from "./modal/types/user"
