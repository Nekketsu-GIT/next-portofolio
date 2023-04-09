'use client'

import { ProjectModel } from "@/lib/model";
import { useState } from "react";
import ProjectCard from "./project-card/project-card"
import styles from './projects.module.scss'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

const Projects = () => {

 

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<boolean>(false);

    if (loading) {

        getProjects().then(
            (result) => {
                setProjects(result);
                setLoading(false);
            }
        ).catch((error) => {
            setError(true);
            setLoading(false);
        });

        return <div className={styles.projects}>Loading...</div>
    }

    if (error) {
        return <div className={styles.projects}>Something went wrong</div>
    }

    

  
    return (
        <main>
            <div className={styles.projects}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug.current}
                        title={project.title}
                        tags={project.tags}
                        image={project.imageURL}
                        links={{
                            sourceCode: project.sourceUrl,
                            liveDemo: project.previewUrl,
                        }}
                    />
                ))}
            </div>
        </main>
    )
}

// type projectModel but image as url
type Project = Omit<ProjectModel, 'image'> & {
    imageURL: string;
}


const getProjects = async () : Promise<Project[]> => {

  

    const projects : ProjectModel[] = await client.fetch(`
        *[_type == "project"] | order(publishedAt desc) [0..3] {
            title,
            tags,
            image,
            sourceUrl,
            previewUrl,
            slug,
        }
    `);




    

    

    return projects.map((project) => ({
        ...project,
        imageURL: urlForImage(project.image)?.url() || '',
    }));
    
}



export default Projects



