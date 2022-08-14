import React from "react";
import type { ButtonType } from "../../types";
import { BUTTON_TYPE, COLOR } from "../common/constants/global";
import * as Styled from "./styles";

type Props = {
  children?: React.ReactNode;
  type?: ButtonType;
  props?: Record<string, string>;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  children = null,
  type = BUTTON_TYPE.DEFAULT,
  props,
  backgroundColor = COLOR.PRIMARY,
  color = COLOR.WHITE,
  onClick,
}) => {
  const handleClick = React.useCallback(() => {
    onClick && onClick();
  }, []);

  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      color={color}
      {...props}
      onClick={handleClick}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
