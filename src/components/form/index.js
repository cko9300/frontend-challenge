import { useState } from "react";
import styled from "styled-components";

import Button from "./components/button";
import Label from "./components/label";
import TextArea from "./components/text-area";
import TextInput from "./components/text-input";
import Ratings from "./components/ratings";
import theme from "../../lib/theme";

const StyledForm = styled.form`
  flex: 1;
  .field {
    margin-bottom: ${theme.spacing[3]};
  }
  .fieldset {
    border: ${theme.colors.primary} 1px solid;
    border-radius: ${theme.borderRadius[0]};
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
      data-testid="feedback-form"
      aria-labelledby="feedback-form"
      onSubmit={() => onSubmit(formState)}
    >
      <div className="field">
        <Label htmlFor="name">Name</Label>
        <TextInput
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="field">
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          type="email"
        />
      </div>
      <fieldset className="fieldset">
        <Label htmlFor="rating" isLegend>
          Rating
        </Label>
        <Ratings
          name="rating"
          rating={formState.rating}
          onClick={handleChange}
        />
      </fieldset>
      <div className="field">
        <Label htmlFor="comment">Comment</Label>
        <TextArea
          id="comment"
          name="comment"
          value={formState.comment}
          onChange={handleChange}
          maxLength={150}
        />
      </div>
      <Button type="submit">Submit feedback</Button>
    </StyledForm>
  );
};

export default FeedbackForm;
