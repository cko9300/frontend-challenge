import { render, screen } from "@testing-library/react";
import Form from ".";

test("renders a feedback form", () => {
  render(<Form />);
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();
});
