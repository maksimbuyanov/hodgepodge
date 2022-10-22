import axios from "axios"
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage"

/* использовал до ts strict режима */
// const emptyUser = JSON.stringify({ session_id: "" })
// JSON.parse(
//   localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? emptyUser
// ),

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? "",
  },
})
