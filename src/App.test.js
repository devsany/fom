import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const input1 = screen.getByRole("textbox");
  expect(input1).toBeInTheDocument();
});
