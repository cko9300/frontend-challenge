import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../lib/theme";

const StyledLabel = styled.label`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[0]};
  display: block;
  padding-bottom: ${theme.spacing[0]};
  margin-left: ${theme.spacing[3]};
`;

const StyledLegend = styled.legend`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[0]};
  display: block;
  padding-bottom: ${theme.spacing[0]};
`;

const Label = ({ children, htmlFor, isLegend }) =>
  isLegend ? (
    <StyledLegend htmlFor={htmlFor}>{children}</StyledLegend>
  ) : (
    <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
  );

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isLegend: PropTypes.bool,
};

Label.defaultProps = {
  isLegend: false,
};

export default Label;
