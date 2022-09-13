import { FC, useCallback, useEffect } from "react";
import { Button, Text } from "@mantine/core";
import { Avatar } from "@mantine/core";

import ContentLayout from "src/component/ContentLayout";

const Twitter: FC = () => {
  const getTweets = useCallback(async () => {
    const data = await fetch("/api/tweets");
    const json = await data.json();
    console.log(json.data[0]);
  }, []);

  return (
    <ContentLayout title="Twitter" buttonTitle="View on Twitter" isHalf>
      <div>
        {[...Array(3)].map((i, index) => {
          return (
            <div className="flex mt-5 mr-2" key={index}>
              <Avatar />
              <div>
                <div className="flex items-center ml-2">
                  <Text size={16} weight="bold">
                    しまぶーのIT大学
                  </Text>
                  <Text size={12} weight="bold" color="gray" className="ml-2">
                    shimabu_it・5月25日
                  </Text>
                </div>
                <Text size={12} className="ml-2">
                  📣 新サービス「Noway Form」をリリースしました！
                  NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                  FormsでやっていたことがNotionだけで完結します✌✨
                  試しに使っていただけると幸いです😊
                  https://www.noway-form.com/ja
                </Text>
              </div>
            </div>
          );
        })}
        <Button onClick={getTweets}>Get Tweet</Button>
      </div>
    </ContentLayout>
  );
};

export default Twitter;
