import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReadingProgress from "@/components/reading-progress";
import AnimatedSection from "@/components/animated-section";
import StructuredData from "@/components/structured-data";

// Add reading time calculation
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

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
  const readingTime = calculateReadingTime(post.body.raw);

  const articleData = {
    title: post.title,
    description: post.description,
    image: post.image_cover,
    datePublished: post.date,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.url}`,
    author: {
      name: "José DACOSTA",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };

  return (
    <>
      <StructuredData type="article" data={articleData} />
      <ReadingProgress />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <AnimatedSection>
          <nav className="mb-8 text-sm">
            <Link href="/blog" className="text-yaleblue hover:text-darkgoldenrod transition-colors">
              ← Back to Blog
            </Link>
          </nav>
        </AnimatedSection>

        {/* Article Header */}
        <AnimatedSection delay={0.1}>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <time className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>

              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {post.description}
            </p>

            {post.image_cover && (
              <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={post.image_cover}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>
        </AnimatedSection>

        {/* Article Content */}
        <AnimatedSection delay={0.2}>
          <article className="prose prose-lg prose-gray dark:prose-invert max-w-none
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-a:text-yaleblue hover:prose-a:text-darkgoldenrod
            prose-code:text-yaleblue prose-code:bg-gray-100 dark:prose-code:bg-gray-800
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700">
            <Content />
          </article>
        </AnimatedSection>
      </div>
    </>
  );
}

