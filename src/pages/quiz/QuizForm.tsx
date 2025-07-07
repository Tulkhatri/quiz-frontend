import { NavLink } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";

const QuizForm = () => {
  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>Add Quiz</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/quiz">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form>
          <div className="input-wrapper">
            <label>
              Quiz Title <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Enter Title" />
          </div>
          <div className="input-wrapper">
            <label>
              Category <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Select Category" />
          </div>
          <div className="input-wrapper">
            <label>
              Level <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Select Level" />
          </div>
          <div className="input-wrapper">
            <label>
              Time(Minute) <span className="required">*</span>
            </label>
            <InputTypeText type="text" placeholder="Enter time in minute" />
            <Button buttonName="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizForm;
