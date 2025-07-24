import { useState } from "react";
import useSWR from "swr";
// const fetcher = (url) =>
//   fetch(url).then((res) => {
//     if (!res.ok) {
//       throw new Error("Error in fetcher");
//     }

//     return res.json();
//   });

// async function fetcher1(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Error in fetcher1");
//   }
//   const data = await response.json();
//   return data;
// }

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
  } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`);

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
