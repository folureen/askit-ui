import React, { ChangeEventHandler } from "react";
import * as Styled from "./styles";

type Props = {
  name?: string;
  placeholder?: string;
  value?: string;
  options?: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Select: React.FC<Props> = ({
  name,
  placeholder,
  value,
  options,
  onChange,
}) => {
  return (
    <Styled.Select name={name} value={value} placeholder={placeholder}>
      {options &&
        options.map((option) => (
          <Styled.SelectOption key={option}>{option}</Styled.SelectOption>
        ))}
    </Styled.Select>
  );
};

export default Select;
