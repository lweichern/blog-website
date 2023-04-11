import { PortableTextBlock } from "sanity";

export type Blog = {
  _createdAt: string;
  _id: string;
  content: PortableTextBlock[];
  image: string;
  name: string;
  slug: string;
  url: string;
};
