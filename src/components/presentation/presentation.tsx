import styles from './presentation.module.scss'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';


type Props = {
    image?: string
    title?: string
    description?: string
    socialMediaLinks?: {
        github?: string
        linkedin?: string
        twitter?: string
    }
}


const Presentation = ({ image, title, description, socialMediaLinks }: Props) => {
    return (

        <div className={styles.presentation}>
            <div className={styles.me}>
                <div className={styles.description}>
                    <h1>{title ?? 'JOB TITLE' }</h1>
                    <p 
                        dangerouslySetInnerHTML={{ __html: description ?? 'YOUR DESCRIPTION' }}
                    />
                    <div className={styles.contact_me}>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>Contact me</a>
                    </div>
                </div>
                <div className={styles.image_container}>
                    <div className={styles.circle}>
                        <Image src={image ?? '/hacker.png'} alt="avatar of the author" fill />
                    </div>
                </div>
                { socialMediaLinks && (
                <div className={styles.links}>
                    <SocialIcon url={socialMediaLinks.github } />
                    <SocialIcon url={socialMediaLinks.linkedin }/>
                    <SocialIcon url={socialMediaLinks.twitter }/>
                </div>
                )}
            </div>
            <hr />
        </div>         
    )
}

export default Presentation