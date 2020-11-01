let accessToken: string = null;

export const getAccesToken = () => {
  return accessToken;
};

export const setAccessToken = (token: string) => {
  accessToken = token;
};
