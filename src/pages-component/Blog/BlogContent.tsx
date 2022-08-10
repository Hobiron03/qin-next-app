import { Text } from "@mantine/core";
import { FC } from "react";
import { Blog } from "src/types/Blog";

const BlogContent: FC<Blog> = (props) => {
  return (
    <div className="mb-6">
      <Text weight={700} size={22} color="dark">
        {props.title}
      </Text>
      <Text weight={500} size={16}>
        {props.description}
      </Text>
      <Text weight={700} size={12}>
        {props.created_at}
      </Text>
    </div>
  );
};

export default BlogContent;
