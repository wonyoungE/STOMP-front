import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import ChatRouter from "./router/ChatRouter/ChatRouter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ChatRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
