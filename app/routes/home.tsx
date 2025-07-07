import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project CCO" },
    {
      name: "description",
      content:
        "침착맨 카드 온라인 홈페이지 입니다. This is the 'Calm Down Man' Card Online(CCO) website.",
    },
  ];
}

export default function Home() {
  return (
    <div className="sm:h-screen flex flex-col items-center">
      <img
        className="mx-auto"
        src="app/assets/logo.png"
        alt="침카온 로고 CCO logo"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-6">
        <Link
          to={"/bot"}
          className="cursor-pointer text-lg px-4 py-2 bg-white hover:bg-neutral-300 transition-colors rounded-full border-2 text-center text-black font-bold"
        >
          AI 대소동
        </Link>
        <Link
          to={"/deck"}
          className="cursor-pointer text-lg px-4 py-2 bg-white hover:bg-neutral-300 transition-colors rounded-full border-2 text-center text-black font-bold"
        >
          덱 구경하기
        </Link>
      </div>
      <div className="mt-12 sm:mt-auto p-2 text-xs sm:text-sm">
        본 웹사이트는 유튜버 침착맨의 팬 활동을 위해 제작된 비상업적
        사이트입니다. 사이트에 사용된 모든 이미지 및 콘텐츠의 저작권과 초상권은
        원저작자인 침착맨과 관련 권리자에게 있습니다. 본 사이트는 어떠한 수익도
        창출하지 않으며, 원저작자의 요청이 있을 시 모든 콘텐츠는 즉시 삭제
        조치됩니다. [연락처: sweetandsourkiss@gmail.com]
      </div>
    </div>
  );
}
