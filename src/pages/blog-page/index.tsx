import { Container } from "@mantine/core";
import { GetStaticProps, NextPage } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";

import Layout from "src/component/Layout";
import Blog from "src/pages-component/Blog";
import { client } from "src/lib/client";
import BlogContent from "src/pages-component/Blog/BlogContent";
import Link from "next/link";

type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;

const BlogPage: NextPage<Props> = (props) => {
  return (
    <Layout title="Blog">
      <Container size="md">
        {/* <Blog blogs={props} isShowAll /> */}
        {props.contents?.map((content) => {
          return (
            <Link href={`/blog-page/${content.id}`} key={content.id}>
              <BlogContent
                id={content.id}
                title={content.title}
                description={content.title}
                createdAt={content.createdAt}
              />
            </Link>
          );
        })}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  console.log(data);
  return {
    props: data,
  };
};

export default BlogPage;
