import DropdownItem2 from "./DropdownItem2";
/**
 * Country filter dropdown
 * @param selectHandler Handler to set dropdown value
 */
const CountryDropdown = (props) => {
  const { selectHandler, className } = props;

  const countries = [
    "Afghanistan",
    "Bahrain",
    "Cambodia",
    "Denmark",
    "Ecuador",
    "Finland",
    "Germany",
    "Zimbabwe",
  ];

  const renderCountries = () => {
    return countries.map((element, index) => (
      <DropdownItem2 value={element} key={index} valueHandler={selectHandler} />
    ));
  };

  return (
    <div
      id="countryDropdown"
      className={`search-filter-dropdown-country ${className}`}
    >
      {renderCountries()}
    </div>
  );
};

export default CountryDropdown;
