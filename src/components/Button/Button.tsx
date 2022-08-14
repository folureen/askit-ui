import React from "react";
import * as Styled from "./styles";

type Props = {
  children: number;
};

const Button: React.FC<Props> = ({ children }) => {
  return <Styled.Button>{children}</Styled.Button>;
};

export default Button;
