import {
  AnimatePresence as FramerMotionAnimatePresence,
  AnimatePresenceProps,
} from "framer-motion";

export const AnimatePresence: React.FunctionComponent<
  any & AnimatePresenceProps
> = (props) => {
  return <FramerMotionAnimatePresence {...props} />;
};
