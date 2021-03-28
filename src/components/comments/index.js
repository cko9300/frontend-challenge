import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../lib/theme";
import { ReactComponent as StarFull } from "../../lib/assets/star-full.svg";
import { H2, H3, P } from "../text";

const Container = styled.div`
  flex-basis: 100%;
  margin: ${theme.spacing[4]} 0;
  padding-left: ${theme.spacing[3]};
  border-left: ${theme.colors.secondary} 10px solid;
`;

const CommentsList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledComment = styled.li`
  list-style: none;
  padding: ${theme.spacing[2]} 0;
  border-bottom: 1px ${theme.colors.primary} solid;
  h3,
  p {
    margin-top: ${theme.spacing[0]};
  }
`;

const Comments = ({ comments }) => {
  return (
    <Container data-testid="comments-container">
      <H2>Latest Comments</H2>
      <CommentsList>
        {comments.length > 0 &&
          comments.map(({ name, email, rating, comment, timestamp }, index) => (
            <StyledComment key={`${email}-${index}`}>
              {[...Array(rating).keys()].map((_, index) => (
                <StarFull key={index} title="star-full" />
              ))}
              <H3>{name}</H3>
              <P>{comment}</P>
            </StyledComment>
          ))}
        {comments.length === 0 && <P>No Comments</P>}
      </CommentsList>
    </Container>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
    })
  ),
};

Comments.defaultProps = {
  comments: [],
};

export default Comments;
