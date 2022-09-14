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
            Kamikami IT University
          </Text>
          <Text weight={400} size={16} className="mt-6">
            ITエンジニア。関西の大学卒。大学プログラミングを勉強し、新卒でY!に入社。
          </Text>
        </ContentLayout>
      </Container>
    </Layout>
  );
};

export default AboutPage;
