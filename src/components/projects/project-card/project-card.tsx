import styles from './project-card.module.scss'
import Link from 'next/link'    
import Image from 'next/image'

type Props = {
    title: string
    image: string
    tags: string[]
    link: string
}

const ProjectCard = ({ title,image, tags, link }: Props) => {
    return (
        <div className={styles.project_card}>
            <div className={styles.image}>
                <Image src={image} alt="avatar of the author" fill />
            </div>
            <div className={styles.title}>
                <Link href={link}>
                    {title}
                </Link>
            </div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>
                        {tag}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectCard