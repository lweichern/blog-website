import { Blog } from "@/types/blogPosts";
import { createClient, groq } from "next-sanity";
import { config } from "./config/client-config";

export async function getBlogPosts(): Promise<Blog[]> {
  return createClient(config).fetch(
    groq`*[_type == "blogPosts"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getBlogPost(slug: string): Promise<Blog> {
  return createClient(config).fetch(
    groq`*[_type == "blogPosts" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}
