import SearchResultItem from "./SearchResultItem";

const SearchResults = (props) => {
  const { searchQuery } = props;
  return (
    <div id="searchOptions" className={`hidden search-page-search-options-container`}>
      <SearchResultItem placeholder="National dance of France" />
      <SearchResultItem placeholder="National dance of Russia" />
      <SearchResultItem placeholder="National dance of France Canada" />
      <SearchResultItem placeholder="National dances" />
    </div>
  );
};

export default SearchResults;
