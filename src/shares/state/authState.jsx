import { create } from "zustand";
import { authApi } from "../../api/authApi";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const getInitialAuth = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  return {
    accessToken,
    refreshToken,
  };
};

export const useAuthStore = create((set) => ({
  ...getInitialAuth(),

  login: async (command) => {
    const response = await authApi.login(command);

    if (!response.success) {
      throw new Error(response.message || "Login failed.");
    }

    const loginResponse = response.data;

    if (!loginResponse?.accessToken) {
      throw new Error(
        "Login response does not contain an access token."
      );
    }

    localStorage.setItem(
      ACCESS_TOKEN_KEY,
      loginResponse.accessToken
    );

    if (loginResponse.refreshToken) {
      localStorage.setItem(
        REFRESH_TOKEN_KEY,
        loginResponse.refreshToken
      );
    }

    set({
      accessToken: loginResponse.accessToken,
      refreshToken: loginResponse.refreshToken,
    });

    return loginResponse;
  },

  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);

    set({
      accessToken: null,
      refreshToken: null,
    });
  },
}));