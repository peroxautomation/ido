import SearchResultItem from "./SearchResultItem";

const SearchResults = (props) => {
  const { searchQuery, setSearchValue } = props;
  return (
    <div
      id="searchOptions"
      className={`search-page-search-options-container w-[90%]`}
    >
      <SearchResultItem
        placeholder="National dance of France"
        onClick={setSearchValue}
      />
      <SearchResultItem
        placeholder="National dance of Russia"
        onClick={setSearchValue}
      />
      <SearchResultItem
        placeholder="National dance of France Canada"
        onClick={setSearchValue}
      />
      <SearchResultItem
        placeholder="National dances"
        onClick={setSearchValue}
      />
    </div>
  );
};

export default SearchResults;
