import { ReactNode, FC } from "react";
import { Button, Text } from "@mantine/core";

type Props = {
  title: string;
  buttonTitle: string;
  isHalf?: true;
  children: ReactNode;
};

const ContentLayout: FC<Props> = (props) => {
  return (
    <div className={props.isHalf ? "m-20 w-8/12" : "m-20"}>
      <Text
        weight={700}
        size={26}
        className="py-6 mb-6 border-solid border-t-0 border-l-0 border-r-0 border-b-1 border-gray-100"
      >
        {props.title}
      </Text>

      <div>{props.children}</div>

      <Button
        color="dark"
        radius="xl"
        size="md"
        className="bg-gray-800 mt-10 flex m-auto"
      >
        {props.buttonTitle}
      </Button>
    </div>
  );
};

export default ContentLayout;
