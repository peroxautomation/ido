import { useMemo } from "react";

/**
 * Dropdown Items for the Dropdown2 component
 */
const DropdownItem1 = ({
  className = "",
  placeholder,
  onSelectItem,
}) => {

  return (
    <div
      onClick={() => onSelectItem(placeholder)}
      className={`w-full bg-neutral-700 box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-left text-base text-white font-button-2-semibold border-b-[1px] border-solid border-neutral-800 ${className}`}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <div className="flex-1 relative leading-[24px]">
        {placeholder}
      </div>
    </div>
  );
};

export default DropdownItem1;
