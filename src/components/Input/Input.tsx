import React, { ChangeEventHandler } from "react";
import * as Styled from "./styles";

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Styled.Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
