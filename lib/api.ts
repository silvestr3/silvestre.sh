import { env } from "@/env";
import GhostContentAPI from "@tryghost/content-api";

export const blogApi = new GhostContentAPI({
  url: env.BLOG_URL,
  key: env.BLOG_CONTENT_API_KEY,
  version: "v6.0",
});
