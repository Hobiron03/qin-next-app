import { FC, useCallback } from "react";
import { Grid } from "@mantine/core";
import { useRouter } from "next/router";

import { ContentLayout } from "src/component/ContentLayout";
import { PortfolioData } from "src/types/Portfolio";
import PortfolioContent from "src/pages-component/portfolio/PortfolioContent";

const PortfolioData: Array<PortfolioData> = [
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

export const Portfolio: FC<{ buttonTitle?: string; isShowAll?: true }> = (
  props
) => {
  const router = useRouter();

  const onClickPortfolioButton = useCallback(() => {
    router.push("/portfolio-page");
  }, [router]);
  return (
    <ContentLayout
      title="Portfolio"
      buttonTitle={props.buttonTitle}
      onClickButton={onClickPortfolioButton}
    >
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
