import { jokes } from "@/lib/data";

export default function handler(request, response) {
  // get dynamic url value from the query object
  const id = request.query.jokeId;

  // find relevant joke
  const joke = jokes.find((joke) => joke.id === id);

  // send a response with the json data
  response.json(joke);
}
