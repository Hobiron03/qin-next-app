import { Container } from "@mantine/core";
import { NextPage } from "next";

import { Layout } from "src/component/Layout";
import { Portfolio } from "src/component/portfolio";

const PortfolioPage: NextPage = () => {
  return (
    <Layout title="Portfolio">
      <Container size="md">
        <Portfolio isShowAll></Portfolio>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
