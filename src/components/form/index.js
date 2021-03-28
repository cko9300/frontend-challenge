import { useState } from "react";
import styled from "styled-components";

import Button from "./components/button";
import Label from "./components/label";
import TextArea from "./components/text-area";
import TextInput from "./components/text-input";
import Ratings from "./components/ratings";
import theme from "../../lib/theme";

const StyledForm = styled.form`
  width: 100%;
  .fieldset {
    margin-bottom: ${theme.spacing[3]};
  }
`;

const initialFormState = {
  name: "",
  email: "",
  rating: null,
  comment: "",
};

const FeedbackForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e, rating) => {
    e.preventDefault();

    const fieldChange = rating
      ? { rating }
      : { [e.target.name]: e.target.value };

    setFormState({
      ...formState,
      ...fieldChange,
    });
  };

  return (
    <StyledForm
      aria-labelledby="feedback-form"
      onSubmit={() => onSubmit(formState)}
    >
      <div className="fieldset">
        <Label htmlFor="name">Name</Label>
        <TextInput
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="fieldset">
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          type="email"
        />
      </div>
      <div className="fieldset">
        <Label htmlFor="rating">Rating</Label>
        <Ratings
          name="rating"
          rating={formState.rating}
          onClick={handleChange}
        />
      </div>
      <div className="fieldset">
        <Label htmlFor="comment">Comment</Label>
        <TextArea
          id="comment"
          name="comment"
          value={formState.comment}
          onChange={handleChange}
          maxLength={150}
        />
      </div>
      <Button type="submit">Submit comment</Button>
    </StyledForm>
  );
};

export default FeedbackForm;
