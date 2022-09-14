import { Container, Text } from "@mantine/core";
import { FC } from "react";

import { ContentLayout } from "src/component/ContentLayout";
import { Layout } from "src/component/Layout";

const AboutPage: FC = () => {
  return (
    <Layout title="Blog">
      <Container size="md">
        <ContentLayout title="About">
          <Text weight={700} size={22}>
            Shimabu IT University
          </Text>
          <Text weight={400} size={16} className="mt-6">
            ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
          </Text>
        </ContentLayout>
      </Container>
    </Layout>
  );
};

export default AboutPage;
