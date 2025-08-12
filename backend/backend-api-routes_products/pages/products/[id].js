import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (!id) return;
  if (isLoading) return <h2>Lade...</h2>;
  if (!data) return <h2>kein Produkt gefunden</h2>;

  return (
    <>
      <small>ID: {data.id}</small>
      <h2>{data.name}</h2>
      <a href="/products">Back to Products</a>
    </>
  );
}
