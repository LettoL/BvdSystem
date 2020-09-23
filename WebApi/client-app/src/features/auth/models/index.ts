import {createEffect, createEvent, createStore} from "effector";

export const changeLogin = createEvent<string>()
export const changePassword = createEvent<string>()
export const signIn = createEvent()

export const fxAuth = createEffect(async (login: string, password: string) => {
  console.log(login, password)
})

export const $login = createStore<string>('')
  .on(changeLogin, (_, login) => login)

export const $password = createStore<string>('')
  .on(changePassword, (_, password) => password)

