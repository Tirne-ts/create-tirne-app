import { createRouter, json } from "tirne";

const routes = [
  { method: "GET", path: "/", handler: () => json({ msg: "Heldlddo Tirne + Bun!" }) },
];

Bun.serve({ fetch: createRouter(routes) });
console.log("Server running on http://localhost:3000");