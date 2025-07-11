import { motion, useAnimate } from "motion/react";
import { type MouseEvent, useRef } from "react";
import backImg from "../assets/back.png";
import { CARD_IMAGE_HEIGHT, CARD_IMAGE_WIDTH } from "~/constants/number";
import type { card_info } from "~/constants/interfaces";

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
  const [scope, animate] = useAnimate();
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const hitbox = e.currentTarget;
    const { clientX, clientY } = e;
    const { left, top, width, height } = hitbox.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const rotateY = (-20 / width) * 2 * x + 10;
    const rotateX = (20 / height) * 2 * y - 10;

    animate(
      ".card-flipper",
      { rotateX: rotateX, rotateY: rotateY },
      { duration: 0, ease: "linear" }
    );

    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`;
      shineRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (shineRef.current) {
      shineRef.current.style.opacity = "0";
    }
    animate(
      ".card-flipper",
      { rotateX: 0, rotateY: 0 },
      { type: "spring", stiffness: 10, damping: 5, mass: 0.5 }
    );
  };

  return (
    <div
      ref={scope}
      className="perspective-midrange"
      style={{ width: width * 2, height: height * 2 }}
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
      <motion.div
        layoutId={`${posX}-${posY}`}
        className="card-flipper w-full h-full relative transform-3d"
      >
        <motion.div
          style={{
            width,
            height,
            backgroundImage: `url(app/assets/cards.png)`,
            backgroundPosition: `${posX}px ${posY}px`,
            backgroundSize: `${CARD_IMAGE_WIDTH}px ${CARD_IMAGE_HEIGHT}px`,
          }}
          className="absolute backface-hidden rounded-lg shadow-black shadow-2xl scale-200 origin-top-left"
        />
        <motion.img
          src={backImg}
          alt="카드 뒷면"
          width={width * 2}
          height={height * 2}
          className="absolute backface-hidden rotate-y-180 rounded-lg shadow-black shadow-2xl"
        />
      </motion.div>
      <div ref={shineRef} className="card-shine-overlay" />
    </div>
  );
}
