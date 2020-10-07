import {createEvent, createStore, forward} from "effector";
import {fxSignIn} from "../../../data/auth";
import { LoggedInUser } from "../../../data/auth/types";

const userLoggedIn = createEvent<LoggedInUser>()

forward({
  from: fxSignIn.doneData,
  to: userLoggedIn
})

export const $user = createStore<LoggedInUser | null>(null)
  .on(userLoggedIn, (_, user) => user)