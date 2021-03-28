import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

test("renders a feedback form", () => {
  render(<Form />);
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();
});

test("renders full stars on click", () => {
  render(<Form />);
  const stars = screen.getAllByRole("checkbox");
  userEvent.click(stars[3]);
  const starEmpty = screen.getAllByTitle("star-empty");
  const starFull = screen.getAllByTitle("star-full");
  expect(starEmpty).toHaveLength(1);
  expect(starFull).toHaveLength(4);
});
