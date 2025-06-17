import { Server } from "tirne";
const server = new Server([
  { method: "GET", path: "/", handler: () => new Response("Hello") }
]);

export default {
  fetch: (req: Request) => server.fetch(req),
};
