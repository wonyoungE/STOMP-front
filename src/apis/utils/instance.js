import axios from "axios";

// 백엔드로 보내는 인스턴스 하나 생성
export const instance = axios.create({
  baseURL: "http://localhost:8080",
});
