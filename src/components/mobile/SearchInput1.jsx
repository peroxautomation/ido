/**
 * Searchbox input component
 * @param searchPlaceholder Searchbox placeholder
 * @param searchValue searchbox value
 * @param handleSetValue  handle setting searchbox value
 * @returns JSX element
 */
const SearchInput1 = (props) => {
  const { searchPlaceholder, searchValue, handleSetValue, onEnter } = props;


  return (
    <div
      onClick={null}
      className={`search-page-search-container w-full`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/searchIcon.svg"
      />
      <input
        onClick={onEnter}
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
