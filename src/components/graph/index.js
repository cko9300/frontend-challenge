import styled from "styled-components";

import theme from "../../lib/theme";

const GraphContainer = styled.div`
  flex: 1;
`;

const Graph = () => (
  <GraphContainer data-testid="graph-container">graph</GraphContainer>
);

export default Graph;
