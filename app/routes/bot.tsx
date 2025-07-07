import { Outlet } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project CCO | Bot" },
    {
      name: "description",
      content:
        "AI와 함께 침착맨 카드 온라인을 즐겨보세요! Enjoy the CCO with AI!",
    },
  ];
}

export default function Bot() {
  return <div>bot</div>;
}
