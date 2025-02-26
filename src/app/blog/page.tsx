import { allPosts } from 'contentlayer/generated'
import Title from "@/components/title";
import Image from "next/legacy/image";
import BlogCard from "@/components/blog-card";

export async function generateMetadata() {
  return {
    title: "José DACOSTA - IT Engineer & Fullstack Developer - Blog",
    description: "Welcome to my blog",
    keywords:
      "web development, mobile development, fullstack, software engineer",
    manifest: "/manifest.json",
  };
}

export default function Blog() {
  return (
    <section className="py-8 w-full flex flex-col gap-8">
      <Title
        title="Welcome to my blog"
        icon={
          <Image
            src="/images/bag.svg"
            alt="arrow"
            width={24}
            height={24}
            className="animate-pulse"
          />
        }
      />

      <div className="flex flex-col gap-8">
        {allPosts.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            description={post.description}
            image={post.image_cover}
            slug={post.url}
          />
        ))}
      </div>
    </section>
  );
}
