import Articles from "@/components/articles/articles";
import sanityClient from "@/lib/sanity";

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