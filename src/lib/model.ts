import React from "react";
import type { Image } from "sanity";

export type ArticleCardModel = {
  title: string;
  description: string;
  mainImage: Image;
  slug: {
    current: string;
  };
};

export type ArticleModel = {
  title: string;
  description: string;
  body: React.ReactNode;
  slug: {
    current: string;
  };
  mainImage: Image;
  publishedAt: string;
  categories: {
    title: string;
    slug: {
      current: string;
    };
  }[];
};

export type ProjectModel = {
  title: string;
  summary: string;
  tags: string[];
  previewUrl: string;
  sourceUrl: string;
  image: Image;
  slug: {
    current: string;
  };
};

export type queryParams = {
  categories?: string[];
  order: "desc" | "asc";
  offset: number;
  limit: number;
};

export type ArticleResult = ArticleModel & {
  imageUrl: string;
};

export type ArticlesResult = {
  articles: ArticleResult[];
  total: number;
};

export type Category = {
  title: string;
  slug: {
    current: string;
  };
};
