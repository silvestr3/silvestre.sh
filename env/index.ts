import z from "zod";

const envSchema = z.object({
  BLOG_URL: z.url(),
  BLOG_CONTENT_API_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
