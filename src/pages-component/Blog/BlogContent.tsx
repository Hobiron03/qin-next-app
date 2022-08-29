import { Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

type BlogContent = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

const BlogContent: FC<BlogContent> = (props) => {
  return (
    <Link href={`/blog-page/${props.id}`}>
      <div className="mb-6 cursor-pointer hover:bg-slate-50">
        <Text weight={700} size={22}>
          {props.title}
        </Text>
        <Text weight={500} size={16}>
          {props.title}
        </Text>
        <Text weight={700} size={12} color="#909296">
          {props.createdAt}
        </Text>
      </div>
    </Link>
  );
};

export default BlogContent;
