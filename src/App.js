import styled from "styled-components";

import "./App.css";
import theme from "./lib/theme";
import Form from "./components/form";

const Heading = styled.h1`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize[3]};
  text-align: center;
  @media (min-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize[6]};
  }
`;

const Layout = styled.div`
  display: flex;
  padding: ${theme.spacing[4]};
`;

function App() {
  return (
    <div className="App">
      <Heading>Customer Feedback Page</Heading>
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}

export default App;
