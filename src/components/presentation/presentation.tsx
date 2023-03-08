import styles from './presentation.module.scss'
import Image from 'next/image'


type Props = {
    image?: string
    title?: string
    description?: string
    socialMediaLinks: {
        github?: string
        linkedin?: string
        twitter?: string
    }
}

const Presentation = ({ image, title, description, socialMediaLinks }: Props) => {
    return (

        <div className={styles.presentation}>
            <div className={styles.welcome}>
                Welcome to my Portfolio!
            </div>
            <div className={styles.image_and_links}>
                <Image src={image?? '/hacker.png'} alt="avatar of the author" width={100} height={100} />
                <div className={styles.links}>
                    <a href={socialMediaLinks.github}>Github</a>
                    <a href={socialMediaLinks.linkedin}>Linkedin</a>
                    <a href={socialMediaLinks.twitter}>Twitter</a>
                </div>
            </div>
            <h1>{title ?? 'JOB TITLE' }</h1>
            <p 
                dangerouslySetInnerHTML={{ __html: description ?? 'YOUR DESCRIPTION' }}
            />
        </div>


                    
    )
}

export default Presentation