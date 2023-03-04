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
    image: string
    slug: {
        current: string
    }
}