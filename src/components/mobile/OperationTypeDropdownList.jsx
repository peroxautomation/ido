import DropdownItem1 from "./DropdownItem1";
/**
 * Payment operation dropdown list
 * @param onSelect On click operation
 * @returns
 */
const OperationTypeDropdownList = (props) => {
  const { onSelect } = props;
  return (
    <div
      className={`absolute z-20 w-full top-[14.25rem] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col items-stretch `}
    >
      <DropdownItem1
        placeholder="Withdraws"
        className="w-full"
        onSelectItem={onSelect}
      />
      <DropdownItem1
        placeholder="Donated"
        className="w-full"
        onSelectItem={onSelect}
      />
      <DropdownItem1
        placeholder="Donations"
        className="w-full"
        onSelectItem={onSelect}
      />
      <DropdownItem1
        placeholder="All"
        className="w-full"
        onSelectItem={onSelect}
      />
    </div>
  );
};

export default OperationTypeDropdownList;
