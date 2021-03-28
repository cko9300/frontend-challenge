import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../lib/theme";

const StyledTextArea = styled.textarea`
  width: 100%;
  border-color: ${theme.colors.primary};
  border-width: 1px;
  border-radius: ${theme.borderRadius[0]};
  padding: ${theme.spacing[1]};
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[1]};
`;

const TextArea = ({ name, id, onChange, value, maxLength }) => (
  <StyledTextArea
    name={name}
    id={id}
    onChange={onChange}
    value={value}
    maxLength={maxLength}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

TextArea.defaultProps = {};

export default TextArea;
