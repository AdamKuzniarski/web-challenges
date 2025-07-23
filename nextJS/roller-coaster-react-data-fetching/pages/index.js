import { useState } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  // const [joke, setJoke] = useState();
  const [id, setId] = useState(0);
  const [funnyJokeIds, setFunnyJokeIds] = useState([]);

  function toggleFunny(idToToggle) {
    setFunnyJokeIds(
      funnyJokeIds.includes(idToToggle)
        ? funnyJokeIds.filter((id) => {
            return id !== idToToggle;
          })
        : [...funnyJokeIds, idToToggle]
    );
  }

  const {
    data: joke,
    error,
    isLoading,
    mutate,
  } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`, fetcher);

  // useEffect(() => {
  //   async function startFetching() {
  //     const response = await fetch(
  //       `https://example-apis.vercel.app/api/bad-jokes/${id}`
  //     );
  //     const joke = await response.json();

  //     setJoke(joke);
  //   }

  //   startFetching();
  // }, [id]);

  function handlePrevJoke() {
    setId(joke.prevId);
  }

  function handleNextJoke() {
    setId(joke.nextId);
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  // if (!joke) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <small>ID: {id}</small>
      <h1>
        {joke.joke}
        {funnyJokeIds.includes(id) && "😊"}
      </h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
        <button
          onClick={() => {
            mutate();
          }}
        >
          Aktualisieren
        </button>
        <button onClick={() => toggleFunny(joke.id)}>
          {funnyJokeIds.includes(joke.id) ? "👎" : "👍"}
        </button>
      </div>
    </>
  );
}
