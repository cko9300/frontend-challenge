import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as StarEmpty } from "./assets/star-empty.svg";
import { ReactComponent as StarFull } from "./assets/star-full.svg";
import theme from "../../../../lib/theme";

const numberOfStars = 5;

const StyledStar = styled.button`
  border: none;
  background-color: ${theme.colors.transparent};
  display: inline-block;
  text-align: center;
  cursor: pointer;
`;

const HiddenLabel = styled.label`
  display: none;
`;

const Ratings = ({ onClick, name, rating }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const onMouseEnter = (starNumber) => {
    setCurrentRating(starNumber);
  };

  const onMouseLeave = () => {
    setCurrentRating(rating || null);
  };

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  return (
    <div>
      {[...Array(numberOfStars).keys()].map((_, index) => {
        const starNumber = index + 1;
        return (
          <React.Fragment key={starNumber}>
            <HiddenLabel id={`${starNumber}-label`}>
              {starNumber} out of 5
            </HiddenLabel>
            <StyledStar
              id={`ratings-${starNumber}`}
              name={name}
              value={starNumber}
              onMouseEnter={() => onMouseEnter(starNumber)}
              onMouseLeave={onMouseLeave}
              onClick={(e) => onClick(e, starNumber)}
              role="checkbox"
              aria-checked={rating >= starNumber}
              aria-labelledby={`${starNumber}-label`}
            >
              {currentRating >= starNumber ? (
                <StarFull title="star-full" />
              ) : (
                <StarEmpty title="star-empty" />
              )}
            </StyledStar>
          </React.Fragment>
        );
      })}
    </div>
  );
};

Ratings.propTypes = {
  onClick: PropTypes.func,
  rating: PropTypes.number,
};

export default Ratings;
