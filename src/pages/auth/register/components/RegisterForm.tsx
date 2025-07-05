import { useState } from "react";
import Button from "../../../../components/button";
import InputTypeText from "../../../../components/text-field";
import TogglePassword from "../../../../components/toggle-password";
import ButtonLink from "../../../../components/button-link";

const RegisterForm = () => {
  const [inputType, setInputType] = useState<string>("password");
  return (
    <form>
      <InputTypeText type="text" placeholder="Full Name" />
      <InputTypeText type="email" placeholder="Email" />
      <div className="position-relative">
        <InputTypeText type={inputType} placeholder="Password" />
        <TogglePassword inputType={inputType} setInputType={setInputType} />
      </div>
      <div className="position-relative">
        <InputTypeText type={inputType} placeholder="Confirm Password" />
        <TogglePassword inputType={inputType} setInputType={setInputType} />
      </div>
      <Button buttonName="Register" />
      <div className="btn-link">
        <p>Already register an account</p>
        <ButtonLink buttonName="Back to Login" navigation="/login" />
      </div>
    </form>
  );
};

export default RegisterForm;
