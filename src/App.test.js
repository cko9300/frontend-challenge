import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders h1, form, comments and graph", () => {
  render(<App />);
  const formElement = screen.getByRole("form");
  const commentsElement = screen.getByRole("list");
  const graphElement = screen.getByTestId("graph-container");
  expect(formElement).toBeInTheDocument();
  expect(commentsElement).toBeInTheDocument();
  expect(graphElement).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Customer Feedback Page"
  );
});
