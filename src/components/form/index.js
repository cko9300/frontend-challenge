import { useState } from "react";
import styled from "styled-components";

import Button from "./components/button";
import Label from "./components/label";
import TextArea from "./components/text-area";
import TextInput from "./components/text-input";
import Ratings from "./components/ratings";
import { Error } from "../text";
import theme from "../../lib/theme";

const StyledForm = styled.form`
  flex: 1;
  margin-bottom: ${theme.spacing[3]};
  .field {
    margin-bottom: ${theme.spacing[3]};
  }
  .fieldset {
    border: ${theme.colors.primary} 1px solid;
    border-radius: ${theme.borderRadius[0]};
    margin-bottom: ${theme.spacing[3]};
    box-shadow: 1px 1px;
    background-color: ${theme.colors.white};
  }
`;

const initialFormState = {
  name: "",
  email: "",
  rating: null,
  comment: "",
};

const initialErrorState = {
  name: "",
  email: "",
  rating: "",
  comment: "",
};

const FeedbackForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [errorState, setErrorState] = useState(initialErrorState);

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

  const validateForm = ({ name, email, rating, comment }) => {
    setErrorState({
      name: !name ? "Please include name" : "",
      email: !email ? "Please include email" : "",
      rating: !rating ? "Please include rating" : "",
      comment: !comment ? "Please include comment" : "",
    });
    return !name || !email || !rating || !comment;
  };

  return (
    <StyledForm
      data-testid="feedback-form"
      aria-label="feedback-form"
      onSubmit={(e) => {
        e.preventDefault();
        const hasError = validateForm(formState);
        if (!hasError) {
          onSubmit(formState);
        }
      }}
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
      <div className="field">
        <Button type="submit">Submit feedback</Button>
      </div>
      {Object.keys(errorState).map((error) => (
        <Error key={error}>{errorState[error]}</Error>
      ))}
    </StyledForm>
  );
};

export default FeedbackForm;
