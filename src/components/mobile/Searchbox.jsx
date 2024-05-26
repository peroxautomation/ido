import { useCallback } from "react";
import SearchInput1 from "./SearchInput1";
import FilterBtn from "./FilterBtn";
import PropTypes from "prop-types";

const Searchbox = ({ className = "" }) => {
  const onHugeIconinterfaceoutlinefiClick1 = useCallback(() => {
    //TODO: Open playlist modal popup
  }, []);

  return (
    <div className="relative top-[calc(26%_-_10vh)] display flex flex-row w-[100vw] justify-center">
      <div
      className={`relative w-[90%] flex flex-row items-center justify-start gap-[1rem] ${className}`}
      >
        <SearchInput1
          hugeIconinterfacesolidsea="/searchIcon.svg"
          searchPlaceholder="Search"
        />
        <FilterBtn
          onHugeIconinterfaceoutlinefiClick={onHugeIconinterfaceoutlinefiClick1}
          vector="/searchFilterIcon.svg"
        />
      </div>
    </div>
    
  );
};

Searchbox.propTypes = {
  className: PropTypes.string,
};

export default Searchbox;
