import type { InputTyPeText } from "../type";

const InputTypeText = ({ placeholder, type }: InputTyPeText) => {
  return (
    <>
      <input type={type} placeholder={placeholder} />
    </>
  );
};

export default InputTypeText;
