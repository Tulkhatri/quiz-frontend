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
    </div>
  );
};

export default Login;
