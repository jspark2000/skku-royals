import 'express-session';

declare module 'express-session' {
  interface SessionData {
    authed: boolean;
    key: string;
    userInfo: {
      userNickname: string;
      profileUrl: string;
      role: string;
      teamRole: string;
    };
  }
}
