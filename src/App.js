import { useEffect, useState } from "react";
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
  flex-direction: column;
  padding: ${theme.spacing[4]};
  @media (min-width: ${theme.breakpoints.medium}) {
    flex-direction: row;
  }
`;

function App() {
  const storedComments = window.localStorage.getItem(
    "customer-feedback-comments"
  );

  const [comments, setComments] = useState(JSON.parse(storedComments) || []);

  const onSubmit = (data) => {
    const timestamp = new Date().toLocaleString("en-gb");
    setComments([{ ...data, timestamp }, ...comments]);
  };

  useEffect(() => {
    window.localStorage.setItem(
      "customer-feedback-comments",
      JSON.stringify(comments)
    );
  }, [comments]);

  return (
    <div className="App">
      <H1>Customer Feedback Page</H1>
      <Layout>
        <Form onSubmit={onSubmit} />
        <Graph comments={comments} />
        <Comments comments={comments} />
      </Layout>
    </div>
  );
}

export default App;
