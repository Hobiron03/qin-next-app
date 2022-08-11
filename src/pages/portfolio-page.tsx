import { Container } from "@mantine/core";
import { NextPage } from "next";

import Layout from "src/component/Layout";
import Portfolio from "src/pages-component/Portfolio";

const PortfolioPage: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">
        <Portfolio></Portfolio>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
