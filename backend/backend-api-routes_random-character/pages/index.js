import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <main>
      <h1>Random Character</h1>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Age: {data.age}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
      <p>Email: {data.email}</p>
    </main>
  );
}
