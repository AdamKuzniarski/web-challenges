export default function SearchForm({ searchTerm, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();

    const searchValue = event.target.elements.searchTerm.value;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("searchTerm: ", data.searchTerm);

    onSearch(data.searchTerm);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input name="searchTerm" id="searchTerm" defaultValue={searchTerm} />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
