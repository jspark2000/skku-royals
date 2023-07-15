import { Role } from '@prisma/client'

export class AuthenticatedUser {
  #username: string
  #role: Role

  constructor(username: string) {
    this.#username = username
  }

  get username() {
    return this.#username
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
