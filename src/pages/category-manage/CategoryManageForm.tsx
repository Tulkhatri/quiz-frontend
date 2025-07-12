import { NavLink } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";
import { useForm } from "react-hook-form";

interface InputForm {
  name: string;
}

const CategoryManageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();

  const onSubmit = (data: InputForm) => {
    console.log("Submitted Data:", data);
    // handle save logic here
  };

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
          <div className="input-wrapper">
            <label>
              Category Name <span className="required">*</span>
            </label>
            <InputTypeText
              type="text"
              placeholder="Enter Category Name"
              {...register("name", {
                required: "Category Name is required",
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <Button buttonName="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryManageForm;
