import styles from './article.module.scss'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import { ArticleModel } from '@/lib/model'
import { urlForImage } from '../../../sanity/lib/image'
import BodyContainer from '../BodyContainer/BodyContainer'


const Article =  ({description, title, mainImage, categories, body, publishedAt} : ArticleModel) => {


    return (
        <BodyContainer>
            <article className={styles.article}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.article_image}>
                    <Image
                        src={urlForImage(mainImage)?.url() || ''}
                        alt={title}
                        fill

                    />
                </div>
                <div className={styles.article_meta}>
                    <p>{new Date(publishedAt).toLocaleDateString()}</p>
                    <p>{categories.map((category:any) => category.title).join(', ')}</p>
                </div>
                <div className={styles.article_body}>
                    <PortableText value={body} />
                </div>
            </article>
        </BodyContainer>
    )
}

export default Article
    

