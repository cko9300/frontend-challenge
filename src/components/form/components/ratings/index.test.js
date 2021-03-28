import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Ratings from ".";

test("renders 5 checkboxes", () => {
  render(<Ratings />);
  const star = screen.getAllByRole("checkbox");
  expect(star).toHaveLength(5);
});

test("renders 5 empty stars by default", () => {
  render(<Ratings />);
  const starEmpty = screen.getAllByTitle("star-empty");
  expect(starEmpty).toHaveLength(5);
});

test("render full stars up to currently hovered if no values have been selected", () => {
  render(<Ratings />);
  const star = screen.getAllByRole("checkbox");
  userEvent.hover(star[2]);
  const starEmpty = screen.getAllByTitle("star-empty");
  const starFull = screen.getAllByTitle("star-full");
  expect(starEmpty).toHaveLength(2);
  expect(starFull).toHaveLength(3);
  userEvent.unhover(star[2]);
});
