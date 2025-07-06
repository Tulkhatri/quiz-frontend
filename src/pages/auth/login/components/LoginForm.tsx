import { useState } from "react";
import Button from "../../../../components/button";
import InputTypeText from "../../../../components/text-field";
import TogglePassword from "../../../../components/toggle-password";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const [inputType, setInputType] = useState<string>("password");
  return (
    <form>
      <InputTypeText type="email" placeholder="Email" />
      <div className="position-relative">
        <InputTypeText type={inputType} placeholder="Password" />
        <TogglePassword inputType={inputType} setInputType={setInputType} />
      </div>
      <Button buttonName="Login" />
      <div className="btn-link">
        <p>Don't have an account</p>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </div>
    </form>
  );
};

export default LoginForm;
