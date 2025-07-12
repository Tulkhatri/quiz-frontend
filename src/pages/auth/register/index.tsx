import { ToastContainer } from "react-toastify";
import useTitle from "../../../hooks/use-title";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  useTitle("Quiz App | Register");

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="align-left">Register</h2>
        <RegisterForm />
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

export default Register;
