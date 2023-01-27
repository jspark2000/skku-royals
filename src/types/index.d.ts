import 'express-session';

declare module 'express-session' {
  interface SessionData {
    authed: boolean;
    key: string;
    userInfo: {
      userNickname: string;
      profileURL: string;
      role: string;
    };
  }
}
