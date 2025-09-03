import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoomList from "../../pages/ChatRoomList/ChatRoomList";
import ChatRoom from "../../pages/chatRoom/chatRoom";

function ChatRouter() {
  return (
    <Routes>
      <Route path="/" element={<ChatRoomList />} />
      <Route path="/room/:roomId" element={<ChatRoom />} />
    </Routes>
  );
}

export default ChatRouter;
