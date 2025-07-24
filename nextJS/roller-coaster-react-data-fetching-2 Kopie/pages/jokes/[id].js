import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
//console.log(fetcher);
export default function JokePage() {
  const {
    query: { id },
  } = useRouter();
  const { data: joke, error } = useSWR(
    () =>
      id !== undefined
        ? `https://example-apis.vercel.app/api/bad-jokes/${id}`
        : null,
    fetcher
  );
  if (error) {
    return <h1>Error beim Laden</h1>;
  }
  if (!joke) {
    return <h1>Loading...</h1>;
  }

  /*   function handlePrevJoke() {
    setId(joke.prevId);
  }

  function handleNextJoke() {
    setId(joke.nextId);
  }
 */
  return (
    <>
      <small>ID: {id}</small>
      <h1>{joke.joke}</h1>

      <div>
        <Link href={`/jokes/${joke.prevId}`}>
          <button type="button" disabled={joke.prevId < 0}>
            ← Prev Joke
          </button>
        </Link>
        <Link href={`/jokes/${joke.nextId}`}>
          <button type="button">Next Joke →</button>
        </Link>

        <button>Like</button>
      </div>
    </>
  );
}
