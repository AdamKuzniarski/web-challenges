import Card from "@/components/Card";

export default function HomePage({
  showEmojis,
  setShowEmojis,
  setShowSmile,
  showSmile,
}) {
  return (
    <main>
      <h1>Hello from Next.js</h1>
      <Card
        showEmojis={showEmojis}
        setShowEmojis={setShowEmojis}
        showSmile={showSmile}
        setShowSmile={setShowSmile}
      />
    </main>
  );
}
