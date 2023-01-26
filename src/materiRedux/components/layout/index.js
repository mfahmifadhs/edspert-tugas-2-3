import { Outlet, useNavigate } from "react-router-dom";
import HomeBanner from "../../../components/HomeBanner";
import TopNav from "../../../components/TopNav";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopNav
        handleHome={() => navigate("/")}
        handleCheckout={() => navigate("/checkout")}
      />
      <HomeBanner />
      <Outlet />
    </>
  );
};

export default Layout;
