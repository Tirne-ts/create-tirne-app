// @ts-ignore

import { createRouter, json } from "https://deno.land/x/tirne@v1.0.2/mod.ts";

const routes = [
  {
    method: "GET",
    path: "/",
    handler: () => json({ message: "Hello from Deno + Tirne!" }),
  },
];

const router = createRouter(routes);
console.log("Server is running on http://localhost:8000");

Deno.serve({ handler: router });