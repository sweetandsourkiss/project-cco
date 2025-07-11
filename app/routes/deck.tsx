import { useState } from "react";
import type { Route } from "./+types/home";
import Card from "~/components/card";

const CARD_WIDTH = 112;
const CARD_HEIGHT = 161;

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

  return (
    <div className="px-4 py-12">
      <div className="text-center text-6xl">덱</div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-center my-4 text-3xl">SSR</div>
          <div className="flex flex-wrap justify-center gap-12"></div>
        </div>
        <div>
          <div className="text-center my-4 text-3xl">SR</div>
          <div className="flex flex-wrap justify-center gap-12">
            {Array(7)
              .fill(false)
              .map((_, i) => (
                <Card
                  key={i}
                  width={CARD_WIDTH}
                  height={CARD_HEIGHT}
                  posX={-43}
                  posY={174}
                  setCardIndex={setN}
                  index={i}
                />
              ))}
            <div
              style={{
                width: `${116}px`,
                height: `${161}px`,
                backgroundImage: `url(app/assets/cards.png)`,
                backgroundPosition: `${-175}px ${174}px`,
                backgroundSize: `${860}px ${2236}px`,
              }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      {n !== null ? (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
          onClick={() => setN(null)}
        >
          <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 -z-10"></div>
          <Card
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            posX={-43}
            posY={174}
            index={n}
          />
        </div>
      ) : null}
    </div>
  );
}
