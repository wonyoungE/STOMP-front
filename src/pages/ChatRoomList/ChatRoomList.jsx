/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import defaultImg from "../../assets/default.png";
import { useNavigate } from "react-router-dom";
import { RiChatNewLine } from "react-icons/ri";
import { getChatRoomListRequest } from "../../apis/chatApis/chatApis";

function ChatRoomList() {
  const navigate = useNavigate();
  // 백엔드 요청 보낼 거임
  const [isLoading, setIsLoading] = useState(true);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    getChatRoomListRequest()
      .then((resp) => {
        console.log(resp);
        setChatRooms(resp.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const newChatOnClickHandler = () => {
    console.log("새 채팅방 개설");
  };

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h2>채팅</h2>
        <p onClick={newChatOnClickHandler}>
          <RiChatNewLine />
        </p>
      </div>
      <ul css={s.chatListContainer}>
        {isLoading ? (
          <p>채팅방 목록 로딩중..</p>
        ) : (
          chatRooms &&
          chatRooms.map((room) => (
            <li
              key={room.roomId}
              onClick={() => {
                navigate(`/room/${room.roomId}`);
              }}
            >
              <div css={s.start}>
                <div css={s.profileImg}>
                  <img src={defaultImg} alt="" />
                </div>
                <div>{room.name}</div>
              </div>
              <div css={s.end}>
                <p>100</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ChatRoomList;
