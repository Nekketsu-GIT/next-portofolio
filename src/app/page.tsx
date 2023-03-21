import Image from 'next/image'
import { Inter } from 'next/font/google'
import Presentation from '@/components/presentation/presentation'
import ArticleCard from '@/components/articles/article-card/article-card'
import Title from '@/components/title/title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '@/components/projects/project-card/project-card'
import sanityClient from '@/lib/sanity'
import { ArticleModel, ProjectModel } from '@/lib/model'
import { urlFor } from '@/lib/sanity'
import Service from '@/components/service/service'


const inter = Inter({ subsets: ['latin'] })




export default async function Home() {
  const lastArticles = await getLastArticles();
  const lastProjects = await getLastProjects();

  return (
    <>
      <section>
       <Presentation
          image={process.env.NEXT_PUBLIC_AVATAR}
          title={process.env.NEXT_PUBLIC_JOB_TITLE}
          description={process.env.NEXT_PUBLIC_DESCRIPTION}
          socialMediaLinks={{
            github: process.env.NEXT_PUBLIC_GITHUB,
            linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
            twitter: process.env.NEXT_PUBLIC_TWITTER,
          }}
        />
      </section>
      <section className="services">
        <Service title="Web development" description="I can create a website for you, with the technology you want." image='/code.webp' />
        <Service title="Data science" description="I can create a website for you, with the technology you want." image='/data-science.png' />
        <Service title="SEO" description="I can create a website for you, with the technology you want." image='/seo.png' />
      </section>
        {lastArticles && lastArticles.length > 0 && (
          <section>
            <hr />     
            <Title title="Articles" link='/blog' icon={<FontAwesomeIcon icon={faBook}   />} />
            <div className="articles_or_projects__container">
              {lastArticles.map((article) => (
                <ArticleCard
                  key={article.slug.current}
                  title={article.title}
                  description={article.description}
                  link={`/blog/${article.slug.current}`}
                  image={urlFor(article.mainImage).url()}
                  className={"article"}
                />
              ))
              }
            </div>
          </section>
        )}
        {lastProjects && lastProjects.length > 0 && (
          <section>
            <hr />     
            <Title title="Projects" link='/projects' icon={<FontAwesomeIcon icon={faCode}   />} />
            <div className="articles_or_projects__container">
            {lastProjects.map((project) => (
              <ProjectCard
                key={project.slug.current}
                title={project.title}
                tags={project.tags}
                image={urlFor(project.image).url()}
                links={{
                  liveDemo: project.previewUrl,
                  sourceCode: project.sourceUrl,
                }}
              />
            
            ))
            }
            </div>
          </section>    
        )}
        <section>
        {lastProjects.length < 1 && lastArticles.length < 1 && (
            <section>
              <hr />     
              <p>There is no content to show</p>
            </section>
          )}
        </section>
    </>
  )
}

const getLastArticles = async () : Promise<ArticleModel[]> => {
  const lastArcticles = await sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) [0..2] {
      title,
      slug,
      description,
      mainImage,
    }
  `);

  return lastArcticles;
}

const getLastProjects = async () : Promise<ProjectModel[]> => {
  const lastProjects = await sanityClient.fetch(`
    *[_type == "project"] | order(publishedAt desc) [0..2] {
      title,
      tags,
      image,
      previewUrl,
      sourceUrl,
      slug,
    }
  `);

  return lastProjects;
}
