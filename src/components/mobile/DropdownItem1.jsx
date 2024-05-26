import { useMemo } from "react";

const DropdownItem1 = ({
  className = "",
  all,
  allTextDecoration,
  item2BorderBottom,
  allHref,
  allTarget,
}) => {
  const allStyle = useMemo(() => {
    return {
      textDecoration: allTextDecoration,
    };
  }, [allTextDecoration]);

  const item2Style = useMemo(() => {
    return {
      borderBottom: item2BorderBottom,
    };
  }, [item2BorderBottom]);

  return (
    <div
      className={`w-[335px] bg-neutral-700 box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-left text-base text-white font-button-2-semibold border-b-[1px] border-solid border-neutral-800 ${className}`}
      style={item2Style}
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
      <div className="flex-1 relative leading-[24px]" style={allStyle}>
        {all}
      </div>
    </div>
  );
};


export default DropdownItem1;
