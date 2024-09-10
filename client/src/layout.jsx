import PropTypes from "prop-types";
import { Header } from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="w-full flex flex-col items-center">
        <main className="w-full max-w-[1240px]">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
