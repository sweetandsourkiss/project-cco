import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project CCO" },
    {
      name: "description",
      content: "침착맨 카드 온라인 홈페이지 입니다. This is the 'Calm Down Man' Card Online(CCO) website.",
    },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <img className="mx-auto" src="app/assets/logo.png" alt="침카온 로고 CCO logo" width={500} height={500} />
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
    </div>
  );
}
