import client from "./client";

export const authApi = {
  login: async ({ username, password }) => {
    const response = await client.post("/sign-in", {
      username,
      password,
    });

    return response.data;
  },
};
