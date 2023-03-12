import styles from './article-card.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
    title: string
    description: string
    link: string
}

const ArticleCard = ({ title, description, link }: Props) => {
    return (
        <div className={styles.article_card}>
            <div className={styles.article_card_title}>
                {title}
            </div>
            <div className={styles.article_card_description}>
                {description}
            </div>
            <div className={styles.article_card_link}>
                <Link href={link}>
                    Read more <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    )
}

export default ArticleCard