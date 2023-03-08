"use client"

import styles from './article.module.scss'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import { useMemo, useState } from 'react'
import { ArticleModel } from '@/lib/model'
import { createClient, SanityClient } from 'next-sanity'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'


const Article =  ({slug} : {slug: string}) => {

    const [article, setArticle] = useState<ArticleModel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState <Error | null>(null);

    const sanityClient = useMemo(() => createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: true,
        apiVersion: '2021-03-25',
    }), []);

    const urlFor = (source: SanityImageSource) => {
        return imageUrlBuilder(sanityClient).image(source);
    }

    useMemo(async () => {
        try {
            const article = await getArticle(sanityClient, slug);
            setArticle(article);
        } catch (error : any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [sanityClient, slug]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong</div>
    }

    if (!article) {
        return <div>Article not found</div>
    }

    return (
        <article className={styles.article}>
            <h1>{article.title}</h1>
            <div className={styles.article_image}>
                <Image
                    src={urlFor(article.mainImage).url()}
                    alt={article.title}
                    fill

                />
            </div>
            <div className={styles.article_meta}>
                <p>{article.publishedAt}</p>
                <p>{article.categories.map((category:any) => category.title).join(', ')}</p>
            </div>
            <div className={styles.article_body}>
                <PortableText value={article.body} />
            </div>
        </article>
    )
}

const getArticle = async (sanityClient: SanityClient, slug: string) => {




    const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        publishedAt,
        mainImage,
        categories,
        body
    }`
    const article = await sanityClient.fetch(query, {slug})
    return article
}


export default Article
    

