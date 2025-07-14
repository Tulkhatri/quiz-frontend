import { NavLink, useLocation, useNavigate } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import type { TypeName } from "../type";
import { useEffect, useState } from "react";
import {levelSave } from "../../services/pages";
import { toast } from "react-toastify";
import Progressing from "../../components/Progressing";

const DifficultyLevelForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const item = location.state?.item;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TypeName>();
  const onSubmit = async (formData: TypeName) => {
    setLoading(true);
    if (item?.id) {
      formData.id = item.id;
    }
    try {
      const { data } = await levelSave(formData);
      if (data?.status === 200) {
        toast.success(data.message, {
          onClose: () => navigate("/level"),
          autoClose: 500,
        });
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (item) {
      setValue("name", item.name);
    }
  }, [item, setValue]);

  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>Add Difficulty Level</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/level">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper loader_relative">
            <Progressing loading={loading} />
            <label>
              Difficulty Level Title <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <InputTypeText
                type="text"
                placeholder="Enter Difficulty Level Name"
                {...register("name", {
                  required: "Difficulty Level is required",
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <Button
              buttonName={item?.id ? "Update" : "Save"}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DifficultyLevelForm;
