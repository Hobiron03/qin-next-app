// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "twitter-api-sdk";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const twitterClient = new Client(process.env.BEARER_TOKEN!);
  try {
    const usersTweets = await twitterClient.tweets.usersIdTweets(
      process.env.TWITTER_USER_ID!,
      {
        "tweet.fields": ["author_id", "created_at"],
      }
    );
    res.status(200).json(usersTweets);
  } catch {
    console.log("error");
    res.status(404);
  }
};

export default handler;
