import { instance } from "../utils/instance";

export const signupRequest = async (data) => {
  try {
    const response = await instance.post("/user/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getUserByUsername = async (username) => {
  try {
    const response = await instance.get(`/user/name/${username}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
