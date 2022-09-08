import { Container } from "@mantine/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ContentLayout from "src/component/ContentLayout";
import Layout from "src/component/Layout";
import { client } from "src/lib/client";

type Blog = {
  title: string;
  body: string;
};

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogDetail: NextPage<Props> = (props) => {
  return (
    <Layout title="Detail">
      <Container size="md">
        <ContentLayout title={props.title}>
          <div>{props.createdAt}</div>
          <div>{props.title}</div>
        </ContentLayout>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async (ctx: any) => {
  if (!ctx.params) {
    return { notFountd: true };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog-page/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export default BlogDetail;
