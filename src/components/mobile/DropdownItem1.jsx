/**
 * Dropdown Items for the Dropdown2 component
 * @param placeholder item placeholder
 * @param onSelectItem select item handler
 * @param isRecent toggle recent icon
 * @param key the item key
 */
const DropdownItem1 = (props) => {
  const { placeholder, onSelectItem, isRecent } = props;
  return (
    <div
      onClick={() => onSelectItem(placeholder)}
      className={`dropdown-primary-item`}
    >
      {isRecent && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        />
      )}
      <div className="flex-1 relative leading-[24px]">{placeholder}</div>
    </div>
  );
};

export default DropdownItem1;
