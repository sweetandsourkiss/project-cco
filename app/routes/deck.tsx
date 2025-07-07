import { useState } from "react";
import type { Route } from "./+types/home";
import { motion } from "motion/react";
import { div } from "motion/react-client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project CCO | Deck" },
    {
      name: "description",
      content:
        "침착맨 카드 온라인의 카드를 조회할 수 있습니다. You can look up the CCO's cards.",
    },
  ];
}

export default function Deck() {
  const [n, setN] = useState<number | null>(null);
  console.log(n);
  return (
    <div className="px-4 py-12">
      <div className="text-center text-6xl">덱</div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-center my-4 text-3xl">SSR</div>
          <div className="flex flex-wrap gap-4">
            {Array(11)
              .fill(false)
              .map((_, i) => (
                <motion.img
                  key={i}
                  layoutId={i + ""}
                  src="app/assets/dummy-card.png"
                  alt="카드 card"
                  width={210}
                  height={300}
                  className="rounded-xl shadow-2xl border-2 border-black hover:scale-110 transition-all cursor-pointer"
                  onClick={() => setN(i)}
                />
              ))}
          </div>
        </div>
      </div>
      {n !== null ? (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
          onClick={() => setN(null)}
        >
          <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 -z-10"></div>
          <motion.img
            src="app/assets/dummy-card.png"
            width={420}
            className="rounded-xl shadow-2xl border-4 border-black"
            layoutId={n + ""}
          />
        </div>
      ) : null}
    </div>
  );
}
