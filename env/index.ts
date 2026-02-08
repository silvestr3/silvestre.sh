import z from "zod";

const envSchema = z.object({
  BLOG_URL: z.url(),
  BLOG_CONTENT_API_KEY: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://silvestre.sh"),
});

export const env = envSchema.parse(process.env);
