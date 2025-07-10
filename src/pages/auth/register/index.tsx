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
    </div>
  );
};

export default Register;
