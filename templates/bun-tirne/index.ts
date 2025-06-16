

import { Server, } from "tirne";
import type { Route } from "tirne";
const routes: Route[] = [
{
method: "GET",
path: "/",
handler: (req) => new Response("Hello Tirne!"),
},
];

const server = new Server(routes);

export default {
fetch: (req: Request) => server.fetch(req),
};