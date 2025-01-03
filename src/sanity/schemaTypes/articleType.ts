import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      categories0: "categories.0.title",
      categories1: "categories.1.title",
      categories2: "categories.2.title",
      categories3: "categories.3.title",
    },
    prepare(selection: {
      [x: string]: string | undefined;
      title: string;
      media: string;
    }) {
      const { title, media, ...categories } = selection;
      return {
        title,
        media,
        subtitle: Object.values(categories).filter(Boolean).join(", "),
      };
    },
  },
});
