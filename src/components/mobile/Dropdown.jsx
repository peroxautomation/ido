/**
 * Dropdown container component
 * @param {*} name Dropdown name
 * @param selected the selected dropdown item
 * @param DropdownOptions function that dynamically renders dropdown list component
 * @param isRequired toggle required message
 * @returns
 */
const Dropdown = (props) => {
  const { name, selected, DropdownOptions, isRequired } = props;
  /**
   * Toggle dropdown list
   * @param {*} event
   */
  const onCTAClick = (event) => {
    event.currentTarget.lastChild.classList.toggle("hidden");
  };

  return (
    <div onClick={onCTAClick} className={`dropdown-primary`}>
      <div className="dropdown-primary-selected">
        <div className="flex-1 relative leading-[1.5rem]">
          {selected != null ? selected : name}
        </div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-01.svg"
        />
      </div>
      {isRequired && (
        <div className="dropdown-primary-danger">Select your {`${name}`}</div>
      )}
      {DropdownOptions}
    </div>
  );
};

export default Dropdown;
