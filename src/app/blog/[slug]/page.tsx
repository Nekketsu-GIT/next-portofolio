import Article from '@/components/article/article'
import sanityClient from '@/lib/sanity'

const SingleArticle = async ({params} : {params: {slug: string}}) => {


    const {slug} = params;

    return (
        <Article slug={slug} />
    )
}

export default SingleArticle