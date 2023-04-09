import Projects from "@/components/projects/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'José DACOSTA - IT Engineer & Fullstack Developer - Projects',
    description: 'I have worked on various projects, including web applications, machine learning models, and DevOps solutions.',
    keywords: 'web development, machine learning, devops, python, javascript, typescript, react, next.js, django, bootstrap, jquery, node.js, laravel, symfony, nest.js, tensorflow, scikit-learn, mongodb, mysql, postgresql, sqlite, git, docker, aws, linux, windows, agile, scrum, tdd, ci/cd, rest, graphql, design patterns, data structures, algorithms',
    manifest: '/manifest.json',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#eeeee' },
      { media: '(prefers-color-scheme: dark)', color: '#222831' },
    ],
    colorScheme: 'dark light'
}

const ProjectsPage = async () => {
    return (
        <Projects />
    )
}

export default ProjectsPage

