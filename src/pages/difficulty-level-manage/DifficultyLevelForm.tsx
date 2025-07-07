import { NavLink } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";

const DifficultyLevelForm = () => {
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
        <form>
          <div className="input-wrapper">
            <label>
              Difficulty Level <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Enter Difficulty Level" />
            <Button buttonName="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DifficultyLevelForm;
