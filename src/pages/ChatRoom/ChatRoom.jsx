import { Client } from "@stomp/stompjs";
import * as s from "./styles";
import SockJS from "sockjs-client";
import { useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */

function ChatRoom() {
  // client 인스턴스 저장
  const client = useRef();

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("/ws-stomp"),
      reconnectDelay: 5000,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log("연결 성공");
        // 구독
        client.subscribe("/sub/public", (message) => {
          console.log("받은 메시지:", JSON.parse(message.body));
        });
      },
    });

    client.current.activate();

    // 컴포넌트 unmount시 클라이언트 연결 해제
    return () => {
      if (client.current) {
        client.current.deactivate();
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

  // 메세지 수신 함수

  return (
    <div css={s.container}>
      <div css={s.chatBox}>채팅창</div>
      <div css={s.inputBox}>입력창</div>
    </div>
  );
}

export default ChatRoom;
