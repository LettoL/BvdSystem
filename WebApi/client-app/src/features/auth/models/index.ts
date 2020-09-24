import {createEffect, createEvent, createStore, sample} from "effector";

export const changeLogin = createEvent<string>()
export const changePassword = createEvent<string>()
export const submitForm = createEvent()

export const fxSignIn = createEffect(async (data: SignInData) => {
  const {login, password} = data
  console.log(login, password)
})

export const $login = createStore<string>('')
  .on(changeLogin, (_, login) => login)

export const $password = createStore<string>('')
  .on(changePassword, (_, password) => password)

sample({
  source: {$login, $password},
  clock: submitForm,
  fn: (data) => ({login: data.$login, password: data.$password}),
  target: fxSignIn
})

interface SignInData {
  login: string
  password: string
}