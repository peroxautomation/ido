import { useMemo } from "react";
import PropTypes from "prop-types";

const DeviceTablet8 = ({
  className = "",
  text = "Or Sign up by",
  orSignUpFontSize,
  orSignUpLineHeight,
  orSignUpFontWeight,
  orSignUpColor,
}) => {
  const orSignUp1Style = useMemo(() => {
    return {
      fontSize: orSignUpFontSize,
      lineHeight: orSignUpLineHeight,
      fontWeight: orSignUpFontWeight,
      color: orSignUpColor,
    };
  }, [orSignUpFontSize, orSignUpLineHeight, orSignUpFontWeight, orSignUpColor]);

  return (
    <div
      className={`w-[335px] flex flex-row items-center justify-center p-2 box-border text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div
        className="flex-1 relative leading-[32px] font-semibold"
        style={orSignUp1Style}
      >
        {text}
      </div>
    </div>
  );
};

DeviceTablet8.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  orSignUpFontSize: PropTypes.any,
  orSignUpLineHeight: PropTypes.any,
  orSignUpFontWeight: PropTypes.any,
  orSignUpColor: PropTypes.any,
};

export default DeviceTablet8;
