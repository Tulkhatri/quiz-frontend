import { useState } from "react";
import Button from "../../../../components/button";
import InputTypeText from "../../../../components/text-field";
import TogglePassword from "../../../../components/toggle-password";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../../services/auth/Auth";
import { useAuth } from "../../../../contexts/AuthContext";

interface InputForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [inputType, setInputType] = useState<string>("password");
  const [loading, setLoading] = useState(false);
  const { setUserData } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();

  const onSubmit = async (formData: InputForm) => {
    setLoading(true);

    try {
      const { data } = await loginUser(formData);

      const userData = {
        token: data?.token,
        role: data?.role,
      };
      setUserData(userData);
      if (data?.status === 200) {
        window.localStorage.setItem("token", data?.token);
        toast.success(data.message, {
          onClose: () => navigate("/"),
          autoClose: 1000,
        });
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false); // always reset loading
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button buttonName="Login" loading={loading} />
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
