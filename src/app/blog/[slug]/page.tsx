import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.url === `${slug}`);

  if (!post) {
    return {
      title: "Blog Post Not Found - José DACOSTA",
      description: "This blog post could not be found.",
    };
  }

  // Generate metadata for the post
  return {
    title: `${post.title} - José DACOSTA`,
    description: post.description,
    openGraph: {
      title: `${post.title} - José DACOSTA`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["José DACOSTA"],
      images: [
        {
          url: post.image_cover || "/images/default-blog-image.jpg", // Fallback image if none is provided
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - José DACOSTA`,
      description: post.description,
      images: [post.image_cover || "/images/default-blog-image.jpg"],
    },
  };
}


export default async function SingleArticle({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params

  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) notFound()

  const Content = getMDXComponent(post.body.code)


  return (
    <article className="flex flex-col gap-4">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Content />
    </article>
  );
};

