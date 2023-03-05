import { SanityImageObject } from "@sanity/image-url/lib/types/types"

export type Article = {
    title: string,
    description: string,
    slug: {
      current: string
    }
}
  
export type Project = {
    title: string,
    tags: string[],
    url : string,
    image: SanityImageObject,
    slug: {
        current: string
    }
}