'use client'

import styles from './articles.module.scss'
import { createClient, SanityClient } from "next-sanity";
import { ArticleModel } from '../../lib/model'
import ArticleCard from '../../components/articles/article-card/article-card'
import { useState } from 'react'
import Pagination from '../pagination/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url'


type queryParams = {
    filters ?:{
        category: string;
    }
    order: 'desc' | 'asc';
    offset: number;
    limit: number;
}

type ArticlesContainerProps = {
    categories: {
        title: string;
        slug: string;
    }[];
    articlesByPage: number;
}


const Articles = ({ categories, articlesByPage }: ArticlesContainerProps) => {


    const [articles, setArticles] = useState<ArticleResult[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [queryParams, setQueryParams] = useState<queryParams>({
        order: 'desc',
        offset: 0,
        limit: articlesByPage-1
    });



    /* if loading is true, then we fetch the articles */
    if (loading) {
        getArticles(queryParams).then((result) => {

            setArticles(result.articles);
            setTotal(result.total)
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setError(true);
            setLoading(false);
        }
        )

        return (
            <div className={styles.articles}>
                <h1>Loading...</h1>
            </div>
        )
    }

    /* if error is true, then we show an error message */
    if (error) {
        return (
            <div className={styles.articles}>
                <h1>Error</h1>
            </div>
        )
    }

    /* if there are no articles, then we show a message */
    if (articles.length === 0) {
        return (
            <div className={styles.articles}>
                <h1>No articles yet</h1>
            </div>
        )
    }

    /* if there are articles, then we show them */
    /* show filter options and pagination */
    return (
        <div className={styles.articles}>
            <div className={styles.filters}>
               {/*  <div className={styles.categories}>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={queryParams.filters?.category || "all"}
                        onChange={(e) => {
                            setQueryParams({
                                ...queryParams,
                                filters: e.target.value == "all" ? undefined : {  
                                    category: e.target.value
                                }
                            });
                            setLoading(true);
                        }}
                    >
                        <option value="all">All</option>
                        {categories.map((category) => (
                            <option key={category.slug} value={category.slug}>{category.title}</option>
                        ))}
                    </select>
                    
                </div> */}
                <div className={styles.order}>
                    Date
                    <button
                        onClick={() => {
                            setQueryParams({
                                ...queryParams,
                                order: queryParams.order == "desc" ? "asc" : "desc"
                            });
                            setLoading(true);
                        }}
                        aria-label="Order by date"
                    >
                        <FontAwesomeIcon icon={queryParams.order == "asc" ? faArrowDown : faArrowUp} />
                    </button>
                </div>
            </div>
            <div className={styles.list}>
                {articles.map((article) => (
                    <ArticleCard
                        key={article.slug.current}
                        title={article.title}
                        description={article.description}
                        link={`/blog/${article.slug.current}`}  
                        image={article.imageUrl}
                        className={styles.article_card}
                    />
                ))}
            </div>
            <Pagination
                current={queryParams.offset/articlesByPage +1}
                total={Math.ceil((total/articlesByPage))}
                onChange={(page) => {
                    setQueryParams({
                        ...queryParams,
                        offset: (page-1)*articlesByPage
                    });
                    setLoading(true);
                }}
            />
        </div>
    )
}

type ArticleResult =  Omit<ArticleModel, 'mainImage'> &
    {
        imageUrl: string;
    };


type ArticlesResult = {
    articles :ArticleResult[];
    total: number;
}



const getArticles = async ({filters, order, offset, limit}: queryParams) : Promise<ArticlesResult> => {


    const sanityClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: true,
        apiVersion: '2023-03-07',
    });

    const urlFor = (source: SanityImageSource) => {
        return imageUrlBuilder(sanityClient).image(source);
    }


    const articles : ArticleModel[] = await sanityClient.fetch(`
        *[_type == "article" ${
            filters ? `&& ${filters.category} in categories[]->slug.current` : ''
        }] | order(publishedAt ${order}) [${offset}..${offset + limit}] {
            title,
            slug,
            categories,
            mainImage,
            description,
        }
    `);


    

    const total : number = (await  sanityClient.fetch(
        `
        *[_type == "article" ${
            filters ? `&& ${filters.category} in categories[]->slug.current` : ''
        }] {
            title,
            slug,
            categories[] -> {
                title,
                slug
            },
            description,
        }
    `)).length;
    

    const result :ArticlesResult = {
        articles: articles.map((article) => ({
            ...article,
            imageUrl: urlFor(article.mainImage).url()
        })),
        total: total
    };

    return result
}






export default Articles;

