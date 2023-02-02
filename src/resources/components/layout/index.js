import { Outlet, useNavigate } from "react-router-dom";
import HomeBanner from "../../../components/HomeBanner";
import TopNav from "../../../components/TopNav";
import Footer from "../../../components/Footer";

const Layout = () => {
   const navigate = useNavigate()
   return (
      <>
         <TopNav 
            handleHome={() => navigate('/')} 
            handleContact={() => navigate('/contact')} 
         />
         <HomeBanner />
         <Outlet />
         <Footer />
      </>
   );
}

export default Layout;