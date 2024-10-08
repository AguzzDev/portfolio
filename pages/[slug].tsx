import { useEffect, useState } from "react";
import { getFiles, getFileBySlug } from "lib/mdx";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "components/Layout";
import MDXComponents from "components/mdx/MDXComponents";
import { IconCustomSize, IconMd } from "components/Icons";
import { ProjectDetailsProps } from "types";

const ProjectDetails = ({
  source,
  frontmatter,
  nextProject,
  prevProject,
}: ProjectDetailsProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const Button = ({
    icon,
    title,
    position,
    boolean,
  }: {
    icon: React.FC;
    title: string;
    position: string;
    boolean: Boolean;
  }) => {
    return (
      <>
        <a href={boolean && position == "right" ? nextProject : prevProject}>
          {position === "right" ? (
            <button
              className={`flex space-x-2 sm:space-x-4 items-center pt-7 sm:pt-6 ${
                !boolean ? "opacity-50" : null
              }`}
            >
              <p className="text-md sm:text-3xl text-black dark:text-white">
                {title}
              </p>
              <IconCustomSize Icon={icon} props="w-5 sm:w-7" />
            </button>
          ) : (
            <button
              className={`flex space-x-2 sm:space-x-4 items-center pb-3 sm:pb-5 ${
                !boolean ? "opacity-50" : null
              }`}
            >
              <IconCustomSize Icon={icon} props="w-5 sm:w-7" />
              <p className="text-md sm:text-3xl text-black dark:text-white">
                {title}
              </p>
            </button>
          )}
        </a>
      </>
    );
  };

  useEffect(() => {
    if (source || frontmatter || nextProject || prevProject) {
      setLoading(false);
    }
  }, [source, frontmatter, nextProject, prevProject]);

  return (
    <>
      {!loading && (
        <Layout title={`${frontmatter.title} - Agustin Ribotta`}>
          <MDXRemote components={MDXComponents} {...source} />
          <div
            id="buttons"
            className="flex justify-between space-x-2 md:space-x-0 lg:space-x-3 h-[5rem] mx-auto md:my-10"
          >
            <Button
              icon={ChevronLeftIcon}
              title={t("common:prev-button")}
              position="left"
              boolean={!!prevProject}
            />
            <div className="w-12 md:w-16 h-[.2rem] bg-black dark:bg-white rotate-[120deg] translate-y-8 rounded-md"></div>
            <Button
              icon={ChevronRightIcon}
              title={t("common:next-button")}
              position="right"
              boolean={!!nextProject}
            />
          </div>
        </Layout>
      )}
    </>
  );
};

export const getStaticPaths = async ({ locales }) => {
  const data = await getFiles();

  const paths = [];
  locales.forEach((locale) => {
    data.forEach((post) => {
      paths.push({
        params: {
          slug: post.replace(/\.mdx/, ""),
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  const allData = await getFiles();

  const actuallyProjectIndex = await allData.findIndex(
    (post) => post.replace(/\.mdx/, "") === params.slug
  );
  const nextProject = allData[actuallyProjectIndex - 1];
  const prevProject = allData[actuallyProjectIndex + 1];
  return {
    props: {
      source,
      frontmatter,
      nextProject: nextProject ? nextProject.replace(/\.mdx/, "") : null,
      prevProject: prevProject ? prevProject.replace(/\.mdx/, "") : null,
    },
  };
};

export default ProjectDetails;
