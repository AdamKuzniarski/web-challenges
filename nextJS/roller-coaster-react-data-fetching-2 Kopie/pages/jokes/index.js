import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
console.log(fetcher);
export default function HomePage() {
  const [id, setId] = useState(0);
  const { data: joke } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`,
    fetcher
  );
  if (!joke) {
    return <h1>Loading...</h1>;
  }





  function handlePrevJoke() {
    setId(joke.prevId);
  }

  function handleNextJoke() {
    setId(joke.nextId);
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{joke.joke}</h1>

      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>

        <button>Like</button>

      </div>
    </>
  );
}
