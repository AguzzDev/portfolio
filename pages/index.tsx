import { Layout } from "components/Layout";
import { getAllFilesMetadata } from "lib/mdx";
import { AboutMe } from "components/Section/AboutMe";
import { Projects } from "components/Section/Projects/Projects";
import { Contact } from "components/Section/Contact";

const Home = ({ projects }) => {
  return (
    <Layout>
      <AboutMe />
      <Projects projects={JSON.parse(projects)} />
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
