import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import BlogSearch from "@/components/blog-search";
import Title from "@/components/title";
import { getTranslations } from "next-intl/server";

export default async function Blog() {
  const t = await getTranslations("blog_page");
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-12 text-center mb-16">
        <Title title={t("title")} />
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </section>

      <BlogSearch posts={posts} />

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">{t("empty")}</p>
        </div>
      )}
    </div>
  );
}
