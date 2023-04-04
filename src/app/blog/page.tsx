import Articles from "@/components/articles/articles";
import sanityClient from "@/lib/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'José DACOSTA - IT Engineer & Fullstack Developer - Blog',
    description: 'This is my blog, where I write about various topics, including web development, machine learning, and DevOps.',
    keywords: 'web development, machine learning, devops, python, javascript, typescript, react, next.js, django, bootstrap, jquery, node.js, laravel, symfony, nest.js, tensorflow, scikit-learn, mongodb, mysql, postgresql, sqlite, git, docker, aws, linux, windows, agile, scrum, tdd, ci/cd, rest, graphql, design patterns, data structures, algorithms',
}

const Blog = async () => {

    const categories = await getCategories();
    return (
        <Articles categories={categories} articlesByPage={5} />
    );
};

const getCategories = async () : Promise<{
    title: string;
    slug: string;
}[]> => {
    const categories = await sanityClient.fetch(`
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