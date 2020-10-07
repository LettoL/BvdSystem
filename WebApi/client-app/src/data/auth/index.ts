import {createEffect} from "effector";
import { SignInData } from "./types";

export const fxSignIn = createEffect(async (data: SignInData) => {
  const {login, password} = data
  console.log(login, password)
})