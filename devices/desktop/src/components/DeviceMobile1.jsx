import { useMemo } from "react";

const DeviceMobile1 = (props) => {
  const {
    text = "Or Sign up by",
    orSignUpFontSize,
    orSignUpLineHeight,
    orSignUpFontWeight,
    orSignUpColor,
  } = props;

  const orSignUpStyle = useMemo(() => {
    return {
      fontSize: orSignUpFontSize,
      lineHeight: orSignUpLineHeight,
      fontWeight: orSignUpFontWeight,
      color: orSignUpColor,
    };
  }, [orSignUpFontSize, orSignUpLineHeight, orSignUpFontWeight, orSignUpColor]);

  return (
    <div
      className={`w-[335px] flex flex-row items-center justify-center p-2 box-border text-center text-base text-neutral-100 font-overline-regular`}
    >
      <div
        className="flex-1 relative leading-[24px] font-semibold"
        style={orSignUpStyle}
      >
        {text}
      </div>
    </div>
  );
};

export default DeviceMobile1;
