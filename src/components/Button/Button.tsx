import React from "react";

type Props = {
  children: number;
};

const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
