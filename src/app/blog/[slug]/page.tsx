import { Category } from "@/lib/model";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponentProps } from "next-sanity";
import Image from "next/legacy/image";

const getArticle = async (slug: string) => {
  const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        publishedAt,
        mainImage,
        description,
        categories,
        body
    }`;
  const article = await client.fetch(query, { slug });
  return article;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) {
    return {
      title:
        "José DACOSTA - IT Engineer & Fullstack Developer - Blog - Article not found",
      description: "Article not found",
      keywords: "",
    };
  }
  return {
    title:
      "José DACOSTA - IT Engineer & Fullstack Developer - Blog - " +
      article.title,
    description: article.description,
    keywords: article.categories
      .map((category: Category) => category.title)
      .join(", "),
    manifest: "/manifest.json",
  };
}

// Define PortableText components with Tailwind styles
const components = {
  types: {},
  marks: {},
  block: {
    // Custom styles for headers
    h1: (props: PortableTextComponentProps<unknown>) => (
      <h1 className="text-5xl font-extrabold text-yaleblue my-4">
        {props.children}
      </h1>
    ),
    h2: (props: PortableTextComponentProps<unknown>) => (
      <h2 className="text-4xl font-bold text-gray-700 my-3">
        {props.children}
      </h2>
    ),
    h3: (props: PortableTextComponentProps<unknown>) => (
      <h3 className="text-3xl font-semibold text-gray-600 my-2">
        {props.children}
      </h3>
    ),
    normal: (props: PortableTextComponentProps<unknown>) => (
      <p className="text-base leading-7 text-gray-800">{props.children}</p>
    ),
  },
  list: {
    bullet: (props: PortableTextComponentProps<unknown>) => (
      <ul className="list-disc ml-6 space-y-2">{props.children}</ul>
    ),
    number: (props: PortableTextComponentProps<unknown>) => (
      <ol className="list-decimal ml-6 space-y-2">{props.children}</ol>
    ),
  },
  listItem: {
    bullet: (props: PortableTextComponentProps<unknown>) => (
      <li className="text-gray-700">{props.children}</li>
    ),
    number: (props: PortableTextComponentProps<unknown>) => (
      <li className="text-gray-700">{props.children}</li>
    ),
  },
};

const SingleArticle = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-yaleblue">{article.title}</h1>
      <p>{article.description}</p>
      <div className="relative h-96">
        <Image
          src={urlFor(article.mainImage).url() || ""}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-sm">
        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
        <p>
          {article.categories
            .map((category: Category) => category.title)
            .join(", ")}
        </p>
      </div>
      <div>
        <PortableText value={article.body} components={components} />
      </div>
    </article>
  );
};

export default SingleArticle;
