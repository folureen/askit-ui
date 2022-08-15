import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("should be rendered", () => {
    render(<Button>Click on me</Button>);
    const button = screen.queryByText(/Click on me/gi);
    expect(button).toBeDefined();
  });

  test("should be called when clicked", () => {
    const handleClick = jest.fn();
    expect(handleClick).toHaveBeenCalledTimes(0);
    render(<Button onClick={handleClick}>Click on me</Button>);
    const button = screen.getByText(/Click on me/gi);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("should be called 10 times", () => {
    const countCalls = 10;
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click on me</Button>);
    const button = screen.getByText(/Click on me/gi);

    for (let i = 0; i < countCalls; i++) {
      fireEvent.click(button);
    }

    expect(handleClick).toHaveBeenCalledTimes(countCalls);
  });
});
