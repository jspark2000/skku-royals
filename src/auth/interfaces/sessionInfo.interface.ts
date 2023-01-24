export interface SessionInfo {
  authed: boolean;
  userInfo: {
    userKey: string;
    userNickname: string;
    profileURL: string;
    role: string;
  };
}
