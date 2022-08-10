import { NextPage } from "next";
import ContentLayout from "src/component/ContentLayout";

const Github: NextPage = () => {
  return (
    <ContentLayout title="Github" buttonTitle="View on Github" isHalf>
      <p>Github</p>
    </ContentLayout>
  );
};

export default Github;
