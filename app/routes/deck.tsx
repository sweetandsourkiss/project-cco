import type { Route } from "./+types/home";

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
  return <div>deck</div>;
}
