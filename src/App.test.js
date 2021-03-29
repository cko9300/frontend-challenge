import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
});

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

test("should store new comments in local storage", () => {
  jest
    .spyOn(Date.prototype, "toLocaleString")
    .mockImplementationOnce(() =>
      new Date("2021-03-29T00:00:00.000Z").toLocaleString("en-gb")
    );

  render(<App />);
  userEvent.type(screen.getByLabelText("Name"), "Bob");
  userEvent.type(screen.getByLabelText("Email"), "bob@bob.com");
  userEvent.click(screen.getAllByRole("checkbox")[3]);
  userEvent.type(screen.getByLabelText("Comment"), "Hello");
  fireEvent.submit(screen.getByText("Submit feedback"));

  expect(global.window.localStorage.setItem).toHaveBeenNthCalledWith(
    2,
    "customer-feedback-comments",
    JSON.stringify([
      {
        name: "Bob",
        email: "bob@bob.com",
        rating: 4,
        comment: "Hello",
        timestamp: "29/03/2021, 01:00:00",
      },
    ])
  );
});

test("should fetch stored comments from localStorage", () => {
  render(<App />);
  expect(global.window.localStorage.getItem).toBeCalledWith(
    "customer-feedback-comments"
  );
});
