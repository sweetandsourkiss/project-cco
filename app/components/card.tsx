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

    const rotateY = (-40 / width) * x + 20;
    const rotateX = (40 / height) * y - 20;

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
      { type: "spring", stiffness: 50, damping: 5, mass: 1 }
    );
  };

  return (
    <div
      ref={scope}
      className="perspective-midrange"
      style={{ width, height }}
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
        className="card-flipper"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          layoutId={`${posX}-${posY}`}
          style={{
            width,
            height,
            backgroundImage: `url(app/assets/cards.png)`,
            backgroundPosition: `${posX}px ${posY}px`,
            backgroundSize: `${CARD_IMAGE_WIDTH}px ${CARD_IMAGE_HEIGHT}px`,
            position: "absolute",
            backfaceVisibility: "hidden",
          }}
          className="rounded-lg"
        />
        <motion.img
          src={backImg}
          alt="카드 뒷면"
          width={width}
          height={height}
          className="rounded-xl border-2 border-black shadow-black shadow-2xl"
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </motion.div>
      <div ref={shineRef} className="card-shine-overlay" />
    </div>
  );
}
