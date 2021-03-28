import styled from "styled-components";
import theme from "../../lib/theme";

const H1 = styled.h1`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[3]};
  text-align: center;
  @media (min-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize[6]};
  }
`;

const H2 = styled.h2`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[3]};
`;

const H3 = styled.h3`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[1]};
  margin: 0;
`;

const P = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[0]};
  margin: 0;
`;

const Error = styled(P)`
  color: ${theme.colors.warning};
`;

export { H1, H2, H3, P, Error };
