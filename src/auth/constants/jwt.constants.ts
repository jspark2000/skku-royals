export const ACCESS_TOKEN_EXPIRATION_SEC = 10;
export const REFRESH_TOKEN_EXPIRATION_SEC = 86400;

export const REFRESH_TOKEN_COOKIE_OPTIONS = {
  maxAge: REFRESH_TOKEN_EXPIRATION_SEC * 1000,
  httpOnly: true,
  secure: true,
};

export const AUTH_TYPE = 'Bearer';
