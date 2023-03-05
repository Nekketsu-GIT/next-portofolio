'use client'

import { Project } from "@/lib/model";
import { createClient, SanityClient } from "next-sanity";
import { useState } from "react";
import ProjectCard from "./project-card/project-card"
import styles from './projects.module.scss'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const Projects = () => {

    const sanityClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: true,
    });

    const [projects, setProjects] = useState<Project[]>([]);
    getProjects(sanityClient).then((projects) => setProjects(projects));
  
    const urlFor = (source: SanityImageSource) => {
        return imageUrlBuilder(sanityClient).image(source);
    }

    return (
        <main>
            <div className="projects">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug.current}
                        title={project.title}
                        tags={project.tags}
                        image={urlFor(project.image).url()}
                        link={project.url}
                    />
                ))}
            </div>
        </main>
    )
}

const getProjects = async (sanityClient: SanityClient) : Promise<Project[]> => {



    const projects : Project[] = await sanityClient.fetch(`
        *[_type == "project"] | order(publishedAt desc) [0..3] {
            title,
            tags,
            image,
            url,
            slug,
        }
    `);
    

    return projects;
}



export default Projects



