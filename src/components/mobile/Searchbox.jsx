import SearchInput1 from "./SearchInput1";
import FilterBtn from "./FilterBtn";
import SearchResults from "./SearchResults";
import { useState } from "react";

/**
 * Search container component
 * @param searchQuery What is being searched
 * @param handleSetQuery handler to set the search query
 * @param handleSetfilterOpen handler to set the filter to opened
 * @returns A JSX element
 */
const Searchbox = (props) => {
  const { searchQuery, handleSetQuery, handleSetfilterOpen } = props;
  const [isSearchResultActive, setIsSearchResultActive] = useState(false);
  return (
    <div className="relative top-[calc(26%_-_10vh)] display grid grid-flow-row w-[100vw] justify-items-center">
      <div
        className={`relative w-[90%] flex flex-row items-center justify-start gap-[1rem]`}
      >
        <SearchInput1
          onEnter={() => setIsSearchResultActive(!isSearchResultActive)}
          searchValue={searchQuery}
          handleSetValue={handleSetQuery}
          searchPlaceholder="Search"
        />
        <FilterBtn setIsFilterOpen={handleSetfilterOpen} />
      </div>
      {isSearchResultActive && <SearchResults setSearchValue={handleSetQuery}/>}
    </div>
  );
};

export default Searchbox;
