import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function FellowshipOfTheRing() {
  return (
    <div>
      <Link href="/volumes">Back to Volumes</Link>
      <br />
      <Link href="/the-two-towers">Next volume</Link>
      <h1>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .title
        }
      </h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .description
        }
      </p>
      <ul>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
              .books[0].ordinal
          }
        </li>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
              .books[0].title
          }
        </li>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
              .books[1].ordinal
          }
        </li>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
              .books[1].title
          }
        </li>
      </ul>
      <Image
        src="/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="The Fellowship of the Ring cover"
      />
    </div>
  );
}
