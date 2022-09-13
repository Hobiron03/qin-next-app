import { GetStaticProps, NextPage } from "next";
import { Container, Text, ThemeIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandFacebook, IconRss } from "@tabler/icons";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Client } from "twitter-api-sdk";
import Link from "next/link";

import { useMediaQuery } from "src/lib/mantine";
import Layout from "src/component/Layout";
import Blog from "src/pages-component/Blog";
import Portfolio from "src/pages-component/Portfolio";
import Github from "src/component/Github";
import Twitter from "src/component/Twitter";
import { client } from "src/lib/client";
import BlogContent from "src/pages-component/Blog/BlogContent";

type Blog = {
  title: string;
  body: string;
};
type Tweets = {
  tweets: Array<{
    author_id: string;
    created_at: string;
    id: string;
    text: string;
  }>;
};
type User = {
  id: string;
  name: string;
  profile_image_url: string;
  username: string;
};

type Props = {
  blogData: MicroCMSListResponse<Blog>;
  tweets: Tweets;
  user: User;
};

const Home: NextPage<Props> = (props) => {
  const largerThanSm = useMediaQuery("sm");

  console.log(props);

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
        {props.blogData.contents?.map((content) => {
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

export const getStaticProps = async () => {
  const blogData = await client.getList({ endpoint: "blogs" });
  const twitterClient = new Client(process.env.BEARER_TOKEN!);
  const tweets = await twitterClient.tweets.usersIdTweets(
    process.env.TWITTER_USER_ID!,
    {
      "tweet.fields": ["author_id", "created_at"],
    }
  );
  const user = await twitterClient.users.findUsersById({
    ids: ["1567884047552225282"],
    "user.fields": ["id", "name", "profile_image_url", "username"],
  });
  return {
    props: {
      blogData,
      tweets: tweets.data,
      user: user.data[0],
    },
    revalidate: 100,
  };
};

export default Home;
