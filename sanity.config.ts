import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "u7rw3exz",
  dataset: process.env.NEXT_PUBLIC_VERCEL_ENV!,
  title: "My Blog Website",
  apiVersion: "2023-04-12",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
