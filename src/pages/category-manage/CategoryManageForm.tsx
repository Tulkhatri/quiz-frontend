import { NavLink } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";

const CategoryManageForm = () => {
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
        <form>
          <div className="input-wrapper">
            <label>
              Category Name <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Enter Category Name" />
            <Button buttonName="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryManageForm;
