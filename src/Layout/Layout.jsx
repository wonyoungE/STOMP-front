import * as s from "./styles";
/** @jsxImportSource @emotion/react */

function Layout({ children }) {
  return <div css={s.container}>{children}</div>;
}

export default Layout;
