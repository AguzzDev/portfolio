import { PixelArtInterface } from "types";

const hexToRgba = (hex: string): [number, number, number, number] => {
  if (!hex.startsWith("#")) return [0, 0, 0, 1];
  let c = hex.substring(1);
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r, g, b, 1];
};

export const createPixelArt = ({ frames, colors, pixelSize, duration, effect }: PixelArtInterface) => {
  const size = pixelSize || 4;

  const drawMultiple = (canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D) => {
    const totalFrames = frames.length;
    const frameDuration = duration / totalFrames;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      let progress = (elapsed % frameDuration) / frameDuration;

      let frameIndex = Math.floor(elapsed / frameDuration);
      if (frameIndex >= totalFrames) frameIndex = totalFrames - 1;

      const f = frames as number[][][];
      const frame = f[frameIndex];
      const rows = frame.length;
      const cols = frame[0].length;

      const artWidth = cols * size;
      const artHeight = rows * size;

      const offsetX = (canvas.width - artWidth) / 2;
      const offsetY = (canvas.height - artHeight) / 2;

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const current = frames[frameIndex] as number[][];
      const next = frames[frameIndex + 1];

      frame.forEach((row, y) => {
        row.forEach((_, x) => {
          const val1 = current[y][x] ?? 0;
          const val2 = next?.[y]?.[x] ?? 0;
          const color1 = val1 === 0 ? [0, 0, 0, 0] : hexToRgba(colors[val1]);
          const color2 = val2 === 0 ? [0, 0, 0, 0] : hexToRgba(colors[val2]);

          let r: number, g: number, b: number, a: number;

          if (effect) {
            r = Math.round(color1[0] + (color2[0] - color1[0]) * progress);
            g = Math.round(color1[1] + (color2[1] - color1[1]) * progress);
            b = Math.round(color1[2] + (color2[2] - color1[2]) * progress);
            a = color1[3] + (color2[3] - color1[3]) * progress;
          } else {
            [r, g, b, a] = color1;
          }

          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fillRect(offsetX + x * size, offsetY + y * size, size, size);
        });
      });

      if (frameIndex < totalFrames - 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const drawNormal = (canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D) => {
    const rows = frames.length;
    const cols = frames[0].length;
    const artWidth = cols * size;
    const artHeight = rows * size;

    const offsetX = (canvas.width - artWidth) / 2;
    const offsetY = (canvas.height - artHeight) / 2;

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    frames.forEach((row, y) => {
      row.forEach((col, x) => {
        ctx.fillStyle = colors[col];
        ctx.fillRect(offsetX + x * size, offsetY + y * size, size, size);
      });
    });
  };

  const draw = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isAnimation = Array.isArray(frames[0][0]);
    isAnimation ? drawMultiple(canvas, ctx) : drawNormal(canvas, ctx);
  };

  return draw;
};
