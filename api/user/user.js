import { post } from "../utils/request"

export const loginIn = option => {
  return post("url_base", "/oauth2/login", option)
}
