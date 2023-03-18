import { SanityImageObject } from "@sanity/image-url/lib/types/types"

export type ArticleCardModel = {
    title: string,
    description: string,
    mainImage: SanityImageObject,
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
    mainImage: SanityImageObject,
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
    image: SanityImageObject,
    slug: {
        current: string
    }
}