import styled from "styled-components";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import PropTypes from "prop-types";

import theme from "../../lib/theme";

const GraphContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: ${theme.spacing[2]};
  @media (min-width: ${theme.breakpoints.medium}) {
    margin-left: ${theme.spacing[2]};
  }
`;

const maxRating = 5;

const Graph = ({ comments, width }) => {
  const ratingsCount = new Array(maxRating).fill(0).map((_, index) => ({
    rating: index + 1,
    count: 0,
  }));

  comments.map(({ rating }) => (ratingsCount[rating - 1].count += 1));

  return (
    <GraphContainer data-testid="graph-container">
      <ResponsiveContainer width={width || "100%"} height={350}>
        <BarChart
          data={ratingsCount}
          margin={{ top: 16, right: 16, left: 0, bottom: 0 }}
        >
          <Bar
            dataKey="count"
            fill={`${theme.colors.secondary}`}
            xAxisId="ratings"
          />
          <XAxis
            dataKey="rating"
            xAxisId="ratings"
            tick={{
              fontSize: `${theme.fontSize[0]}`,
              color: `${theme.colors.primary}`,
            }}
            label={{
              value: "Ratings",
              position: "insideBottom",
              style: {
                fontSize: `${theme.fontSize[0]}`,
                color: `${theme.colors.primary}`,
              },
            }}
          />
          <YAxis
            dataKey="count"
            tick={{
              fontSize: `${theme.fontSize[0]}`,
              color: `${theme.colors.primary}`,
            }}
            label={{
              value: "Count",
              position: "middle",
              angle: -90,
              style: {
                fontSize: `${theme.fontSize[0]}`,
                color: `${theme.colors.primary}`,
              },
            }}
            allowDecimals={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

Graph.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
      timestamp: PropTypes.string,
    })
  ),
  width: PropTypes.number, //Only for testing purpose
};

Graph.defaultProps = {
  comments: [],
  width: null,
};

export default Graph;
