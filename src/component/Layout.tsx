import Head from "next/head";
import { ReactNode, FC } from "react";

import { Header } from "src/component/Header";
import { Footer } from "src/component/Footer";

type Props = { children: ReactNode; title: string };

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};
