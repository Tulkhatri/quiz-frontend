import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Outlet />
      </div>
      <ToastContainer
        className={"f-14-light"}
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MainLayout;
