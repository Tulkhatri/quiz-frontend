import type { InputTypeButton } from "../type";

const Button = ({ buttonName }: InputTypeButton) => {
  return (
    <>
      <button type="submit">{buttonName}</button>
    </>
  );
};

export default Button;
