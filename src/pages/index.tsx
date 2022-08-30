import type { GetStaticProps, NextPage } from "next";
import { Container, Text, ThemeIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandFacebook, IconRss } from "@tabler/icons";

import { useMediaQuery } from "src/lib/mantine";
import Layout from "src/component/Layout";
import Blog from "src/pages-component/Blog";
import Portfolio from "src/pages-component/Portfolio";
import Github from "src/component/Github";
import Twitter from "src/component/Twitter";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import BlogContent from "src/pages-component/Blog/BlogContent";
import Link from "next/link";

type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Layout title="Home">
      <div className="w-full bg-m_pink-6 h-60">
        <Container size="md">
          <div
            className={
              largerThanSm
                ? "flex justify-between items-center h-60"
                : "flex flex-col justify-center h-60"
            }
          >
            <div>
              <Text weight={700} size={largerThanSm ? 36 : 28} color="white">
                Shimabu IT University
              </Text>
              <Text weight={700} size="xs" color="white">
                しまぶーのポートフォリオのためのページです
              </Text>
            </div>

            <div className={largerThanSm ? "space-x-2" : "space-x-2 mt-10"}>
              <ThemeIcon radius="xl" size="md" variant="filled" color="dark">
                <IconBrandTwitter />
              </ThemeIcon>
              <ThemeIcon radius="xl" size="md" variant="filled" color="dark">
                <IconBrandFacebook />
              </ThemeIcon>
              <ThemeIcon radius="xl" size="md" variant="filled" color="dark">
                <IconRss />
              </ThemeIcon>
            </div>
          </div>
        </Container>
      </div>

      <Container size="md">
        <Blog buttonTitle="View All" />
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
        <Portfolio buttonTitle="View All" />

        <div className={largerThanSm ? "flex justify-between" : undefined}>
          <Github />
          <Twitter />
        </div>
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

export default Home;
