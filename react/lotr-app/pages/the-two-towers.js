import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  return (
    <>
      <Link href="/">Back to Volumes</Link>
      <h1>{volumes.find(({ slug }) => slug === "the-two-towers").title}</h1>
      <p>{volumes.find(({ slug }) => slug === "the-two-towers").description}</p>
      <ul>
        <li>
            {volumes.find(({ slug }) => slug === "the-two-towers").books[0].ordinal}
        </li>
        <li>
            {volumes.find(({ slug }) => slug === "the-two-towers").books[0].title}
        </li>
        <li>
            {volumes.find(({ slug }) => slug === "the-two-towers").books[1].ordinal}
        </li>
        <li>
            {volumes.find(({ slug }) => slug === "the-two-towers").books[1].title}
        </li>
      </ul>
      <Image
        src="/the-two-towers.png"
        width={140}
        height={230}
        alt="The Two Towers cover"
      />
    </>
  );
}
