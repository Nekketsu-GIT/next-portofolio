import { client } from "@/sanity/lib/client";
import {
  ArticleModel,
  ArticlesResult,
  ProjectModel,
  queryParams,
} from "./model";
import { urlFor } from "@/sanity/lib/image";

export const getArticles = async ({
  categories,
  order,
  offset,
  limit,
}: queryParams): Promise<ArticlesResult> => {
  const categoryFilter =
    categories && categories.length
      ? categories
          .map((category) => `'${category}' in categories[]->slug.current`)
          .join(" || ")
      : "";

  const articlesQuery = `
      *[_type == "article" ${categoryFilter ? `&& ${categoryFilter}` : ""}] 
      | order(publishedAt ${order}) [${offset}..${offset + limit - 1}] {
        title,
        slug,
        categories[]-> { title, slug },
        mainImage,
        description,
      }
    `;

  const articles: ArticleModel[] = await client.fetch(articlesQuery);

  const totalQuery = `
      count(*[_type == "article" ${categoryFilter ? `&& ${categoryFilter}` : ""}])
    `;
  const total: number = await client.fetch(totalQuery);

  const result: ArticlesResult = {
    articles: articles.map((article) => ({
      ...article,
      imageUrl: urlFor(article.mainImage)?.url() || "",
    })),
    total,
  };

  return result;
};

export const getCategories = async (): Promise<
  {
    title: string;
    slug: {
      current: string;
    };
  }[]
> => {
  const categories = await client.fetch(`
          *[_type == "category"] {
          title,
          slug {
                current
            }
          }
      `);

  return categories;
};

export const getLastArticles = async (): Promise<ArticleModel[]> => {
  const lastArcticles = await client.fetch(`
      *[_type == "article"] | order(publishedAt desc) [0..2] {
        title,
        slug,
        description,
        mainImage,
      }
    `);

  return lastArcticles;
};

export const getLastProjects = async (): Promise<ProjectModel[]> => {
  const lastProjects = await client.fetch(`
      *[_type == "project"] | order(publishedAt desc) {
        title,
        tags,
        image,
        summary,
        previewUrl,
        sourceUrl,
        slug,
      }
    `);

  return lastProjects;
};
