import client from "./client";
import {ApiResponse} from "../shares/models/api-response";
import {LoginResponse} from "../pages/authentications/sign-in/models/login-response";

export const authApi = {

   login: async (command) => {
    const response = await client.post("Auth/login", command);

    const apiResponse = new ApiResponse(response.data);

    if (apiResponse.data) {
      apiResponse.data = new LoginResponse(apiResponse.data);
    }

    return apiResponse;
  },
};
