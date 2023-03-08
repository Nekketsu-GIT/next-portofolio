'use client'

import { ProjectModel } from "@/lib/model";
import { createClient, SanityClient } from "next-sanity";
import { useState } from "react";
import ProjectCard from "./project-card/project-card"
import styles from './projects.module.scss'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong</div>
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
                        link={project.url}
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

    const sanityClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: true,
        apiVersion: '2023-03-07',
    });

    const projects : ProjectModel[] = await sanityClient.fetch(`
        *[_type == "project"] | order(publishedAt desc) [0..3] {
            title,
            tags,
            image,
            url,
            slug,
        }
    `);


    const urlFor = (source: SanityImageSource) => {
        return imageUrlBuilder(sanityClient).image(source);
    }

    

    

    return projects.map((project) => ({
        ...project,
        imageURL: urlFor(project.image).url(),
    }));
    
}



export default Projects



