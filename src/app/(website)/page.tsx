import { Inter } from 'next/font/google'
import Presentation from '@/components/presentation/presentation'
import ArticleCard from '@/components/articles/article-card/article-card'
import Title from '@/components/title/title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faBook, faCode, faBriefcase, faBrain, faBlog } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '@/components/projects/project-card/project-card'
import { ArticleModel, ProjectModel } from '@/lib/model'
import Service from '@/components/service/service'
import { Skills } from '@/components/skills/skills'
import { Metadata } from 'next'
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'

export const metadata: Metadata = {
  title: 'José DACOSTA - IT Engineer & Fullstack Developer',
  description: 'I offer services in web development, machine learning, and DevOps.',
  keywords: 'web development, machine learning, devops, python, javascript, typescript, react, next.js, django, bootstrap, jquery, node.js, laravel, symfony, nest.js, tensorflow, scikit-learn, mongodb, mysql, postgresql, sqlite, git, docker, aws, linux, windows, agile, scrum, tdd, ci/cd, rest, graphql, design patterns, data structures, algorithms',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eeeeee' },
    { media: '(prefers-color-scheme: dark)', color: '#222831' },
  ],
};


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
      <section>
        <Title title={<h2>Services</h2>}  icon={<FontAwesomeIcon icon={faBrain} pulse size='lg'/>} />
        <div className="row">
          <Service title="Web development" description="I can create custom websites, web applications, and e-commerce solutions using programming languages." image='/code.webp' />
          <Service title="Machine Learning" description="Apply machine learning algorithms to build models that can recognize patterns and make predictions." image='/data-science.png' />
          <Service title="DevOps" description="I can offer DevOps services, including continuous integration and delivery, and automated testing." image='/devOps.png' />
          {/* <Service title="Formation" description="I can offer training courses on various topics, including web development, machine learning, and data science." image='/training.png' /> */}
        </div>
      </section>
      <section>
        <Title title={<h2>Skills</h2>} icon={<FontAwesomeIcon icon={faCode}  pulse size='lg' />} />
        <Skills blocs={
          [
            {
              name: "Languages",
              skills: [
                "Python",
                "JavaScript",
                "TypeScript",
                "PHP",
                "SQL",
                "HTML",
                "CSS",
              ]
            },
            {
              name: "Frameworks & libraries",
              skills: [
                "React",
                "Next.js",
                "Django",
                "Bootstrap",
                "JQuery",
                "Node.js",
                "Laravel",
                "Symfony",
                "Nest.js",
                "Tensorflow",
                "Scikit-learn",
              ]
            },
            {
              name: "Databases",
              skills: [
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "SQLite",
              ]
            },
            {
              name: "Tools",
              skills: [
                "Git",
                "Docker",
                "AWS",
                "Linux",
                "Windows",
              ]
            }, 
            {
              name: "Others",
              skills: [
                "Agile",
                "Scrum",
                "TDD",
                "CI/CD",
                "REST",
                "GraphQL",
                "Design patterns",
                "Data structures",
                "Algorithms",
              ]
            },
          ]
        } />
      </section>
        {lastArticles && lastArticles.length > 0 && (
          <section>
            <Title title={<h2>Articles</h2>} link='/blog' icon={<FontAwesomeIcon icon={faBlog}  pulse size='lg' />} />
            <div className="row">
              {lastArticles.map((article) => (
                <ArticleCard
                  key={article.slug.current}
                  title={article.title}
                  description={article.description}
                  link={`/blog/${article.slug.current}`}
                  image={urlForImage(article.mainImage)?.url()}
                  className={"article"}
                />
              ))
              }
            </div>
          </section>
        )}
        {lastProjects && lastProjects.length > 0 && (
          <section>
            <Title title={<h2>Projects</h2>} link='/projects' icon={<FontAwesomeIcon icon={faBriefcase}  pulse size='lg' />} />
            <div className="row">
            {lastProjects.map((project) => (
              <ProjectCard
                key={project.slug.current}
                title={project.title}
                tags={project.tags}
                image={urlForImage(project.image)?.url()}
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
        {lastProjects.length < 1 && lastArticles.length < 1 && (
            <section>
              <p>There is no content to show</p>
            </section>
          )}
    </>
  )
}

const getLastArticles = async () : Promise<ArticleModel[]> => {
  const lastArcticles = await client.fetch(`
    *[_type == "article"] | order(publishedAt desc) [0..3] {
      title,
      slug,
      description,
      mainImage,
    }
  `);

  return lastArcticles;
}

const getLastProjects = async () : Promise<ProjectModel[]> => {
  const lastProjects = await client.fetch(`
    *[_type == "project"] | order(publishedAt desc) [0..3] {
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
