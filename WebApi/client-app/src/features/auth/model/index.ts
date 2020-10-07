import {createEvent, createStore, forward, sample} from "effector";
import {fxSignIn} from "../../../data/auth";
import {SignInData} from "../../../data/auth/types";

export const changeLogin = createEvent<string>()
export const changePassword = createEvent<string>()
export const submitForm = createEvent()
export const signIn = createEvent<SignInData>()

export const $login = createStore<string>('')
  .on(changeLogin, (_, login) => login)

export const $password = createStore<string>('')
  .on(changePassword, (_, password) => password)

sample({
  source: {$login, $password},
  clock: submitForm,
  fn: (data) => ({login: data.$login, password: data.$password}),
  target: signIn
})

forward({
  from: signIn,
  to: fxSignIn
})