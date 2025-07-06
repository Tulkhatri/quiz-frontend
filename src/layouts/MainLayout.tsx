import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
