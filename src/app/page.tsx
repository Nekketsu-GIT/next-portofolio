import Image from 'next/image'
import { Inter } from 'next/font/google'
import Presentation from '@/components/presentation/presentation'
import ArticleCard from '@/components/articles/article-card/article-card'
import Title from '@/components/title/title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '@/components/projects/project-card/project-card'
import sanityClient from '@/lib/sanity'
import { Article, Project } from '@/lib/model'
import { urlFor } from '@/lib/sanity'


const inter = Inter({ subsets: ['latin'] })




export default async function Home() {
  const lastArticles = await getLastArticles();
  const lastProjects = await getLastProjects();

  return (
    <main>
      <section>
       <Presentation
          image="/avatar-jose.png"
          title="Software Engineer"
          description="I'm a software engineer with a passion for learning and creating new things. I'm currently working at a startup called Viz.ai as a software engineer. I'm also a student at the University of Texas at Austin studying Computer Science. I'm always looking for new opportunities to learn and grow as a developer."
          socialMediaLinks={{
            github: '',
            linkedin: '',
            twitter: ''
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

    </main>
  )
}

const getLastArticles = async () : Promise<Article[]> => {
  const lastArcticles = await sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) [0..3] {
      title,
      slug,
      description,
    }
  `);

  return lastArcticles;
}

const getLastProjects = async () : Promise<Project[]> => {
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
