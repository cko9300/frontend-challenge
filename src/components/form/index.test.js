import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

test("renders name, email, ratings and comments fields", () => {
  render(<Form />);
  const name = screen.getByLabelText("Name");
  expect(name).toBeInTheDocument(1);
  const email = screen.getByLabelText("Email");
  expect(email).toBeInTheDocument(1);
  const rating = screen.getByRole("group", { name: /rating/i });
  expect(rating).toBeInTheDocument(1);
  const comment = screen.getByLabelText("Comment");
  expect(comment).toBeInTheDocument(1);
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

test("renders full stars on space key", () => {
  render(<Form />);
  const stars = screen.getAllByRole("checkbox");
  userEvent.type(stars[3], "{space}");
  const starEmpty = screen.getAllByTitle("star-empty");
  const starFull = screen.getAllByTitle("star-full");
  expect(starEmpty).toHaveLength(1);
  expect(starFull).toHaveLength(4);
});

test("renders name value on type", () => {
  const nameValue = "Bob";
  render(<Form />);
  const name = screen.getByLabelText("Name");
  userEvent.type(name, nameValue);
  expect(name).toHaveValue(nameValue);
});

test("renders email value on type", () => {
  const emailValue = "bob@bob.com";
  render(<Form />);
  const email = screen.getByLabelText("Email");
  userEvent.type(email, emailValue);
  expect(email).toHaveValue(emailValue);
});

test("renders comment value on type", () => {
  const commentValue = "Great app!";
  render(<Form />);
  const comment = screen.getByLabelText("Comment");
  userEvent.type(comment, commentValue);
  expect(comment).toHaveValue(commentValue);
});

test("does not allow more than 150 characters on comment", () => {
  const over150 = `Great app!`.repeat(16);
  render(<Form />);
  const comment = screen.getByLabelText("Comment");
  userEvent.type(comment, over150);
  expect(comment).toHaveValue(`Great app!`.repeat(15));
});

test("validate form", () => {
  const onSubmit = jest.fn();
  render(<Form onSubmit={onSubmit} />);
  const button = screen.getByText("Submit feedback");
  fireEvent.submit(button);
  expect(onSubmit).not.toBeCalled();
  expect(screen.getByText("Please include name")).toBeInTheDocument();
  expect(screen.getByText("Please include email")).toBeInTheDocument();
  expect(screen.getByText("Please include rating")).toBeInTheDocument();
  expect(screen.getByText("Please include comment")).toBeInTheDocument();
});

test("submits form", () => {
  const onSubmit = jest.fn();
  render(<Form onSubmit={onSubmit} />);
  const nameValue = "Bob";
  const emailValue = "bob@bob.com";
  const commentValue = "Great app!";
  const name = screen.getByLabelText("Name");
  const email = screen.getByLabelText("Email");
  const stars = screen.getAllByRole("checkbox");
  const comment = screen.getByLabelText("Comment");
  const button = screen.getByText("Submit feedback");
  userEvent.type(name, nameValue);
  userEvent.type(email, emailValue);
  userEvent.click(stars[3]);
  userEvent.type(comment, commentValue);
  fireEvent.submit(button);
  expect(onSubmit).toBeCalledWith({
    name: nameValue,
    email: emailValue,
    rating: 4,
    comment: commentValue,
  });
});
