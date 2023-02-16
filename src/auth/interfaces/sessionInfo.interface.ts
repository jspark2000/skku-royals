export interface SessionInfo {
  access_token: string;
  authed: boolean;
  key: string;
  userInfo: {
    userNickname: string;
    profileUrl: string;
    role: string;
    teamRole: string;
  };
}
