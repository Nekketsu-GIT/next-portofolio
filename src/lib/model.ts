import type { Image } from 'sanity'

export type ArticleCardModel = {
    title: string,
    description: string,
    mainImage: Image,
    slug: {
      current: string
    }
}

export type ArticleModel = {
    title: string,
    description: string,
    body: any,
    slug: {
        current: string
    },
    mainImage: Image,
    publishedAt: string,
    categories: {
        title: string,
        slug: {
            current: string
        }
    }[],
}
  
export type ProjectModel = {
    title: string,
    tags: string[],
    previewUrl : string,
    sourceUrl: string,
    image: Image,
    slug: {
        current: string
    }
}