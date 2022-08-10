import { NextPage } from "next";
import ContentLayout from "src/component/ContentLayout";

const Portfolio: NextPage = () => {
  return (
    <ContentLayout title="Portfolio" buttonTitle="View All">
      <p>Portfolio</p>
    </ContentLayout>
  );
};

export default Portfolio;
