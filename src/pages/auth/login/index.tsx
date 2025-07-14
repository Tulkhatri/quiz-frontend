import { ToastContainer } from "react-toastify";
import useTitle from "../../../hooks/use-title";
import LoginForm from "./components/LoginForm";

const Login = () => {
  useTitle("Quiz App | Login");
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="align-left">Login</h2>
        <LoginForm />
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
    </div>
  );
};

export default Login;
