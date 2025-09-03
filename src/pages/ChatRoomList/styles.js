import { css } from "@emotion/react";

export const container = css`
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  background-color: #f9f9f9ff;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 3px 0px rgba(148, 148, 148, 0.8);
  position: relative;
`;

export const header = css`
  height: 80px;
  padding: 15px 10px 15px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9ff;
  position: sticky;
  top: 0; /* 화면의 맨 위에 고정 */
  z-index: 10; /* 다른 요소 위에 보이도록 설정 */

  & > h2 {
    padding: 0;
    margin: 0;
    font-size: 22px;
  }

  & > p {
    display: flex;
    align-items: center;
    & > svg {
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: #ff714b;
      }
    }
  }
`;

export const chatListContainer = css`
  margin: 0;
  padding: 0 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #b4b4b4ff #f9f9f9ff;

  & > li {
    padding: 10px;
    padding-right: 0;
    display: flex;
    justify-content: space-between;

    &:hover {
      background-color: #eeeeeeff;
    }
  }
`;

export const start = css`
  max-width: 280px;
  display: flex;
  justify-content: center;
  gap: 10px;
  overflow-x: visible;
`;

export const profileImg = css`
  width: 50px;
  height: 50px;
  border-radius: 18px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const end = css`
  /* min-width: 15px; */
  height: 20px;
  padding: 3px 6px;
  box-sizing: border-box;
  color: white;
  font-size: 13px;
  border-radius: 15px;
  background-color: #f8582bff;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0;
    padding: 0;
  }
`;
