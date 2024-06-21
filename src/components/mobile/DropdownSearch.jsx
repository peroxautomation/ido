/**
 * Dropdown search input component
 * @param handleInput Handle search input
 * @returns A JSX element
 */
const DropdownSearch = (props) => {
  const { handleInput } = props;
  return (
    <div className="dropdown-primary-search">
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidsearch-02.svg"
      />
      <input
        onInput={handleInput}
        className="dropdown-primary-search-input"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default DropdownSearch;
