import { getBlogPost } from "@/sanity/sanity.utils";
import React from "react";

type Props = {
  params: { blogSlug: string };
};

export default async function BlogPage({ params }: Props) {
  const slug = params.blogSlug;
  const blog = await getBlogPost(slug);

  return <div>{blog.name}</div>;
}
