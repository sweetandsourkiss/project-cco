import { motion, useAnimate } from "motion/react";
import { type MouseEvent, useRef } from "react";
import backImg from "../assets/back.png";
import { CARD_IMAGE_HEIGHT, CARD_IMAGE_WIDTH } from "~/constants/number";
import type { card_info } from "~/constants/interfaces";
import useWindowWidth from "~/hooks/useWindowWidth";
import { concatenator } from "~/utils/concatenator";

export default function Card({
  setCardInfo,
  width,
  height,
  posX,
  posY,
}: {
  setCardInfo?: React.Dispatch<React.SetStateAction<card_info | null>>;
  width: number;
  height: number;
  posX: number;
  posY: number;
}) {
  const browserWidth = useWindowWidth();
  const [scope, animate] = useAnimate();
  const shineRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const hitbox = e.currentTarget;
    const { clientX, clientY } = e;
    const { left, top, width, height } = hitbox.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;
    const rotateY = (-20 / width) * x + 10;
    const rotateX = (20 / height) * y - 10;

    animate(".card-flipper", { rotateX: rotateX, rotateY: rotateY }, { duration: 0, ease: "linear" });

    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`;
      shineRef.current.style.opacity = "1";
    }

    if (glareRef.current) {
      const space = "4%";
      glareRef.current.style.backgroundImage = `url(app/assets/hologram.png),
       repeating-linear-gradient(82deg, hsl(53, 65%, 60%) calc(${space} * 1), hsl(93, 56%, 50%) calc(${space} * 2), hsl(176, 5${space}, 49%) calc(${space} * 3), hsl(228, 59%, 55%) calc(${space} * 4), hsl(283, 60%, 55%) calc(${space} * 5), hsl(326, 59%, 51%) calc(${space} * 6), hsl(326, 59%, 51%) calc(${space} * 7), hsl(283, 60%, 55%) calc(${space} * 8), hsl(228, 59%, 55%) calc(${space} * 9), hsl(176, 5${space}, 49%) calc(${space} * 10), hsl(93, 56%, 50%) calc(${space} * 11), hsl(53, 65%, 60%) calc(${space} * 12)),
       radial-gradient(farthest-corner circle at ${x}px ${y}px, hsla(180, 100%, 89%, 0.5) 5%, hsla(180, 1${space}, 57%, 0.3) 40%, hsl(0, 0%, 0%) 130%)`;
      glareRef.current.style.backgroundBlendMode = "color-burn, multiply";
      glareRef.current.style.backgroundSize = "cover";
      glareRef.current.style.filter = "brightness(.5) contrast(1) saturate(.4)";
      glareRef.current.style.mixBlendMode = "color-dodge";
    }
  };

  const handleMouseLeave = () => {
    if (shineRef.current) {
      shineRef.current.style.opacity = "0";
    }
    if (glareRef.current) {
      glareRef.current.style.backgroundImage = "none";
      // const space = "4%";
      // glareRef.current.style.backgroundImage = `url(app/assets/hologram.png),
      //  repeating-linear-gradient(82deg, hsl(53, 65%, 60%) calc(${space} * 1), hsl(93, 56%, 50%) calc(${space} * 2), hsl(176, 5${space}, 49%) calc(${space} * 3), hsl(228, 59%, 55%) calc(${space} * 4), hsl(283, 60%, 55%) calc(${space} * 5), hsl(326, 59%, 51%) calc(${space} * 6), hsl(326, 59%, 51%) calc(${space} * 7), hsl(283, 60%, 55%) calc(${space} * 8), hsl(228, 59%, 55%) calc(${space} * 9), hsl(176, 5${space}, 49%) calc(${space} * 10), hsl(93, 56%, 50%) calc(${space} * 11), hsl(53, 65%, 60%) calc(${space} * 12))`;
    }
    animate(".card-flipper", { rotateX: 0, rotateY: 0 }, { type: "spring", stiffness: 10, damping: 5, mass: 0.5 });
  };

  return (
    <div
      ref={scope}
      className="perspective-midrange"
      style={{ width: browserWidth > 640 ? width * 2 : width, height: browserWidth > 640 ? height * 2 : height }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() =>
        setCardInfo?.({
          width,
          height,
          x: posX,
          y: posY,
        })
      }
    >
      <motion.div layoutId={`${posX}-${posY}`} className="card-flipper w-full h-full relative transform-3d">
        <motion.div
          style={{
            width,
            height,
            backgroundImage: `url(app/assets/cards.png)`,
            backgroundPosition: `${posX}px ${posY}px`,
            backgroundSize: `${CARD_IMAGE_WIDTH}px ${CARD_IMAGE_HEIGHT}px`,
          }}
          className={concatenator(
            "absolute backface-hidden rounded-lg shadow-black shadow-2xl",
            browserWidth > 640 ? "scale-200 origin-top-left" : ""
          )}
        />
        <motion.img
          src={backImg}
          alt="검은색 배경이며 중앙에 침카온 로고가 있는 카드 뒷면 이미지"
          width={browserWidth > 640 ? width * 2 : width}
          height={browserWidth > 640 ? height * 2 : height}
          className="absolute backface-hidden rotate-y-180 rounded-lg shadow-black shadow-2xl"
        />
        <div ref={shineRef} className="card-shine-overlay" />
        <div ref={glareRef} className="card-hologram" />
      </motion.div>
    </div>
  );
}
