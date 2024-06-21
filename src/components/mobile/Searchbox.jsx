import SearchInput1 from "./SearchInput1";
import FilterBtn from "./FilterBtn";

/**
 * Search container component
 * @param searchQuery What is being searched
 * @param handleSetQuery handler to set the search query
 * @param handleSetfilterOpen handler to set the filter to opened
 * @returns A JSX element
 */
const Searchbox = (props) => {
  const { searchQuery, handleSetQuery, handleSetfilterOpen } = props;
  return (
    <div className="relative top-[calc(26%_-_10vh)] display flex flex-row w-[100vw] justify-center">
      <div
        className={`relative w-[90%] flex flex-row items-center justify-start gap-[1rem]`}
      >
        <SearchInput1
          searchValue={searchQuery}
          handleSetValue={handleSetQuery}
          searchPlaceholder="Search"
        />
        <FilterBtn setIsFilterOpen={handleSetfilterOpen} />
      </div>
    </div>
  );
};

export default Searchbox;
