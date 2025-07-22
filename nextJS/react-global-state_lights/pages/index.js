import Link from "../components/Link";

export default function HomePage({ lightsOn, allLightsOff }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOn} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link allLightsOff={allLightsOff} href="/actions">
          Quick Actions →
        </Link>
      </p>
    </div>
  );
}
