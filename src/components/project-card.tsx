import Image from "next/legacy/image";

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
    <div className="flex flex-col md:flex-row w-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      {image && (
        <div className="w-full md:w-1/3 h-48 relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 p-6 w-full md:w-2/3">
        <h3 className="text-xl font-bold text-yaleblue dark:text-darkgoldenrod">
          {title}
        </h3>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-yaleblue/10 text-yaleblue dark:bg-darkgoldenrod/10 dark:text-darkgoldenrod rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-600 dark:text-gray-300">{summary}</p>
        <div className="flex gap-3 mt-auto">
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yaleblue text-white rounded-lg hover:bg-darkgoldenrod hover:text-black transition-colors duration-300 text-sm"
            >
              Source Code
            </a>
          )}
          {preview && (
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yaleblue text-white rounded-lg hover:bg-darkgoldenrod hover:text-black transition-colors duration-300 text-sm"
            >
              Live Preview
            </a>
          )}
          {tutorial && (
            <a
              href={tutorial}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yaleblue text-white rounded-lg hover:bg-darkgoldenrod hover:text-black transition-colors duration-300 text-sm"
            >
              Tutorial
            </a>
          )}
        </div>
      </div>
    </div>
  );
}