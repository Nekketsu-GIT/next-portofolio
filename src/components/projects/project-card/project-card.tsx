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
            <Image src={image} alt="avatar of the author" width={200} height={150} />
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>
                        {tag}
                    </div>
                ))}
            </div>
            <Link href={link}>
                Visit
            </Link>
        </div>
    )
}

export default ProjectCard