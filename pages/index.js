import useTranslation from "next-translate/useTranslation"
import { useEffect } from "react"
import ReactGA from "react-ga"

import { Layout } from "components/Layout"
import { Projects } from "components/Projects"
import { Footer } from "components/Footer"
import { getAllFilesMetadata } from "lib/mdx"
import { AboutMe } from "components/AboutMe"

const Home = ({ projects }) => {
  const { t } = useTranslation()
  useEffect(() => {
    ReactGA.pageview("/home")
  }, [])

  return (
    <Layout title="Portafolio">
      <AboutMe t={t} />
      <Projects t={t} data={JSON.parse(projects)} />
      <Footer t={t} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const projects = await getAllFilesMetadata()

  return {
    props: {
      projects: JSON.stringify(projects),
    },
  }
}

export default Home
