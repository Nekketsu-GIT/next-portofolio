import { Suspense } from "react";
import { getCategories } from "@/lib/api";
import Blog from "@/components/blog";

export async function generateMetadata() {
  return {
    title: "José DACOSTA - IT Engineer & Fullstack Developer - Blog",
    description: "Welcome to my blog",
    keywords:
      "web development, mobile development, fullstack, software engineer",
    manifest: "/manifest.json",
  };
}

export default function BlogWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blog query={getCategories()} />
    </Suspense>
  );
}
