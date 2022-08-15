import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import type { ButtonClick, ButtonType, Size } from "../../types";
import { BUTTON_TYPE, COLOR, SIZE } from "../../common/constants/global";
import * as Styled from "./styles";

type Props = {
  name?: string;
  size?: Size;
  type?: ButtonType;
  onClick?: (ButtonClick & MouseEventHandler<HTMLButtonElement>) | undefined;
  children?: React.ReactNode;
};

const buttonSize = {
  xs: "5px 14px",
  s: "6px 16px",
  m: "7px 18px",
  l: "8px 20px",
  xl: "9px 22px",
  xxl: "10px 24px",
};

const Button: React.FC<Props> = ({
  children,
  size = SIZE.M,
  name,
  type = BUTTON_TYPE.PRIMARY,
  onClick,
}) => {
  const defaultProps = {
    name,
    onClick: onClick,
    size: buttonSize[size as keyof typeof buttonSize],
  };

  return (
    <>
      {type === BUTTON_TYPE.PRIMARY && (
        <Styled.PrimaryButton {...defaultProps}>
          {children}
        </Styled.PrimaryButton>
      )}
      {type === BUTTON_TYPE.CRITICAL && (
        <Styled.CriticalButton {...defaultProps}>
          {children}
        </Styled.CriticalButton>
      )}
      {type === BUTTON_TYPE.GHOST && (
        <Styled.GhostButton {...defaultProps}>{children}</Styled.GhostButton>
      )}
      {type === BUTTON_TYPE.OUTLINE && (
        <Styled.OutlineButton {...defaultProps}>
          {children}
        </Styled.OutlineButton>
      )}
    </>
  );
};

export default React.memo(Button);
