/**
 * Searchbox open filters button
* @param setIsFilterOpen Handler to set is filter open
 * @returns 
 */
const FilterBtn = (props) => {
  const { setIsFilterOpen } = props;

  return (
    <button
      className="search-page-search-filter"
      onClick={()=>setIsFilterOpen(true)}
    >
      <img
        className="search-page-search-filter-image"
        alt=""
        src="searchFilterIcon.svg"
      />
    </button>
  );
};

export default FilterBtn;
