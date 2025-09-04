import { instance } from "../utils/instance";

export const getChatRoomListRequest = async () => {
  try {
    const response = await instance.get("/chat/room/list");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getChatRoomRequest = async (roomId) => {
  try {
    const response = await instance.get(`/chat/room/${roomId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
