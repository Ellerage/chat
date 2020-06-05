import { getApiUrl } from "./get-api-url"
import { getToken } from "./get-token"

export const getUser = async (): Promise<any> => {
  const data = await (
    await fetch(getApiUrl("auth/me"), {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    })
  ).json()

  const user = await data
  console.log(user)
  return await user
}
