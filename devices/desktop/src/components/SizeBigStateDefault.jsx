import { useMemo } from "react";

const SizeBigStateDefault = (props) => {
  const {
    className = "",
    labelText = "Label",
    inputText = "Dropdown",
    hugeIconarrowssoliddirect,
    helperText = "Helper text",
    label = true,
    leftIcon = true,
    rightIcon = true,
    sizeBigStateDefaultWidth,
    labelAlignSelf,
    labelWidth,
    updatingPassword,
  } = props;
  const sizeBigStateDefaultStyle = useMemo(() => {
    return {
      width: sizeBigStateDefaultWidth,
    };
  }, [sizeBigStateDefaultWidth]);

  const label3Style = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  return (
    <div
      className={`cursor-pointer hover:opacity-80 flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={sizeBigStateDefaultStyle}
      onClick={updatingPassword}
    >
      {label && (
        <div
          className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1"
          style={label3Style}
        >
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
        {leftIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
          />
        )}
        <div className="flex-1 relative leading-[24px]">{inputText}</div>
        {rightIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={hugeIconarrowssoliddirect}
          />
        )}
      </div>
      {helperText && (
        <div className="w-[335px] flex flex-row items-center justify-start py-1 px-0 box-border text-sm">
          <div className="flex-1 relative leading-[20px]">{helperText}</div>
        </div>
      )}
    </div>
  );
};

export default SizeBigStateDefault;
