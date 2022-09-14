import { FC } from "react";
import { Text } from "@mantine/core";
import { Avatar } from "@mantine/core";

import { Tweet } from "src/types/Tweets";
import { TwitterUser } from "src/types/TwitterUser";
import ContentLayout from "src/component/ContentLayout";

type Props = {
  tweets: Array<Tweet>;
  user: TwitterUser;
};

const Twitter: FC<Props> = (props) => {
  return (
    <ContentLayout title="Twitter" buttonTitle="View on Twitter" isHalf>
      <div>
        {props.tweets?.map((tweet, index) => {
          return (
            <div className="flex mt-5 mr-2" key={index}>
              <Avatar src={props.user.profile_image_url} />
              <div>
                <div className="flex items-center ml-2">
                  <Text size={16} weight="bold">
                    {props.user.name}
                  </Text>
                  <Text size={12} weight="bold" color="gray" className="ml-2">
                    {props.user.username}・
                    {`${tweet.created_at.slice(5, 7)}月${tweet.created_at.slice(
                      8,
                      10
                    )}日`}
                  </Text>
                </div>
                <Text size={12} className="ml-2">
                  {tweet.text}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </ContentLayout>
  );
};

export default Twitter;
