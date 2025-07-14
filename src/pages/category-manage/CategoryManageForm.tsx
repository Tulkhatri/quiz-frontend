import { NavLink, useLocation, useNavigate } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import type { TypeName } from "../type";
import { useEffect, useState } from "react";
import { categorySave } from "../../services/pages";
import { toast } from "react-toastify";
import Progressing from "../../components/Progressing";

const CategoryManageForm = () => {
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
      const { data } = await categorySave(formData);
      if (data?.status === 200) {
        toast.success(data.message, {
          onClose: () => navigate("/category"),
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
          <h3>Add Category</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/category">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper loader_relative">
            <Progressing loading={loading} />
            <label>
              Category Name <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <InputTypeText
                type="text"
                placeholder="Enter Category Name"
                {...register("name", {
                  required: "Category Name is required",
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

export default CategoryManageForm;
