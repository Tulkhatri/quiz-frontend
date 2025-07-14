import type { InputTypeButton } from "../type";

const Button = ({ buttonName, loading }: InputTypeButton) => {
  return (
    <>
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : buttonName}
      </button>
    </>
  );
};

export default Button;
