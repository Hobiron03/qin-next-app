import { NextPage } from "next";
import ContentLayout from "src/component/ContentLayout";
import BlogContent from "src/pages-component/Blog/BlogContent";
import { Blog } from "src/types/Blog";

const BlogData: Array<Blog> = [
  {
    title: "This is Header",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header3",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header4",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header5",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
];

const Blog: NextPage = () => {
  return (
    <ContentLayout title="Blog" buttonTitle="View All">
      <div>
        {BlogData.map((blog, index) => {
          return (
            <BlogContent
              key={index}
              title={blog.title}
              description={blog.description}
              created_at={blog.created_at}
            />
          );
        })}
      </div>
    </ContentLayout>
  );
};

export default Blog;
