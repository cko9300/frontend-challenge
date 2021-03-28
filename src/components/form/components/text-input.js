import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../lib/theme";

const StyledTextInput = styled.input`
  width: 100%;
  border-color: ${theme.colors.primary};
  border-width: 1px;
  box-shadow: 1px 1px;
  border-radius: ${theme.borderRadius[0]};
  padding: ${theme.spacing[1]};
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[1]};
`;

const TextInput = ({ name, id, onChange, value, type }) => (
  <StyledTextInput
    name={name}
    id={id}
    onChange={onChange}
    value={value}
    type={type}
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
