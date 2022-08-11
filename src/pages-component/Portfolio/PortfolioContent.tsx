import { Text, Grid } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import { Portfolio } from "src/types/Portfolio";

const PortfolioContent: FC<Portfolio> = (props) => {
  return (
    <div className="mt-6">
      <Image src={props.image} alt="Portfolio" width={314} height={184} />
      <Text weight={700} size={22}>
        {props.title}
      </Text>
      <Text weight={500} size={16} className="mt-3">
        {props.description}
      </Text>
      <Text weight={700} size={12} className="mt-3" color="#909296">
        {props.created_at}
      </Text>
    </div>
  );
};

export default PortfolioContent;
