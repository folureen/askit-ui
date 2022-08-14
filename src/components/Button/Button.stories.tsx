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
  return (
    <>
      <Button {...props} type={BUTTON_TYPE.PRIMARY}>
        Primary
      </Button>{" "}
      <Button {...props} type={BUTTON_TYPE.OUTLINE}>
        Outline
      </Button>{" "}
      <Button {...props} type={BUTTON_TYPE.CRITICAL}>
        Critical
      </Button>{" "}
      <Button {...props} type={BUTTON_TYPE.GHOST}>
        Ghost
      </Button>
    </>
  );
};

export const Sizes = ({ ...props }) => {
  return (
    <>
      <Button {...props} size={SIZE.S}>
        Size S
      </Button>{" "}
      <Button {...props} size={SIZE.M}>
        Size M
      </Button>{" "}
      <Button {...props} size={SIZE.L}>
        Size L
      </Button>{" "}
      <Button {...props} size={SIZE.XL}>
        Size XL
      </Button>{" "}
      <Button {...props} size={SIZE.XXL}>
        Size XXL
      </Button>
    </>
  );
};
