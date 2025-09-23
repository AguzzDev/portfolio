import { motion } from "framer-motion";
import { ArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { IconSm } from "components/Icons";

interface PointerButtonProps {
  type: "top" | "bottom";
  clickeable?: boolean;
}
export const PointerButton = ({ type, clickeable = true }: PointerButtonProps) => {
  const scrollTo = () => {
    window.scrollTo({
      ...(type === "top" ? { top: 0 } : { top: 0 }),
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollTo}
      initial={{ y: 5 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        type: "tween",
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      disabled={!clickeable}
      className={`${clickeable ? "cursor-pointer" : "cursor-default"}`}
    >
      {type === "top" ? <IconSm Icon={ChevronUpIcon} /> : <IconSm Icon={ChevronDownIcon} />}
    </motion.button>
  );
};
