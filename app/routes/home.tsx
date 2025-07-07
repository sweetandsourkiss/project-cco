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
    <div>
      <img
        className="mx-auto"
        src="app/assets/logo.png"
        alt="침카온 로고 CCO logo"
      />
    </div>
  );
}
