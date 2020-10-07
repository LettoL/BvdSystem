import {createEffect} from "effector";
import {LoggedInUser, SignInData, UserRole} from "./types";

export const fxSignIn = createEffect(async (data: SignInData): Promise<LoggedInUser> => {
  const {login, password} = data
  console.log(login, password)

  return {
    id: '1',
    login: login,
    role: UserRole.Admin
  }
})
