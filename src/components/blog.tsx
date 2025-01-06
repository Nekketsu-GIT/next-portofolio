"use client";

import Title from "@/components/title";
import Image from "next/legacy/image";
import BlogCard from "@/components/blog-card";
import { ArticlesResult } from "@/lib/model";
import { urlFor } from "@/sanity/lib/image";
import { Suspense, use, useEffect } from "react";
import { useState } from "react";
import { getArticles } from "@/lib/api";
import Select from "react-select";

export default function Blog({
  query,
}: {
  query: Promise<
    {
      title: string;
      slug: {
        current: string;
      };
    }[]
  >;
}) {
  const data = use(query);

  return (
    <>
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

        <ArticlesWrapper categories={data} />
      </section>
    </>
  );
}

function ArticlesWrapper({
  categories,
}: {
  categories: {
    title: string;
    slug: {
      current: string;
    };
  }[];
}) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [order, setOrder] = useState<"desc" | "asc">("desc");
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 3;

  const toggleCategory = (
    iterator: ArrayIterator<{ value: string; label: string }>
  ) => {
    const values = Array.from(iterator).map((item) => item.value);
    setSelectedCategories(values);
  };

  const handleNextPage = () => setOffset((prev) => prev + limit);
  const handlePrevPage = () => setOffset((prev) => Math.max(prev - limit, 0));

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Select
          options={categories.map((category) => {
            return {
              value: category.slug.current,
              label: category.title,
            };
          })}
          placeholder="Filter by categories"
          isMulti
          onChange={(newValue) => {
            toggleCategory(newValue.values());
          }}
          className="text-black"
        />
        <button
          className="none underline"
          onClick={() => {
            setOrder(order == "desc" ? "asc" : "desc");
          }}
        >
          {order == "desc" ? "Newest" : "Oldest"}
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Articles
          query={getArticles({
            categories: selectedCategories,
            order,
            offset,
            limit,
          })}
          onTotal={setTotal}
        />
        <div className="flex gap-4 justify-center">
          <button
            onClick={handlePrevPage}
            disabled={offset === 0}
            className={`py-1 px-3 rounded ${
              offset === 0 ? "bg-gray-300" : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
          <button
            disabled={offset + limit >= total}
            onClick={handleNextPage}
            className={`py-1 px-3 rounded ${
              offset + limit >= total ? "bg-gray-300" : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </Suspense>
    </>
  );
}

function Articles({
  query,
  onTotal,
}: {
  query: Promise<ArticlesResult>;
  onTotal: (total: number) => void;
}) {
  const data = use(query);

  useEffect(() => {
    onTotal(data.total);
  }, [data.total, onTotal]);

  return (
    <div className="flex flex-col gap-8">
      {data.articles.map((article) => (
        <BlogCard
          key={article.slug.current}
          title={article.title}
          description={article.description}
          image={urlFor(article.mainImage)?.url()}
          slug={article.slug.current}
        />
      ))}
      {!data.articles.length && <div>No articles found</div>}
    </div>
  );
}
