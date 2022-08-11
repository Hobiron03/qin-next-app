import Head from "next/head";
import { ReactNode, FC } from "react";

import Header from "src/component/Header";
import Footer from "src/component/Footer";

const Layout: FC<{ children: ReactNode; title: string }> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
