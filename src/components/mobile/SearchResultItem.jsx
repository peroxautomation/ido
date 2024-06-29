/**
 * Search options item
 * @param placeholder value of the option
 * @param onClick Function to update search value
 * @returns
 */
const SearchResultItem = (props) => {
  const { placeholder, onClick } = props;
  return (
    <div
      className={`search-page-search-options`}
      onClick={() => onClick(placeholder)}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/recentIcon.png"
      />
      <div className="flex-1 relative leading-[1.5rem]">{placeholder}</div>
    </div>
  );
};

export default SearchResultItem;
