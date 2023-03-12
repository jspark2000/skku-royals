import { Role } from '@prisma/client'

export class AuthenticatedUser {
  #userKey: string
  #userNickname: string
  #userProfileUrl: string
  #role: Role

  constructor(userKey: string, userNickname: string, userProfileUrl: string) {
    this.#userKey = userKey
    this.#userNickname = userNickname
    this.#userProfileUrl = userProfileUrl
  }

  get userKey() {
    return this.#userKey
  }

  get userNickname() {
    return this.#userNickname
  }

  get userProfileUrl() {
    return this.#userProfileUrl
  }

  get role() {
    return this.#role
  }

  set role(role: Role) {
    this.#role = role
  }

  isAdmin(): boolean {
    return this.#role === Role.Admin
  }

  isSuperAdmin(): boolean {
    return this.#role === Role.SuperAdmin
  }
}
