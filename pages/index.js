import { Layout } from "components/Layout";
import { Projects } from "components/Projects";
import { Footer } from "components/Footer";
import { getAllFilesMetadata } from "lib/mdx";
import { AboutMe } from "components/AboutMe";

const Home = ({ projects }) => {
  return (
    <Layout title="Agustin Ribotta">
      <AboutMe />
      <Projects data={JSON.parse(projects)} />
      <Footer />
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
