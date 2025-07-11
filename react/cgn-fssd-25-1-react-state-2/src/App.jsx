import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("reac");

  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} onSearch={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
