import Image from "next/legacy/image";

export default function BlogCard({
  title,
  description,
  image,
  slug,
}: {
  title: string;
  description: string;
  image?: string;
  slug?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row w-full items-center">
      {image && (
        <div className="w-full md:w-1/3 h-48 overflow-hidden items-center flex">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 w-full ">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
        <a
          href={`/blog/${slug}`}
          className="px-4 py-2 text-sm bg-yaleblue text-white rounded hover:bg-darkgoldenrod hover:text-black self-start"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
