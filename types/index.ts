import { FC } from "react";

// UI
export interface GaleryComponentProps {
  imgs: string[];
  alt: string;
}
export interface HeaderComponentProps {
  img: string;
  alt: string;
  title: string;
}
export interface LetterHeaderProps {
  text1?: string;
  text2?: string;
  style?: string;
}
export interface ListComponentProps {
  tec: string[];
  lib: string[];
  year: string;
  client: string;
  website: string;
  repo: string;
}
export interface TableChildrenProps {
  title: string;
  data?: string | string[];
  children?: JSX.Element | JSX.Element[];
  last?: boolean;
}

//Icon
export interface IconProps {
  Icon: FC<{ className: string }>;
  props?: string;
}

//Layout
export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

//Children
export interface ChildrenProp {
  children: JSX.Element | JSX.Element[];
}

//Projects
interface Project {
  title: string;
  image: string[];
  date: string;
  slug: string;
}

export interface ProjectsProps {
  scrollPosition: number;
  projects: Project[];
}

interface Source {
  compiledSource: string;
  frontmatter: Record<string, any>;
  scope: Record<string, any>;
}
interface Frontmatter {
  slug: string;
  title: string;
  image: string[];
  dte: string;
}

export interface ProjectDetailsProps {
  source: Source;
  frontmatter: Frontmatter;
  nextProject: string | null;
  prevProject: string | null;
}
