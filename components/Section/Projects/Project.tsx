import { useTheme } from "context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import pixelArtsData from "components/Pixelart/projects/data";

export const PixelArtLoader = ({ name }: { name: string }) => {
  const Component = dynamic(() => import(`../../Pixelart/projects/Base`), {
    ssr: false,
  });
  const data = pixelArtsData[name];
  if (!data) return null;

  return <Component data={data} />;
};

export const Project = (props) => {
  const { title, image: imageD, pixelArt, slug, i, projects } = props;
  const router = useRouter();
  const { theme } = useTheme();

  const Title = ({ i, title, image }: { i: number; title: string; image: string[] }) => (
    <>
      <div className="flex space-x-3 sm:space-x-5">
        <div className="w-20 sm:w-32 xl:w-36 flex items-center justify-center">
          <div className="w-full h-[70%] sm:h-[93%]">
            <PixelArtLoader name={pixelArt || "Default"} />
          </div>
        </div>

        <div className="flex flex-col flex-1 text-gray2 dark:text-gray4 ">
          <div className="flex font-bold lg:pb-3">
            <span className="text-base sm:text-2xl">{i + 1 <= 9 ? `0${i + 1}` : `${i + 1}`}</span>
            <span className="text-xl sm:text-2xl px-1">/</span>
            <span className="text-xs sm:text-base my-auto opacity-80">{projects}</span>
          </div>

          <h5 className="w-[90%] truncate">{title}</h5>
        </div>
      </div>

      {image ? (
        <div className="lg:hidden flex space-x-5 pt-2 lg:pt-0 h-52 sm:h-72 md:h-80">
          <div className="relative w-full h-full">
            <Image src={image[0]} layout="fill" objectFit="cover" alt="project_img" />
          </div>
          <div className="hidden md:flex relative w-full h-full">
            <Image src={image[1]} layout="fill" objectFit="cover" alt="project_img" />
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <div className={`sm:py-20 lg:py-0 lg:h-full flex items-center group select-none cursor-pointer`}>
      <Link passHref key={i} href={slug} locale={router.locale}>
        <a className="w-full">
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ x: 10 }} viewport={{ amount: 0 }} className="hidden lg:flex flex-col w-full">
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
