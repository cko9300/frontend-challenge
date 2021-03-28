# CKO Frontend Challenge

The goal of this challenge is to create a customer feedback page that allows customers to :

- Write a review for a product (name, email, rating 1 to 5 stars and a ‘comment’
  section).
- See all the comments for the product.
- See a chart showing the trends (you can use any library available for charting).

---

## Technology

The requirement of the challenge is to create the app with React. I've used Create React App to create a skeleton for a basic react app. Most components are created as functional components with hooks.

For styling, I've chosen to experiment with `styled-components` as it is the choice of technology at Checkout and I'd like to familiarise myself with it. All styles are stored in a theme object which is referenced by all styled components, in a similar manner to tokens in a Design System.

For unit testing, I've also chosen to experiment with a new technology, `React Testing Library` as it is more representative of the user's experience.

## Usage

To launch the app locally, run

```
yarn && yarn start
```

The app should be available on `localhost:3000`.

## Improvements

- Form validation: User can be informed if a field does not meet requirements.
-
