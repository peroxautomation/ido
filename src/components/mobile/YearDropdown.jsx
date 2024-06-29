import DropdownItem2 from "./DropdownItem2";

const generateYears = (startYear, endYear) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

/**
 * Dropdown for year filter
 * @param selectHandler Handler to set dropdown value
 */
const YearDropdown = (props) => {
  const { selectHandler } = props;
  const years = generateYears(2010, new Date().getFullYear());

  const renderYears = () => {
    return years.map((element, index) => (
      <DropdownItem2 value={element} key={index} valueHandler={selectHandler} />
    ));
  };

  return (
    <div
      id="yearDropdown"
      className={`search-filter-dropdown-year`}
    >
      {renderYears()}
    </div>
  );
};

export default YearDropdown;
