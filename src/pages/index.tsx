import type { NextPage } from "next";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";

import { Button, Container, Text, ThemeIcon, ActionIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandFacebook, IconRss } from "@tabler/icons";
import Layout from "src/component/Layout";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    console.log("Hello!");
  };

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
            {/* <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
              <div>{`width: ${width}`}</div>
              <div>{`largerThanXs: ${largerThanXs}`}</div>
              <div>{`largerThanSm: ${largerThanSm}`}</div>
              <div>{`largerThanMd: ${largerThanMd}`}</div>
              <div>{`largerThanLg: ${largerThanLg}`}</div>
              <div>{`largerThanXl: ${largerThanXl}`}</div>
            </div>
            <Button onClick={handleClick} className="mt-4 block">
              Click me!
            </Button> */}

            {/* 36 16 */}
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
    </Layout>
  );
};

export default Home;
