import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { Home } from "./pages/Home";
import { FullPost } from "./pages/FullPost";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { AddPost } from "./pages/AddPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullpost" element={<FullPost />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
