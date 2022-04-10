import { MDXRemote } from "next-mdx-remote"
import Link from "next/link"

import { getFiles, getFileBySlug } from "lib/mdx"
import { Layout } from "components/Layout"
import MDXComponents from "components/mdx/MDXComponents"

const ProjectDetails = ({ source, frontmatter, nextProject, prevProject }) => {
  return (
    <Layout title={`${frontmatter.title} - Portafolio`}>
      <MDXRemote components={MDXComponents} {...source} />
      <div
        className={`${
          !nextProject || !prevProject
            ? "justify-center items-center w-full"
            : "w-2/4 justify-between"
        } mx-auto flex my-5 md:my-20`}
      >
        {prevProject && (
          <Link href={prevProject}>
            <button className="text-3xl sm:text-5xl md:text-6xl text-black dark:text-white">
              Prev project
            </button>
          </Link>
        )}
        {nextProject && (
          <Link href={nextProject}>
            <button className="text-3xl sm:text-5xl md:text-6xl text-black dark:text-white">
              Next project
            </button>
          </Link>
        )}
      </div>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const data = await getFiles()
  let paths = []

  locales.forEach((locale) => {
    paths = paths.concat(
      data.map((post) => ({
        params: {
          slug: post.replace(/\.mdx/, ""),
          locale,
        },
      }))
    )
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { source, frontmatter } = await getFileBySlug(params.slug)

  const allData = await getFiles()
  const actuallyProjectIndex = allData.findIndex(
    (post) => post.replace(/\.mdx/, "") === params.slug
  )
  const nextProject = allData[actuallyProjectIndex + 1]
  const prevProject = allData[actuallyProjectIndex - 1]

  return {
    props: {
      source,
      frontmatter,
      nextProject: nextProject ? nextProject.replace(/\.mdx/, "") : null,
      prevProject: prevProject ? prevProject.replace(/\.mdx/, "") : null,
    },
  }
}

export default ProjectDetails
