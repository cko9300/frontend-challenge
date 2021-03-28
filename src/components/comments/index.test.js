import { render, screen, within } from "@testing-library/react";
import Comments from ".";

const comments = [
  {
    name: "Peter",
    email: "peter@gmail.com",
    rating: 3,
    comment: "Ok",
  },
  {
    name: "John",
    email: "john@gmail.com",
    rating: 5,
    comment: "Great app!",
  },
];

test("renders No Comments when there are no comments", () => {
  render(<Comments />);
  const noComments = screen.getByText("No Comments");
  expect(noComments).toBeInTheDocument();
});

test("renders list of comments", () => {
  render(<Comments comments={comments} />);
  expect(screen.queryByText("No Comments")).not.toBeInTheDocument();
  const allComments = screen.getAllByRole("listitem");
  expect(allComments).toHaveLength(2);
});

test("renders ratings, name and comment for each comment", () => {
  render(<Comments comments={comments} />);
  const allComments = screen.getAllByRole("listitem");
  const firstComment = within(allComments[0]);
  expect(firstComment.getByText(comments[0].name)).toBeInTheDocument();
  expect(firstComment.getByText(comments[0].comment)).toBeInTheDocument();
  expect(firstComment.getAllByTitle("star-full")).toHaveLength(3);
  const secondComment = within(allComments[1]);
  expect(secondComment.getByText(comments[1].name)).toBeInTheDocument();
  expect(secondComment.getByText(comments[1].comment)).toBeInTheDocument();
  expect(secondComment.getAllByTitle("star-full")).toHaveLength(5);
});
