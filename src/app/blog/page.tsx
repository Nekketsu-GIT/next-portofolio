import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import BlogSearch from '@/components/blog-search'
import Title from '@/components/title'
import Image from 'next/image'

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-12 text-center mb-16">
        <Title
          title="Welcome to my blog"
          icon={
            <Image
              src="/images/bag.svg"
              alt="blog icon"
              width={32}
              height={32}
              className="animate-pulse"
            />
          }
        />
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology, and more.
        </p>
      </section>

      <BlogSearch posts={posts} />

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
