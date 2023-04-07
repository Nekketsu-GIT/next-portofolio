import styles from './article-card.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

type Props = {
    title: string
    description: string
    link: string
    image?: string
    className?: string
}

const ArticleCard = ({ title, description, link, image, className }: Props) => {

    return (
        <div className={styles.article_card + " " + className}>
            {image && (
            <div className={styles.article_card_image}>
                <Image src={image} alt={title} fill/>
            </div>
            )}
            <div className={styles.article_card_content}>
                <h3>{title}</h3>
                <div className="low_contrast">
                    {description.substring(0, 120)}...
                </div>
                <div className={styles.article_card_link}>
                    <Link href={link}>
                        Read more <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard