import { NavLink } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";

const QuestionForm = () => {
  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>Add Question</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/question">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form>
          <div className="input-wrapper">
            <label>
              Quiz <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Select Quiz" />
          </div>
          <div className="input-wrapper">
            <label>
              Question <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Enter Question" />
            <Button buttonName="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
