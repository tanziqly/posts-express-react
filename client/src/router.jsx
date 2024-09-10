import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { Home } from "./pages/Home";
import { FullPost } from "./pages/FullPost";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullpost" element={<FullPost />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
