import Articles from "@/components/articles/articles";
import sanityClient from "@/lib/sanity";

const Blog = async () => {

    const categories = await getCategories();
    return (
        <Articles categories={categories} articlesByPage={10} />
    );
};

const getCategories = async () : Promise<string[]> => {
    const categories = await sanityClient.fetch(`
        *[_type == "category"] {
            title
        }
    `);

    return categories.map((category:any) => category.title);
}

export default Blog;