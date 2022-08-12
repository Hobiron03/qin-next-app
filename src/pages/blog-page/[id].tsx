import { Container } from "@mantine/core";
import ContentLayout from "src/component/ContentLayout";
import Layout from "src/component/Layout";

const BlogDetail = () => {
  return (
    <Layout title="Detail">
      <Container size="md">
        <ContentLayout title="This is Header">
          <div>BlogDetail</div>
        </ContentLayout>
      </Container>
    </Layout>
  );
};

export default BlogDetail;
