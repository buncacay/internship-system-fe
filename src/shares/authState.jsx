import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  user: null,

  login: async (data) => {
    set({
      token: "abc123",
      user: {
        email: data.email,
      },
    });
    return true;
  },

  logout: () => {
    set({
      token: null,
      user: null,
    });
  },
}));
