import { useMemo } from "react";

/**
 * Dropdown used in sign-up info page
 */
const Dropdown = ({
  className = "",
  showLabel,
  labelAlignSelf,
  labelWidth,
  label,
  dropdown,
}) => {
  const labelStyle = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold ${className}`}
    >
      {showLabel && (
        <div
          className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1"
          style={labelStyle}
        >
          <div className="flex-1 relative leading-[24px]">{label}</div>
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        />
        <div className="flex-1 relative leading-[24px]">{dropdown}</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-01.svg"
        />
      </div>
      <div className="w-[335px] hidden flex-row items-center justify-start py-1 px-0 box-border text-sm">
        <div className="flex-1 relative leading-[20px]">Helper text</div>
      </div>
    </div>
  );
};

export default Dropdown;
