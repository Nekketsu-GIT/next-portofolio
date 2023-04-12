import Articles from "@/components/articles/articles";
import BodyContainer from "@/components/BodyContainer/BodyContainer";
import { Metadata } from "next";
import { client } from "../../../../sanity/lib/client";

export const metadata: Metadata = {
    title: 'José DACOSTA - IT Engineer & Fullstack Developer - Blog',
    description: 'This is my blog, where I write about various topics, including web development, machine learning, and DevOps.',
    keywords: 'web development, machine learning, devops, python, javascript, typescript, react, next.js, django, bootstrap, jquery, node.js, laravel, symfony, nest.js, tensorflow, scikit-learn, mongodb, mysql, postgresql, sqlite, git, docker, aws, linux, windows, agile, scrum, tdd, ci/cd, rest, graphql, design patterns, data structures, algorithms',
    manifest: '/manifest.json',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#eeeee' },
      { media: '(prefers-color-scheme: dark)', color: '#222831' },
    ],
    colorScheme: 'dark light'
}

const Blog = async () => {

    const categories = await getCategories();
    return (
        <BodyContainer>
            <Articles categories={categories} articlesByPage={5} />
        </BodyContainer>
    );
};

const getCategories = async () : Promise<{
    title: string;
    slug: string;
}[]> => {
    const categories = await client.fetch(`
        *[_type == "category"] {
            title,
            slug
        }
    `);


    return categories.map((category:any) => {
        return {
            title: category.title,
            slug: category.slug.current
        }
    }
    );
}

export default Blog;