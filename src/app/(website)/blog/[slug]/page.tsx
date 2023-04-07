import Article from '@/components/article/article'
import { client } from '../../../../../sanity/lib/client'


const getArticle = async (slug: string) => {

    const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        publishedAt,
        mainImage,
        description,
        categories,
        body
    }`
    const article = await client.fetch(query, {slug})
    return article
}

export async function generateMetadata({ params }: { params: { slug: string } }) {


    const article = await getArticle(params.slug);
    if (!article) {
      return {
        title: 'José DACOSTA - IT Engineer & Fullstack Developer - Blog - Article not found',
        description: 'Article not found',
        keywords: '',
      };
    }
    return {
      title: 'José DACOSTA - IT Engineer & Fullstack Developer - Blog - ' + article.title,
      description: article.description,
      keywords: article.categories.map((category: any) => category.title).join(', '),
    };
  }

const SingleArticle = async ({params} : {params: {slug: string}}) => {

    const article = await getArticle(params.slug);

    if (!article) {
        return <div>Article not found</div>
    }

    return (
        <Article {...article} />
    )
}

export default SingleArticle