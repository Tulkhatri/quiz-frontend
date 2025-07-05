import { useNavigate } from "react-router-dom";
import type { InputTypeButtonLink } from "../type";

const ButtonLink = ({ buttonName, navigation }: InputTypeButtonLink) => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate(navigation)}>
        {buttonName}
      </button>
    </>
  );
};

export default ButtonLink;
