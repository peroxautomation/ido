import SearchResultItem from "./SearchResultItem";
import PropTypes from "prop-types";

const SearchResults = ({ className = "" }) => {
  return (
    <div
      className={`absolute z-10 top-[calc(32%_-_10vh)] left-[1.25rem] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-xl overflow-hidden flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-2-bold ${className}`}
    >
      <SearchResultItem all="National dance of France" />
      <SearchResultItem
        all="National dance of Russia"
        item2BorderBottom="1px solid #1b1b1b"
      />
      <SearchResultItem
        all="National dance of France Canada"
        item2BorderBottom="1px solid #1b1b1b"
      />
      <SearchResultItem all="National dances" item2BorderBottom="unset" />
    </div>
  );
};

SearchResults.propTypes = {
  className: PropTypes.string,
};

export default SearchResults;
