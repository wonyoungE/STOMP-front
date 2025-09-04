/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import defaultImg from "../../assets/profileImg/default.png";
import { useNavigate } from "react-router-dom";
import { RiChatNewLine } from "react-icons/ri";
import { getChatRoomListRequest } from "../../apis/chatRoomApis/chatRoomApis";
import { signupRequest } from "../../apis/userApis/userApis";

function ChatRoomList() {
  const navigate = useNavigate();
  // 백엔드 요청 보낼 거임
  const [isLoading, setIsLoading] = useState(true);
  const [chatRooms, setChatRooms] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("user") || "");

  // 유저 회원가입 및 관리 함수
  const handleUser = async () => {
    // 로컬스토리지에 이름이 없을 때 => 회원가입
    // 있으면 로그인된 상태로 취급
    if (!username) {
      const name = prompt("이름을 입력해주세요.");
      if (name) {
        try {
          const resp = await signupRequest({ username: name });
          if (resp.data.status === "success") {
            localStorage.setItem("user", name);
            setUsername(name);
          } else if (resp.data.status === "failed") {
            alert("이름을 다시 입력해주세요.");
            window.location.reload(); // 새로고침
          }
        } catch (error) {
          alert("회원가입 실패: " + error.message);
          window.location.reload();
        }
      } else {
        window.location.reload();
      }
    }
  };

  // 채팅방 목록 불러오기 함수
  const fetchChatRooms = async () => {
    try {
      const resp = await getChatRoomListRequest();
      setChatRooms(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("채팅방 목록 로딩 실패:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 유저 정보 처리
    handleUser();

    // 2. 유저 정보가 있어야 채팅방 목록 로딩
    if (username) {
      fetchChatRooms();
    }
  }, [username]);

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
          chatRooms.map((room) => {
            console.log(room);
            return (
              <li
                key={room.chatRoomId}
                onClick={() => {
                  navigate(`/room/${room.chatRoomId}`);
                }}
              >
                <div css={s.start}>
                  <div css={s.profileImg}>
                    <img src={defaultImg} alt="" />
                  </div>
                  <div>{room.roomName}</div>
                </div>
                {/* <div css={s.end}>
                <p>100</p>
              </div> */}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default ChatRoomList;
