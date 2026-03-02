interface StructuredDataProps {
  type: 'person' | 'article' | 'website';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {};

  switch (type) {
    case 'person':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": data.name,
        "jobTitle": data.jobTitle,
        "description": data.description,
        "url": data.url,
        "image": data.image,
        "sameAs": data.socialLinks || [],
        "knowsAbout": data.skills || [],
        "worksFor": {
          "@type": "Organization",
          "name": data.company || "Freelance"
        }
      };
      break;

    case 'article':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "image": data.image,
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished,
        "author": {
          "@type": "Person",
          "name": data.author.name,
          "url": data.author.url
        },
        "publisher": {
          "@type": "Person",
          "name": data.author.name,
          "url": data.author.url
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        }
      };
      break;

    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": data.name,
        "description": data.description,
        "url": data.url,
        "author": {
          "@type": "Person",
          "name": data.author.name,
          "url": data.author.url
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${data.url}/blog?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
