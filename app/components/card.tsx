import { motion, useAnimate } from "motion/react";
import { type MouseEvent } from "react";

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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const hitbox = e.currentTarget;
    const { clientX, clientY } = e;
    const { left, top, width, height } = hitbox.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const rotateY = (-40 / width) * x + 20;
    const rotateX = (40 / height) * y - 20;

    // animate 함수를 사용해 직접 스타일을 업데이트합니다.
    // duration: 0으로 설정하여 마우스 움직임을 즉시 반영합니다.
    animate("img", { rotateX: rotateX, rotateY: rotateY }, { duration: 0, ease: "linear" });
  };

  const handleMouseLeave = () => {
    // 마우스가 떠나면 스프링 애니메이션을 적용하여 복귀시킵니다.
    animate("img", { rotateX: 0, rotateY: 0 }, { type: "spring", stiffness: 350, damping: 25, mass: 0.5 });
  };

  return (
    <div
      ref={scope} // useAnimate의 scope를 div에 연결합니다.
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
        className="rounded-xl border-2 border-black shadow-cco shadow-2xl"
        // animate와 transition prop은 더 이상 필요 없습니다.
      />
    </div>
  );
}
