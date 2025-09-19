import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => {
  const files = fs.readdirSync(path.join(root, "data"));

  return files
    .map((file) => {
      const mdxSource = fs.readFileSync(
        path.join(root, "data", file),
        "utf8"
      );
      const { data } = matter(mdxSource);
      return { file, date: new Date(data.date) };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map((item) => item.file);
};

export const getFileBySlug = async (slug) => {
  const mdxSource = await fs.readFileSync(
    path.join(root, "data", `${slug}.mdx`),
    "utf8"
  );

  const { content, data } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetadata = () => {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", `${postSlug}`),
      "utf8"
    );
    const { data } = matter(mdxSource);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts].sort(
      (a, b) => {
        return new Date(b.date) > new Date(a.date) ? 1 : -1;
      }
    );
  }, []);
};
