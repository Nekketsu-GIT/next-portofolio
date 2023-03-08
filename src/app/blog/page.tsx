'use client'

import Articles from "@/components/articles/articles";
import { createClient } from "next-sanity";
import { useMemo, useState } from "react";

const Blog = async () => {

    const [categories, setCategories] = useState<string[]>([]);

    useMemo(async () => {
        const categories = await getCategories();
        setCategories(categories);
    }, []);
    return (
        <Articles categories={categories} articlesByPage={10} />
    );
};

const getCategories = async () : Promise<string[]> => {

    const sanityClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: true,
        apiVersion: '2021-03-07'
    });

    
    const categories = await sanityClient.fetch(`
        *[_type == "category"] {
            title
        }
    `);

    return categories.map((category:any) => category.title);
}

export default Blog;