import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/footer.tsx", [
    index("routes/home.tsx"),
    route("tutorial", "routes/tutorial.tsx"),
    route("deck", "routes/deck.tsx"),
    route("bot", "routes/bot.tsx"),
  ]),
] satisfies RouteConfig;
