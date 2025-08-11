import { jokes } from "@/lib/data";

export default function handler(request, response) {
  // response.end(JSON.stringify(jokes));

  // send all jokes to the client as json data
  response.json(jokes);
}
