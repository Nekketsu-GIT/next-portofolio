"use client"

import styles from './article.module.scss'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import { useMemo, useState } from 'react'
import { ArticleModel } from '@/lib/model'
import { urlForImage } from '../../../sanity/lib/image'
import { client } from '../../../sanity/lib/client'


const Article =  ({slug} : {slug: string}) => {

    const [article, setArticle] = useState<ArticleModel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState <Error | null>(null);


    useMemo(async () => {
        try {
            const article = await getArticle(slug);
            setArticle(article);
        } catch (error : any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [slug]);

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
                    src={urlForImage(article.mainImage)?.url() || ''}
                    alt={article.title}
                    fill

                />
            </div>
            <div className={styles.article_meta}>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                <p>{article.categories.map((category:any) => category.title).join(', ')}</p>
            </div>
            <div className={styles.article_body}>
                <PortableText value={article.body} />
            </div>
        </article>
    )
}

const getArticle = async (slug: string) => {




    const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        publishedAt,
        mainImage,
        categories,
        body
    }`
    const article = await client.fetch(query, {slug})
    return article
}


export default Article
    

