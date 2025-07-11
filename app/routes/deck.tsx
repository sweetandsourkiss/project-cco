import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import Card from "~/components/card";
import {
  CARD_POSITION_N,
  CARD_POSITION_R,
  CARD_POSITION_SR,
  CARD_POSITION_SSR,
} from "~/constants/positions";
import type { card_info } from "~/constants/interfaces";

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
  const [cardInfo, setCardInfo] = useState<card_info | null>(null);

  return (
    <div className="px-20 py-12">
      <div className="flex flex-col gap-16">
        <div>
          <div className="text-center my-4 text-4xl font-bold">SSR</div>
          <div className="flex flex-wrap justify-center gap-12">
            {CARD_POSITION_SSR.map(({ x, y }, i) => (
              <Card
                key={`${x}-${y}`}
                width={173}
                height={241}
                posX={x}
                posY={y}
                setCardInfo={setCardInfo}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-center my-4 text-3xl">SR</div>
          <div className="flex flex-wrap justify-center gap-12">
            {CARD_POSITION_SR.map(({ x, y }, i) => (
              <Card
                key={`${x}-${y}`}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                posX={x}
                posY={y}
                setCardInfo={setCardInfo}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-center my-4 text-3xl">R</div>
          <div className="flex flex-wrap justify-center gap-12">
            {CARD_POSITION_R.map(({ x, y }, i) => (
              <Card
                key={`${x}-${y}`}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                posX={x}
                posY={y}
                setCardInfo={setCardInfo}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-center my-4 text-3xl">N</div>
          <div className="flex flex-wrap justify-center gap-12">
            {CARD_POSITION_N.map(({ x, y }, i) => (
              <Card
                key={`${x}-${y}`}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                posX={x}
                posY={y}
                setCardInfo={setCardInfo}
              />
            ))}
          </div>
        </div>
      </div>
      {cardInfo !== null ? (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
          onClick={() => setCardInfo(null)}
        >
          <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 -z-10"></div>
          <Card
            width={cardInfo.width}
            height={cardInfo.height}
            posX={cardInfo.x}
            posY={cardInfo.y}
          />
        </div>
      ) : null}
    </div>
  );
}
