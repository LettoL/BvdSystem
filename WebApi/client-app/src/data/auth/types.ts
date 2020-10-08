export interface SignInData {
  login: string
  password: string
}

export interface LoggedInUser {
  id: string
  login: string
  role: UserRole
}

export enum UserRole {
  Admin = 10,
  Manager = 20
}