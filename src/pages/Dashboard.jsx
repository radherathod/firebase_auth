import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

import Logo from "./Logo";
import SeachQuery from "./SeachQuery";
import Seller from "./Seller";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Artist from "./Artist";
import Footer from "./Footer";
import FooterSeco from "./FooterSeco";

const Dashboard = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-[10vh_1fr_0.5vh] gap-3 p-4 w-full h-screen bg-gray-100">
      <Logo />
      <SeachQuery />
      <Seller />
      <Sidebar />
      <Feed />
      <Artist />
      <Footer />
      <FooterSeco />
    </div>
  );
};

export default Dashboard;
