import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
