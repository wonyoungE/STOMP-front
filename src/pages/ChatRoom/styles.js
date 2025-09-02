import { css } from "@emotion/react";

export const container = css`
  margin: 0 auto;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 3px 0px rgba(148, 148, 148, 0.8);
`;

export const chatBox = css`
  width: 100%;
  height: 400px;
  background-color: skyblue;
`;

export const inputBox = css`
  width: 100%;
  min-height: 100px;
`;
