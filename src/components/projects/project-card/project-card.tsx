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

            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.image}>
                <Image src={image} alt="avatar of the author" fill />
            </div>
            <div className={styles.content}>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>
                            {tag}
                        </div>
                    ))}
                </div>
                {(links && (links.sourceCode || links.liveDemo ) )? (
                <div className={styles.links}>
                    {links.sourceCode && (
                        <Link href={links.sourceCode}>
                            Source Code
                        </Link>
                    )}
                    {links.liveDemo && (
                        <Link href={links.liveDemo}>
                                Live Demo
                        </Link>
                    )}
                </div>
                ) : (
                    <div className={styles.coming_soon}>
                        Coming Soon
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard