'use client'

import styles from './articles.module.scss'
import { createClient } from "next-sanity";
import { ArticleModel } from '../../lib/model'
import ArticleCard from '../../components/articles/article-card/article-card'
import { useState } from 'react'
import Pagination from '../pagination/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

type queryParams = {
    filters ?:{
        category: string;
    }
    order: 'desc' | 'asc';
    offset: number;
    limit: number;
}

type ArticlesContainerProps = {
    categories: string[];
    articlesByPage: number;
}


const Articles = ({ categories, articlesByPage }: ArticlesContainerProps) => {


    const [articles, setArticles] = useState<ArticleModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [queryParams, setQueryParams] = useState<queryParams>({
        order: 'desc',
        offset: 0,
        limit: articlesByPage
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
                <h1>No articles</h1>
            </div>
        )
    }

    /* if there are articles, then we show them */
    /* show filter options and pagination */
    return (
        <div className={styles.articles_container}>
            <div className={styles.filters}>
                <div className={styles.categories}>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={'all'}
                        onChange={(e) => {
                            setQueryParams({
                                ...queryParams,
                                filters: e.target.value == "all" ? undefined : {
                                    ...queryParams.filters,
                                    category: e.target.value
                                }
                            });
                            setLoading(true);
                        }}
                    >
                        <option value="all">All</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    
                </div>
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
                    >
                        <FontAwesomeIcon icon={queryParams.order == "asc" ? faArrowDown : faArrowUp} />
                    </button>
                </div>
            </div>
            <div className={styles.articles}>
                {articles.map((article) => (
                    <ArticleCard
                        key={article.slug.current}
                        title={article.title}
                        description={article.description}
                        link={`/blog/${article.slug.current}`}  
                    />
                ))}
            </div>
            <Pagination
                current={queryParams.offset/articlesByPage +1}
                total={Number((total/articlesByPage).toFixed(0)) +1}
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


type ArticlesResult = {
    articles : ArticleModel[];
    total: number;
}
const getArticles = async ({filters, order, offset, limit}: queryParams) : Promise<ArticlesResult> => {

    const sanityClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: true,
        apiVersion: '2023-03-07',
    });


    const articles : ArticleModel[] = await sanityClient.fetch(`
        *[_type == "article" ${
            filters ? `&& category == ${filters.category}` : ''
        }] | order(publishedAt ${order}) [${offset}..${offset + limit}] {
            title,
            slug,
            description,
        }
    `);


    const total : number = (await  sanityClient.fetch(
        `
        *[_type == "article" ${
            filters ? `&& category == ${filters.category}` : ''
        }] {
            title,
            slug,
            description,
        }
    `)).length;
    

    const result :ArticlesResult = {
        articles: articles,
        total: total
    };

    return result
}






export default Articles;