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

//index page で表示する最大数
const DisplayNum = 6;

const Portfolio: FC<{ buttonTitle?: string; isShowAll?: true }> = (props) => {
  return (
    <ContentLayout title="Portfolio" buttonTitle={props.buttonTitle}>
      <Grid justify="space-between">
        {props.isShowAll
          ? PortfolioData.map((portfolio, index) => {
              return (
                <Grid.Col xs={12} sm={6} md={6} lg={4} key={portfolio.id}>
                  <PortfolioContent
                    id={portfolio.id}
                    image={portfolio.image}
                    title={portfolio.title}
                    description={portfolio.description}
                    created_at={portfolio.created_at}
                  />
                </Grid.Col>
              );
            })
          : PortfolioData.map((portfolio, index) => {
              return index + 1 <= DisplayNum ? (
                <Grid.Col xs={12} sm={6} md={6} lg={4} key={portfolio.id}>
                  <PortfolioContent
                    id={portfolio.id}
                    image={portfolio.image}
                    title={portfolio.title}
                    description={portfolio.description}
                    created_at={portfolio.created_at}
                  />
                </Grid.Col>
              ) : undefined;
            })}
      </Grid>
    </ContentLayout>
  );
};

export default Portfolio;
