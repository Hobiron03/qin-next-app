import { NextPage } from "next";
import ContentLayout from "src/component/ContentLayout";

const Twitter: NextPage = () => {
  return (
    <ContentLayout title="Twitter" buttonTitle="View on Twitter" isHalf>
      <p>Twitter</p>
    </ContentLayout>
  );
};

export default Twitter;
