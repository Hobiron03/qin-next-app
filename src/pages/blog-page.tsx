import { Container } from "@mantine/core";
import { NextPage } from "next";

import Layout from "src/component/Layout";
import Blog from "src/pages-component/Blog";

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">
        <Blog isShowAll />
      </Container>
    </Layout>
  );
};

export default BlogPage;
