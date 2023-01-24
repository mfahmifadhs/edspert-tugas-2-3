import { Outlet } from "react-router-dom";
import HomeBanner from "../../../components/HomeBanner";

const Layout = () => {
  return (
    <>
      <HomeBanner />
      <Outlet />
    </>
  );
};

export default Layout;
