import client from "../../../shares/services/client";
import { ApiResponse } from "../../../shares/models/api-response";
import { LoginResponse } from "../models/sign-in/login-response";

export const authService = {

   login: async (command) => {
    const response = await client.post("Auth/login", command);

    const apiResponse = new ApiResponse(response.data);

    if (apiResponse.data) {
      apiResponse.data = new LoginResponse(apiResponse.data);
    }

    return apiResponse;
  },

  register: async (command) => {
    const response = await client.post("Auth/register", command);
    const apiResponse = new ApiResponse(response.data);
    if (apiResponse.data){
      return apiResponse;
    }
    return null;
  }

};