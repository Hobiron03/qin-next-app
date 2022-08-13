import ContentLayout from "src/component/ContentLayout";
import BlogContent from "src/pages-component/Blog/BlogContent";
import { Blog } from "src/types/Blog";
import { FC, useCallback } from "react";
import { useRouter } from "next/router";
const BlogData: Array<Blog> = [
  {
    id: 1,
    title: "This is Header",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 2,
    title: "This is Header2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 3,
    title: "This is Header3",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 4,
    title: "This is Header4",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 5,
    title: "This is Header5",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 6,
    title: "This is Header6",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 7,
    title: "This is Header7",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    id: 8,
    title: "This is Header8",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
];

//index page で表示する最大数
const DisplayNum = 6;
const Blog: FC<{
  buttonTitle?: string;
  isShowAll?: true;
}> = (props) => {
  const router = useRouter();

  const onClickBlogButton = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  return (
    <ContentLayout
      title="Blog"
      buttonTitle={props.buttonTitle}
      onClickButton={onClickBlogButton}
    >
      {/* TODO: コードのリファクタ */}
      {props.isShowAll
        ? BlogData.map((blog, index) => {
            return (
              <BlogContent
                key={blog.id}
                id={blog.id}
                title={blog.title}
                description={blog.description}
                created_at={blog.created_at}
              />
            );
          })
        : BlogData.map((blog, index) => {
            return index + 1 <= DisplayNum ? (
              <BlogContent
                key={blog.id}
                id={blog.id}
                title={blog.title}
                description={blog.description}
                created_at={blog.created_at}
              />
            ) : undefined;
          })}
    </ContentLayout>
  );
};

export default Blog;
