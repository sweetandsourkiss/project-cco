import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project CCO | Tutorial" },
    {
      name: "description",
      content:
        "침착맨 카드 온라인의 규칙을 배워봅시다. Let's learn the rules of the CCO.",
    },
  ];
}

export default function Tutorial() {
  return <div>tutorial</div>;
}
