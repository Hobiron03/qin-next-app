import ContentLayout from "src/component/ContentLayout";
import { FC } from "react";

import { Portfolio } from "src/types/Portfolio";
import PortfolioContent from "src/pages-component/Portfolio/PortfolioContent";
import { Grid } from "@mantine/core";

const PortfolioData: Array<Portfolio> = [
  {
    id: 1,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 2,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 3,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 4,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 5,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 6,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 6,
    image: "/kingdom.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
];

const Portfolio: FC = () => {
  return (
    <ContentLayout title="Portfolio" buttonTitle="View All">
      <Grid justify="space-between">
        {PortfolioData.map((portfolio) => {
          return (
            <Grid.Col md={6} lg={4} key={portfolio.id}>
              <PortfolioContent
                id={portfolio.id}
                image={portfolio.image}
                title={portfolio.title}
                description={portfolio.description}
                created_at={portfolio.created_at}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </ContentLayout>
  );
};

export default Portfolio;
