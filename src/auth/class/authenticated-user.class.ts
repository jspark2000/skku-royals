import { TeamRole } from '@prisma/client';

export class AuthenticatedUser {
  #userKey: string;
  #userNickname: string;
  #userProfileUrl: string;
  #teamRole: TeamRole;
  #role: string;

  constructor(userKey, userNickname, userProfileUrl, teamRole) {
    this.#userKey = userKey;
    this.#userNickname = userNickname;
    this.#userProfileUrl = userProfileUrl;
    this.#teamRole = teamRole;
  }

  get userKey() {
    return this.#userKey;
  }

  get userNickname() {
    return this.#userNickname;
  }

  get userProfileUrl() {
    return this.#userProfileUrl;
  }

  get teamRole() {
    return this.#teamRole;
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    this.#role = role;
  }

  isAdmin(): boolean {
    return this.#role === 'admin';
  }

  isSuperAdmin(): boolean {
    return this.#role === 'superAdmin';
  }
}
