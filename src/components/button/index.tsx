import type { InputTypeButton } from "../type";

const Button = ({ buttonName }: InputTypeButton) => {
  return (
    <>
      <button type="button">{buttonName}</button>
    </>
  );
};

export default Button;
