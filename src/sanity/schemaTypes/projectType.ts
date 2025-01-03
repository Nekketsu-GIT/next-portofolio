import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "previewUrl",
      title: "Preview URL",
      type: "url",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source URL",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      tags0: "tags.0",
      tags1: "tags.1",
      tags2: "tags.2",
      tags3: "tags.3",
    },
    prepare(selection: {
      [x: string]: string | undefined;
      title: string;
      media: string;
    }) {
      const { title, media, ...tags } = selection;
      return {
        title,
        media,
        subtitle: Object.values(tags).filter(Boolean).join(", "),
      };
    },
  },
});
