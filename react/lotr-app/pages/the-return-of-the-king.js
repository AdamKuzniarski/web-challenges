import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function ReturnOfTheKing() {
  return (
    <div>
      <Link href="/">Back to Volumes</Link>
      <h1>
        {volumes.find(({ slug }) => slug === "the-return-of-the-king").title}
      </h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-return-of-the-king")
            .description
        }
      </p>
      <ul>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-return-of-the-king")
              .books[0].ordinal
          }
        </li>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-return-of-the-king")
              .books[0].title
          }
        </li>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-return-of-the-king")
              .books[1].ordinal
          }
        </li>
        <li>
          {
            volumes.find(({ slug }) => slug === "the-return-of-the-king")
              .books[1].title
          }
        </li>
      </ul>
      <Image
        src="/the-return-of-the-king.png"
        width={140}
        height={230}
        alt="The Two Towers cover"
      />
    </div>
  );
}
