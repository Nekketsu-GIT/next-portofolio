import styles from './service.module.scss';
import Image from 'next/image';

type ServiceProps = {
    title: string;
    description: string;
    image: string;
};

const Service = ({ title, description, image }: ServiceProps) => {

    return (
        <div className={styles.service}>
            <div className={styles.image}>
                <Image src={image} alt={title} fill />
            </div>
            <div className={styles.content}>
                <h3>
                    {title}
                </h3>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>  
    );

};

export default Service;