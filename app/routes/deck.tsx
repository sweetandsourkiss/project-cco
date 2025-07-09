import { useState } from "react";
import type { Route } from "./+types/home";
import { motion } from "motion/react";
import Card from "~/components/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project CCO | Deck" },
    {
      name: "description",
      content: "침착맨 카드 온라인의 카드를 조회할 수 있습니다. You can look up the CCO's cards.",
    },
  ];
}

export default function Deck() {
  const [n, setN] = useState<number | null>(null);

  return (
    <div className="px-4 py-12">
      <div className="text-center text-6xl">덱</div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-center my-4 text-3xl">SSR</div>
          <div className="flex flex-wrap justify-center gap-10">
            {Array(7)
              .fill(false)
              .map((_, i) => (
                <Card key={i} width={210} height={300} setCardIndex={setN} url="app/assets/dummy-card.png" index={i} />
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
          <Card width={420} height={600} url="app/assets/dummy-card.png" index={n} />
        </div>
      ) : null}
    </div>
  );
}
