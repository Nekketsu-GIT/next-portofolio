import Link from 'next/link'
import styles from './title.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


type Props = {
    title: React.ReactNode
    icon? : React.ReactNode
    link?: string
}

const Title = ({ title, icon, link }: Props) => {

    return (
        <div className={styles.title}>
            <div className="iconTitle">
                {icon}
            </div>
            {title}
            {link && (
                <Link href={link} aria-label={`See all ${title}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            )}
        </div>
    )
}

export default Title