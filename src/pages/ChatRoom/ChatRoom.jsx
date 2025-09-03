import { Client } from "@stomp/stompjs";
import * as s from "./styles";
import SockJS from "sockjs-client";
import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input/Input";
import MessageBox from "../../components/MessageBox/MessageBox";
/** @jsxImportSource @emotion/react */

function ChatRoom() {
  // client 인스턴스 저장
  const client = useRef();
  const [isDisable, setIsDisable] = useState(true);
  const [text, setText] = useState("");
  const [isMine, setIsMine] = useState(true);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("/ws-stomp"),
      reconnectDelay: 5000,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        // 서버가 메시지를 보내는 주소인 '/sub/public'을 구독
        client.subscribe("/sub/public", (message) => {
          // 한 번 열어두면 메세지 계속 받을 수 있음, 실행 로직 짜면 됨
          // 받은 메시지는 JSON이 아니므로 JSON.parse 없이 바로 사용
          console.log("받은 메시지:", message.body);
        });
        // 서버에 메시지를 보낼 때는 '/pub/greeting' 주소로 발행(publish)
        client.publish({
          destination: "/pub/greeting",
          body: "안녕하세요!", // 보낼 메시지 내용
        });
      },
    });

    client.activate();

    // 컴포넌트 unmount시 클라이언트 연결 해제
    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, []);

  // 메세지 보내는 함수
  // 메세지: 객체 형태, sender, content
  const sendMessage = (messageObj) => {
    if (client.current) {
      client.publish({
        destination: "/pub/sendMessage",
        // JSON 형태로 파싱해서 전송
        //  JSON.stringify({ sender: "me", content: "hello" }
        body: JSON.stringify(messageObj),
      });
    }
  };

  const sendBtnOnClickHandler = () => {
    console.log(text);
  };

  useEffect(() => {
    setIsDisable(true);
    if (text.length > 0) {
      setIsDisable(false);
    }
  }, [text]);

  const message1 = {
    sender: "상대방",
    message:
      "어쩌구 저쩌구 샬라샬라 엄청엄청엄청엄청 긴 메세지 보냈음 이제 DB 짜야겠지? ㅎㅎ..  기빨림",
  };

  const message2 = {
    sender: "나",
    message: "하기 시름 하지마!!🫥😑😣✊✊",
  };

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h3>채팅방1</h3>
      </div>
      <div css={s.chatBox}>
        <MessageBox message={message1} isMine={false} />
        <MessageBox message={message2} isMine={true} />
      </div>
      <div css={s.inputContainer}>
        <div css={s.inputBox}>
          <Input text={text} setText={setText} />
        </div>
        <div css={s.btnBox}>
          <button
            css={s.sendBtn(isDisable)}
            onClick={sendBtnOnClickHandler}
            disabled={isDisable}
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
