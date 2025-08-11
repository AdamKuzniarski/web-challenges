import { createServer } from "node:http";

const fishById = {
  1: "Shrimp",
  2: "Anemonefish",
  3: "Ryba",
};

/* const routes = {
  "/api/fish/1": "Shrimp",
  "/api/fish/2": "Anemonefish",
}; */

export const server = createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain; charset=utf-8");

  const { pathname } = new URL(request.url, "http://localhost");

  const match = pathname.match(/^\/api\/fish\/([^/]+)$/);

  if (match) {
    const id = match[1];
    const name = fishById[id];

    if (name) {
      response.statusCode = 200;
      response.end(name);
    } else {
      response.statusCode = 404;
      response.end("Not found");
    }
    return;
  }

  response.statusCode = 404;
  response.end("Not found");
});
