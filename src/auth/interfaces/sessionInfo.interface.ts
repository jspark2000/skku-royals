export interface SessionInfo {
  authed: boolean;
  key: string;
  userInfo: {
    userNickname: string;
    profileURL: string;
    role: string;
  };
}
