import { IconProps } from "types";

export const IconXs = ({ Icon, props }: IconProps) => {
  return (
    <Icon
      className={`${props} w-[.8rem] h-[.8rem] text-black1 dark:text-white1`}
    />
  );
};

export const IconSm = ({ Icon, props }: IconProps) => {
  return <Icon className={`${props} w-5 h-5 text-black1 dark:text-white1`} />;
};

export const IconMd = ({ Icon, props }: IconProps) => {
  return <Icon className={`${props} w-7 h-7 text-black1 dark:text-white1`} />;
};

export const IconCustomSize = ({ Icon, props }: IconProps) => {
  return <Icon className={`${props} text-black1 dark:text-white1`} />;
};
