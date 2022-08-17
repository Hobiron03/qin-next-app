import { ReactNode, FC } from "react";
import { Button, Text } from "@mantine/core";

import { useMediaQuery } from "src/lib/mantine/useMediaQuery";

type Props = {
  title: string;
  buttonTitle?: string;
  onClickButton?: () => void;
  isHalf?: true;
  children: ReactNode;
};

const ContentLayout: FC<Props> = (props) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <div className={props.isHalf && largerThanSm ? "mt-6 w-5/12" : "mt-6"}>
      <Text
        weight={700}
        size={26}
        className="py-6 mb-6 border-solid border-t-0 border-l-0 border-r-0 border-b-1 border-gray-100"
      >
        {props.title}
      </Text>

      <div>{props.children}</div>

      {props.buttonTitle ? (
        <Button
          color="dark"
          radius="xl"
          size="md"
          className="bg-gray-800 mt-10 flex m-auto"
          onClick={props.onClickButton}
        >
          {props.buttonTitle}
        </Button>
      ) : undefined}
    </div>
  );
};

export default ContentLayout;
