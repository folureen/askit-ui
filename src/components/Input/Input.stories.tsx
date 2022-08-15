import React, { ChangeEventHandler } from "react";
import { ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = () => {
  const [value, setValue] = React.useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return <Input placeholder="Логин" value={value} onChange={handleChange} />;
};
