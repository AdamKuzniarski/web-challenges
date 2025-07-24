import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, isLoading, error, mutate } = useSWR(
    `https://api.wheretheiss.at/v1/satellites/25544`,
    fetcher
  );
  console.log(data);

  // Loading und Error States behandeln
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.error("ISS Fetch Error", error);
    return <h1>Error loading ISS position: {error.message}</h1>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
