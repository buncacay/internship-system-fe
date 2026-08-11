import { create } from "zustand";
import { authApi } from "../api/authApi";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

const getInitialAuth = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const storedUser = localStorage.getItem(USER_KEY);

  return {
    token,
    user: storedUser ? JSON.parse(storedUser) : null,
  };
};

export const useAuthStore = create((set) => ({
  ...getInitialAuth(),

  login: async ({ username, password }) => {
    const data = await authApi.login({ username, password });
    const token = data.token || data.accessToken || data.data?.token;
    const user = data.user || data.data?.user || null;

    if (!token) {
      throw new Error("Login response does not contain an authentication token.");
    }

    localStorage.setItem(TOKEN_KEY, token);
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));

    set({ token, user });
    return { token, user };
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    set({ token: null, user: null });
  },
}));
