/**
 * Search input component for relating user page
 * @param handleSetValue Handler to set the search value
 * @param searchPlaceholder Search input placeholder
 * @param searchValue Search input placeholder
 * @returns 
 */
const RelatingSearchInput = (props) => {
  const { handleSetValue, searchPlaceholder, searchValue } = props;
  return (
    <div className={`search-page-search-container w-full`}>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/searchIcon.svg"
      />
      <input
        className="search-page-search-input"
        placeholder={searchPlaceholder}
        type="text"
        value={searchValue}
        onInput={(s) => handleSetValue(s.currentTarget.value)}
      />
    </div>
  );
};

export default RelatingSearchInput;
