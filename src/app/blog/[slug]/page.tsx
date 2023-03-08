import Article from '@/components/article/article'

const SingleArticle = async ({params} : {params: {slug: string}}) => {


    const {slug} = params;

    return (
        <Article slug={slug} />
    )
}

export default SingleArticle