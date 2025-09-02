import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "window",
  },
  server: {
    proxy: {
      // "/ws-stomp"로 시작하는 요청 http://localhost:8080으로 보내기
      "/ws-stomp": {
        target: "http://localhost:8080",
        ws: true, // 웹소켓 프록시 설정
      },
    },
  },
});
