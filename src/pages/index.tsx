import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";

import { Button, Container } from "@mantine/core";
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
    <Layout>
      <div className="w-full bg-red-400 h-60">
        <Container size="md">
          <div className="bg-pink flex justify-between items-center">
            <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
              <div>{`width: ${width}`}</div>
              <div>{`largerThanXs: ${largerThanXs}`}</div>
              <div>{`largerThanSm: ${largerThanSm}`}</div>
              <div>{`largerThanMd: ${largerThanMd}`}</div>
              <div>{`largerThanLg: ${largerThanLg}`}</div>
              <div>{`largerThanXl: ${largerThanXl}`}</div>
            </div>
            <Button onClick={handleClick} className="mt-4 block">
              Click me!
            </Button>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
