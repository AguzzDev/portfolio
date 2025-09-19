import { useTheme } from "context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import pixelArtsData from "components/Pixelart/projects/data";

export const PixelArtLoader = ({ name }: { name: string }) => {
  const Component = dynamic(() => import(`../../Pixelart/projects/Base.tsx`), {
    ssr: false,
  });
  const data = pixelArtsData[name];
  if (!data) return null;

  return <Component data={data} />;
};

export const Project = (props) => {
  const { title, image: imageD, pixelArt, slug, i, currentIndex, projects } = props;
  const router = useRouter();
  const { theme } = useTheme();

  const Title = ({ i, title, image }: { i: number; title: string; image: string[] }) => (
    <>
      <div className="flex space-x-5">
        <div className="w-24 sm:w-32 xl:w-36 h-hull">
          <div className="w-full h-[90%] sm:h-[93%] my-1">
            <PixelArtLoader name={pixelArt || "Default"} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex text-gray2 dark:text-gray4 font-bold lg:pb-3">
            <span className="text-xl sm:text-2xl">{i + 1 <= 9 ? `0${i + 1}` : `${i + 1}`}</span>
            <span className="text-2xl px-1">/</span>
            <span className="text-xs sm:text-base my-auto">{projects}</span>
          </div>

          <h5 className={`w-[90%] truncate text-gray2 dark:text-gray1 ${theme === "dark" ? "borderText" : "borderTextDark"} font-mainBold font-extrabold`}>{title}</h5>
        </div>
      </div>

      {image ? (
        <div className="lg:hidden flex space-x-5 pt-2 lg:pt-0 h-40 sm:h-52">
          <div className="w-full xs:w-2/4 lg:hidden relative">
            <Image src={image[0]} layout="fill" objectFit="cover" alt="project_img" />
          </div>
          <div className="hidden xs:flex xs:w-2/4 lg:hidden relative">
            <Image src={image[1]} layout="fill" objectFit="cover" alt="project_img" />
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <div className={`py-5 sm:py-20 lg:py-0 lg:h-screen flex items-center group select-none cursor-pointer`}>
      <Link passHref key={i} href={slug} locale={router.locale}>
        <a className="w-full">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ x: 10 }}
            viewport={{ amount: 0 }}
            className="hidden lg:flex flex-col w-full"
          >
            <Title i={i} title={title} image={imageD} />
          </motion.div>

          <div className="flex flex-col lg:hidden w-full">
            <Title i={i} title={title} image={imageD} />
          </div>
        </a>
      </Link>
    </div>
  );
};
