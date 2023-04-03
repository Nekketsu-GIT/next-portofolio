import styles from './skills.module.scss';

type Props = {
   blocs: {
        name : string;
        skills : string[];
    }[]
};

export const Skills = ({ blocs }: Props) => {
    return (
        <div className={styles.blocs}>
            {blocs.map((bloc, index) => (
                <div key={index} className={styles.bloc}>
                    <h3>{bloc.name} : </h3>
                    <div className={styles.skills}>
                        {bloc.skills.map((skill, index) => (
                            <div key={index} className={styles.skill}>
                                {skill}
                            </div>
                        ))}
                    </div>                                
                </div>
            ))}
        </div>
    );
};