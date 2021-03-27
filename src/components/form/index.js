// import { useState } from "react";

// const initialFormState = {
//   name: "",
//   email: "",
//   rating: null,
//   comment: "",
// };

const FeedbackForm = () => {
  // const [formState, setFormState] = useState(initialFormState);
  return (
    <form aria-labelledby="feedback-form" onSubmit={() => {}}>
      <button>Submit feedback</button>
    </form>
  );
};

export default FeedbackForm;
