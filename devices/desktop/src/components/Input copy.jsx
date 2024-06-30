import { useMemo } from "react";

const Input = (props) => {
  const {
    inputLabel,
    inputPlaceholder,
    helperText,
    label,
    infoIcon,
    showHelperText,
    propWidth1,
    propPadding,
    propFlex1,
    propFontSize2,
    propLineHeight,
    propFontFamily2,
    propColor2,
    propTextAlign,
    icon,
  } = props;

  const helperText8Style = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding,
    };
  }, [propWidth1, propPadding]);

  const helperText9Style = useMemo(() => {
    return {
      flex: propFlex1,
      fontSize: propFontSize2,
      lineHeight: propLineHeight,
      fontFamily: propFontFamily2,
      color: propColor2,
      textAlign: propTextAlign,
    };
  }, [
    propFlex1,
    propFontSize2,
    propLineHeight,
    propFontFamily2,
    propColor2,
    propTextAlign,
  ]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular`}
    >
      {label && (
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
          <div className="flex-1 relative leading-[24px]">{inputLabel}</div>
          {infoIcon && (
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidinformation1.svg"
            />
          )}
        </div>
      )}
      <div
        className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-between py-2.5 px-4"
        placeholder={inputPlaceholder}
        // style={input6Style}
      >
        <div className="flex-1 flex flex-row items-center justify-start">
          <input
            className="w-full [border:none] [outline:none] font-overline-regular text-base bg-[transparent] relative leading-[24px] text-neutral-100 text-center"
            placeholder={
              inputPlaceholder ? inputPlaceholder : "Enter your password"
            }
            type="text"
          />
        </div>
        {icon && (
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 relative h-6 overflow-hidden shrink-0">
            <img
              className="absolute h-[72.92%] w-[83.33%] top-[13.75%] right-[8.33%] bottom-[13.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={icon}
            />
          </button>
        )}
      </div>
      {helperText && (
        <div
          className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600"
          style={helperText8Style}
        >
          {showHelperText && (
            <div
              className="flex-1 relative leading-[20px]"
              style={helperText9Style}
            >
              {helperText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
