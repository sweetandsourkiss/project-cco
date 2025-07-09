import { motion, useAnimate } from "motion/react";
import { type MouseEvent, useRef } from "react";

export default function Card({
  setCardIndex,
  width,
  height,
  url,
  index,
}: {
  setCardIndex?: React.Dispatch<React.SetStateAction<number | null>>;
  width: number;
  height: number;
  url: string;
  index: number | null;
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

    animate("img", { rotateX: rotateX, rotateY: rotateY }, { duration: 0, ease: "linear" });

    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`;
      shineRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (shineRef.current) {
      shineRef.current.style.opacity = "0";
    }
    animate("img", { rotateX: 0, rotateY: 0 }, { type: "spring", stiffness: 15, damping: 10, mass: 5 });
  };

  return (
    <div
      ref={scope}
      className="perspective-midrange"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setCardIndex?.(index)}
    >
      <motion.img
        layoutId={index + ""}
        src={url}
        alt="카드 card"
        width={width}
        height={height}
        className="rounded-xl border-2 border-black shadow-black shadow-2xl"
      />
      <div ref={shineRef} className="card-shine-overlay" />
    </div>
  );
}
