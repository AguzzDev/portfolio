import { Layout } from "components/Layout";
import { getAllFilesMetadata } from "lib/mdx";
import { AboutMe } from "components/Section/AboutMe";
import { Projects } from "components/Section/Projects/Projects";
import { Contact } from "components/Section/Contact";
import { useMemo } from "react";

const Home = ({ projects }) => {
  const parsedProjects = useMemo(() => JSON.parse(projects), [projects]);

  return (
    <Layout>
      <AboutMe />
      <Projects projects={parsedProjects} />
      <Contact />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const projects = await getAllFilesMetadata();

  return {
    props: {
      projects: JSON.stringify(projects),
    },
  };
};

export default Home;
