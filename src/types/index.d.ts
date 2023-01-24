import 'express-session';

declare module 'express-session' {
  interface SessionData {
    authed: boolean;
    userInfo: {
      userKey: string;
      userNickname: string;
      profileURL: string;
      role: string;
    };
  }
}
