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
        {lastArticles && lastArticles.length > 0 && (
          <section>
            <Title title="Articles" link='/blog' icon={<FontAwesomeIcon icon={faBook}   />} />
            {lastArticles.map((article) => (
              <ArticleCard
                key={article.slug.current}
                title={article.title}
                description={article.description}
                link={`/blog/${article.slug.current}`}
              />
            ))
            }      
          </section>
        )}
        {lastProjects && lastProjects.length > 0 && (
          <section>
            <Title title="Projects" link='/projects' icon={<FontAwesomeIcon icon={faCode}   />} />
            {lastProjects.map((project) => (
              <ProjectCard
                key={project.slug.current}
                title={project.title}
                tags={project.tags}
                image={urlFor(project.image).url()}
                link={project.url}
              />
            
            ))
            }
          </section>    
        )}
        <section>
        {lastProjects.length < 1 && lastArticles.length < 1 && (
            <div>
              <p>There is no content to show</p>
            </div>
          )}
        </section>
    </>
  )
}

const getLastArticles = async () : Promise<ArticleModel[]> => {
  const lastArcticles = await sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) [0..3] {
      title,
      slug,
      description,
    }
  `);

  return lastArcticles;
}

const getLastProjects = async () : Promise<ProjectModel[]> => {
  const lastProjects = await sanityClient.fetch(`
    *[_type == "project"] | order(publishedAt desc) [0..3] {
      title,
      tags,
      image,
      url,
      slug,
    }
  `);

  return lastProjects;
}
