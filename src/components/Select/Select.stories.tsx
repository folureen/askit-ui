import React, { ChangeEventHandler } from "react";
import { ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default = () => {
  const [value, setValue] = React.useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return <Select options={["Первый", "Второй", "Третий", "Четвертый"]} />;
};
