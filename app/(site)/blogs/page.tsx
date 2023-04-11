import React from "react";
import { getBlogPosts } from "@/sanity/sanity.utils";
import { Blog } from "@/types/blogPosts";
import Link from "next/link";
import Image from "next/image";

export default async function Blogs() {
  const blogPosts = await getBlogPosts();
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-6">Blogs</h1>

      <div>
        {blogPosts.map((blog: Blog) => (
          <Link href={`blogs/${blog.slug}`}>
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div
              key={blog._id}
              className="flex justify-around items-center w-auto text-2xl border-2 border-orange-500 rounded p-3 hover:bg-orange-500 duration-150"
            >
              {blog.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
