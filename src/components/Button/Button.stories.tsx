import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { BUTTON_TYPE, SIZE } from "../common/constants/global";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select", options: Object.values(BUTTON_TYPE) },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default = ({ ...props }) => {
  return (
    <>
      <Button {...props} onClick={() => alert("Hello!")}>
        Click on me!
      </Button>
    </>
  );
};

export const Types = ({ ...props }) => {
  const types = [
    BUTTON_TYPE.PRIMARY,
    BUTTON_TYPE.OUTLINE,
    BUTTON_TYPE.CRITICAL,
    BUTTON_TYPE.GHOST,
  ];

  return types.map((type) => {
    return (
      <div style={{ margin: "5px" }}>
        <Button {...props} type={type}>
          {type}
        </Button>
      </div>
    );
  });
};

export const Sizes = ({ ...props }) => {
  const sizes = [SIZE.XS, SIZE.S, SIZE.M, SIZE.L, SIZE.XL, SIZE.XXL];
  return sizes.map((size) => {
    return (
      <Button {...props} size={size}>
        {size}
      </Button>
    );
  });
};
