export interface SessionInfo {
  authed: boolean;
  key: string;
  userInfo: {
    userNickname: string;
    profileUrl: string;
    role: string;
  };
}
