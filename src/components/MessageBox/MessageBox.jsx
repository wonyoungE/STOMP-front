/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import defaultImg from "../../assets/default.png";

function MessageBox({ message, isMine }) {
  return (
    <div css={s.messageBox(isMine)}>
      {/* 내가 보낸 메시지면 우측 정렬, 아니면 좌측 정렬 */}
      {isMine ? (
        <>
          <div css={s.end(isMine)}>
            <span css={s.sender}>{message.sender}</span>
            <div css={s.message}>{message.message}</div>
          </div>
          <div css={s.start}>
            <img src={defaultImg} css={s.profileImg} />
          </div>
        </>
      ) : (
        <>
          <div css={s.start}>
            <img src={defaultImg} css={s.profileImg} />
          </div>
          <div css={s.end(isMine)}>
            <span css={s.sender}>{message.sender}</span>
            <div css={s.message}>{message.message}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default MessageBox;
