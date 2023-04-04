import styles from './project-card.module.scss'
import Link from 'next/link'    
import Image from 'next/image'

type Props = {
    title: string
    image: string
    tags: string[]
    links?:{
        sourceCode?: string
        liveDemo?: string
    }
}

const ProjectCard = ({ title,image, tags, links }: Props) => {
    return (
        <div className={styles.project_card}>
            <div className={styles.content}>
                <div className={styles.title}>
                <h3>{title}</h3>
                </div>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <div className={styles.image}>
                    <Image src={image} alt={title} fill/>
                </div>
            </div>
            <hr/>
            <div className={styles.links}>
                {links?.sourceCode && (
                    <Link href={links.sourceCode}>Source code</Link>
                )}
                {links?.liveDemo && (
                    <Link href={links.liveDemo}>Live demo</Link>
                )}
                {!links?.liveDemo && !links?.sourceCode && (
                    <span>Coming soon</span>
                )}
            </div>
        </div>
    )
}

export default ProjectCard