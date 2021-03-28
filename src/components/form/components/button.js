import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../lib/theme";

const StyledButton = styled.button`
  font-size: ${theme.fontSize[1]};
  background-color: ${theme.colors.primary};
  width: 100%;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius[0]};
  border: 1px;
  padding: ${theme.spacing[2]};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }
`;

const Button = ({ onClick, type, children }) => (
  <StyledButton onClick={onClick} type={type}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
};

export default Button;
