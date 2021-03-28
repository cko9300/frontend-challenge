import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import theme from "./lib/theme";
import { H1 } from "./components/text";
import Form from "./components/form";
import Graph from "./components/graph";
import Comments from "./components/comments";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${theme.spacing[4]};
`;

function App() {
  const [comments, setComments] = useState([]);

  const onSubmit = (data) => {
    const timestamp = new Date().toISOString();
    setComments([{ ...data, timestamp }, ...comments]);
  };

  return (
    <div className="App">
      <H1>Customer Feedback Page</H1>
      <Layout>
        <Form onSubmit={onSubmit} />
        <Graph />
        <Comments comments={comments} />
      </Layout>
    </div>
  );
}

export default App;
