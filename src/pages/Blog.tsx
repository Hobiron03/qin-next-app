import { NextPage } from "next";
import ContentLayout from "src/component/ContentLayout";

const Blog: NextPage = () => {
  return (
    <ContentLayout title="Blog" buttonTitle="View All">
      <p>Blog</p>
    </ContentLayout>
  );
};

export default Blog;
