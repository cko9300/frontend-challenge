import { screen, render } from "@testing-library/react";
import Graph from ".";

const comments = [
  {
    name: "Peter",
    email: "peter@gmail.com",
    rating: 3,
    comment: "Ok",
    timestamp: "28/03/2021, 19:37:48",
  },
  {
    name: "John",
    email: "john@gmail.com",
    rating: 5,
    comment: "Great app!",
    timestamp: "27/03/2021, 19:37:48",
  },
];

test("renders a bar chart", () => {
  render(<Graph comments={comments} width={700} />);
  const XAxisLabel = screen.getByText("Ratings");
  const YAxisLabel = screen.getByText("Count");
  expect(XAxisLabel).toBeInTheDocument();
  expect(YAxisLabel).toBeInTheDocument();
});
