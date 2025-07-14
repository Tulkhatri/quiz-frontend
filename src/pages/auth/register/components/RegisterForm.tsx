import { useState } from "react";
import Button from "../../../../components/button";
import InputTypeText from "../../../../components/text-field";
import TogglePassword from "../../../../components/toggle-password";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userRegister } from "../../../../services/auth/Auth";
import { toast } from "react-toastify";

interface UserRegister {
  name: string;
  email: string;
  password: string | number;
  password_confirmation: string | number;
}

const RegisterForm = () => {
  const [inputType, setInputType] = useState<string>("password");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserRegister>();
  const password = watch("password");
  const onSubmit = async (formData: UserRegister) => {
    setLoading(true);
    try {
      const { data } = await userRegister(formData);
      if (data?.status === 200) {
        toast.success(data.message, {
          onClose: () => navigate("/login"),
          autoClose: 1000,
        });
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-error-wrapper">
        <InputTypeText
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="input-error-wrapper">
        <InputTypeText
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="position-relative">
        <div className="input-error-wrapper">
          <InputTypeText
            type={inputType}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <TogglePassword inputType={inputType} setInputType={setInputType} />
        </div>
      </div>
      <div className="position-relative">
        <div className="input-error-wrapper">
          <InputTypeText
            type={inputType}
            placeholder=" Confirm password"
            {...register("password_confirmation", {
              required: "Password is required",
              validate: (value) =>
                value === password || "Confirm password does not match",
            })}
          />
          {errors.password_confirmation && (
            <p className="error">{errors.password_confirmation?.message}</p>
          )}
          <TogglePassword inputType={inputType} setInputType={setInputType} />
        </div>
      </div>
      <Button buttonName="Register" loading={loading} />
      <div className="btn-link">
        <p>Already register an account</p>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default RegisterForm;
