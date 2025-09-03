import { css } from "@emotion/react";

export const messageBox = (isMine) => css`
  margin: 12px;
  display: flex;
  justify-content: ${isMine ? "flex-end" : "flex-start"};
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: #1a1919ff;
`;

export const start = css`
  width: 45px;
  padding-top: 4px;
  display: flex;
  align-items: flex-start;
`;

export const profileImg = css`
  width: 100%;
  height: 45px;
  border-radius: 20px;
  overflow: hidden;
  object-fit: cover;
`;

export const end = (isMine) => css`
  display: flex;
  flex-direction: column;
  align-items: ${isMine ? "flex-end" : "flex-start"};
  gap: 2px;
`;

export const sender = css`
  font-size: 14px;
`;

export const message = css`
  max-width: 210px;
  text-align: left;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: white;
`;
