import { Container } from "@mantine/core";
import { NextPage } from "next";
import Layout from "src/component/Layout";

const PortfolioPage: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container title="Portfolio">
        <p>Portfolio</p>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
