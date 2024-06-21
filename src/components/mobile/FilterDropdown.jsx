/**
 * Dropdown button for each filters
 * @param dropdown Name of the dropdown button
 * @param onClick button onclick event
 * @param list Dropdown list element
 */
const FilterDropdown = (props) => {
  const { dropdown, onClick, list } = props;
  const DropdownList = list;
  return (
    <div className={`search-filter-dropdown`} onClick={onClick}>
      <div className="search-filter-dropdown-container">
        {dropdown}
        <div className="flex-1 flex justify-end">
          <img
            className="search-filter-dropdown-image"
            alt=""
            src="/dropdownArrow.svg"
          />
        </div>
      </div>
      {DropdownList}
    </div>
  );
};

export default FilterDropdown;
