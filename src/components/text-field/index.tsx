import type { InputTyPeText } from "../type";
import { forwardRef } from "react";
const InputTypeText = forwardRef<HTMLInputElement, InputTyPeText>(
  ({ placeholder, type, ...rest }, ref) => {
    return <input ref={ref} type={type} placeholder={placeholder} {...rest} />;
  }
);

export default InputTypeText;
