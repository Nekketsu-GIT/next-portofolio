import { SchemaTypeDefinition } from 'sanity'



// category schema

const Category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}

// article schema
const Article = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      categories0: 'categories.0.title',
      categories1: 'categories.1.title',
      categories2: 'categories.2.title',
      categories3: 'categories.3.title',
    },
    prepare(selection: { [x: string]: any; title: any; media: any }) {
      const { title, media, ...categories } = selection
      return {
        title,
        media,
        subtitle: Object.values(categories).filter(Boolean).join(', '),
      }
    }
  }
}

// project schema
const Project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'previewUrl',
      title: 'Preview URL',
      type: 'url',
    },
    {
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      tags0: 'tags.0',
      tags1: 'tags.1',
      tags2: 'tags.2',
      tags3: 'tags.3',
    },
    prepare(selection: { [x: string]: any; title: any; media: any }) {
      const { title, media, ...tags } = selection
      return {
        title,
        media,
        subtitle: Object.values(tags).filter(Boolean).join(', '),
      }
    }
  }
}

// tags schema
const Tags = {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Category,
    Article,
    Project,
    Tags,
  ],
}




