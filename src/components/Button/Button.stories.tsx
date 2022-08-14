import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default = ({ ...props }) => {
  return <Button {...props}>Default Button</Button>;
};
