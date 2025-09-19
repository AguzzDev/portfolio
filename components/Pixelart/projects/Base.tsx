import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { PixelArtRendererProps } from "types";
import { createPixelArt } from "utils/createPixelArt";

const Base = ({ data }: PixelArtRendererProps) => {
  const refs = useRef<Record<string, HTMLCanvasElement | null>>({});

  useEffect(() => {
    data.canvas.forEach((item, key) => {
      const canvas = refs.current[key];
      if (canvas) {
        const draw = createPixelArt({
          frames: item.frames,
          colors: item.colors,
          duration: item.duration,
          pixelSize: item.pixelSize,
        });
        draw(canvas);
      }
    });
  }, [data]);

  return (
    <div className={`relative w-full h-full ${data.styles ? `${data.styles}` : "scale-[1.3] sm:scale-[1.5]"}`}>
      {data.canvas.map((item, index) => (
        <motion.canvas
          key={index}
          ref={(el) => {
            if (el) refs.current[index] = el;
          }}
          className={item.styles}
          initial={item.animation?.initial}
          animate={item.animation?.animate}
          transition={item.animation?.transition}
          whileHover={item.animation?.animate}
        />
      ))}
    </div>
  );
};

export default Base;
