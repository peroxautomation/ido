import DropdownItem1 from "./DropdownItem1";
import PropTypes from "prop-types";

const OperationTypeDropdownList = ({ className = "" }) => {
  return (
    <div
      id="OperationTypeDropdown"
      className={`hidden absolute z-20 w-full top-[14.25rem] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col items-stretch ${className}`}
    >
      <DropdownItem1 placeholder="Withdraws" className="w-full" />
      <DropdownItem1 placeholder="Donated" className="w-full" />
      <DropdownItem1 placeholder="Donations" className="w-full" />
      <DropdownItem1 placeholder="All" className="w-full" />
    </div>
  );
};

OperationTypeDropdownList.propTypes = {
  className: PropTypes.string,
};

export default OperationTypeDropdownList;