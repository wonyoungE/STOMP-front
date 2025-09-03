import { instance } from "../utils/instance";

export const getChatRoomListRequest = async () => {
  try {
    const response = await instance.get("/chat/list");
    return response;
  } catch (error) {
    return error.response;
  }
};
