import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "qin-kamikami",
  apiKey: process.env.API_KEY,
});
