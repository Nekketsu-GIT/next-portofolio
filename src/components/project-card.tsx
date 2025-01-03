import Image from "next/image";

export default function ProjectCard({
  title,
  summary,
  tags,
  sourceCode,
  preview,
  tutorial,
  image,
}: {
  title: string;
  summary: string;
  tags?: string[];
  sourceCode?: string;
  preview?: string;
  tutorial?: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row w-full shadow-lg rounded-lg">
      {image && (
        <div className="w-full md:w-1/3 h-48 overflow-hidden items-center justify-center flex">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 p-4 w-full md:w-2/3">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 border border-yaleblue text-yaleblue rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p>{summary}</p>
        <div className="flex gap-2">
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-yaleblue text-white rounded hover:bg-darkgoldenrod hover:text-black"
            >
              Source code
            </a>
          )}
          {preview && (
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-yaleblue text-white rounded hover:bg-darkgoldenrod hover:text-black"
            >
              Preview
            </a>
          )}
          {tutorial && (
            <a
              href={tutorial}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-yaleblue text-white rounded hover:bg-darkgoldenrod hover:text-black"
            >
              Tutorial
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
