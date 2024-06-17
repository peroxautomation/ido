import { useMemo, useState } from "react";

const TextInput1 = ({
  className = "",
  label,
  TextInput1Placeholder,
  inputValue,
  setInputValue,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <div className="flex-1 relative leading-[24px]">{label}</div>
      </div>
      <input
        onInput={(event) => setInputValue(event.currentTarget.value)}
        className="[border:none] [outline:none] font-button-2-semibold text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white"
        placeholder={TextInput1Placeholder}
        type="text"
        value={inputValue ? inputValue : ""}
      />
      <div className="w-[335px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
        <div className="flex-1 relative leading-[20px]">Helper text</div>
      </div>
    </div>
  );
};

export default TextInput1;
