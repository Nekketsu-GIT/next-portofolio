import Link from 'next/link'
import styles from './title.module.scss'


type Props = {
    title: string
    icon? : React.ReactNode
    link?: string
}

const Title = ({ title, icon, link }: Props) => {

    return (
        <div className={styles.title}>
                {icon}
            <div className={styles.title_text}>
                {link ? (
                    <Link href={link}>
                        {title}
                    </Link>
                ) : (
                    title
                )}
            </div>
        </div>
    )
}

export default Title