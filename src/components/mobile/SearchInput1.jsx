/**
 * Searchbox input component
 * @param searchPlaceholder Searchbox placeholder
 * @param searchValue searchbox value
 * @param handleSetValue  handle setting searchbox value
 * @returns JSX element
 */
const SearchInput1 = (props) => {
  const { searchPlaceholder, searchValue, handleSetValue } = props;

  /**
   * Show the search options
   */
  const showResults = () => {
    document.getElementById("searchOptions").classList.toggle("hidden");
  };  

  /**
   * Hide the search options
   */
  const hideResults = () => {
    console.log('left')
    document.getElementById("searchOptions").classList.add("hidden");
  };

  return (
    <div
      onClick={showResults}
      className={`search-page-search-container w-full`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/searchIcon.svg"
      />
      <input
        className="search-page-search-input"
        placeholder={searchPlaceholder}
        type="text"
        value={searchValue ? searchValue : ""}
        onInput={(s) => handleSetValue(s.currentTarget.value)}
      />
    </div>
  );
};

export default SearchInput1;
