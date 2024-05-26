import { useMemo } from "react";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";

const CheckboxContainer1 = ({
  className = "",
  option1,
  checkboxWidth,
  checkboxAlignSelf,
}) => {
  const checkboxStyle = useMemo(() => {
    return {
      width: checkboxWidth,
      alignSelf: checkboxAlignSelf,
    };
  }, [checkboxWidth, checkboxAlignSelf]);

  return (
    <div
      className={`w-[85vw] flex flex-col items-start justify-start gap-[8px] text-left text-base text-white font-button-1-regular ${className}`}
      style={checkboxStyle}
    >
      <div className="w-[85vw] relative leading-[24px] font-semibold hidden">
        Question
      </div>
      <div className="w-[85vw] rounded-xl bg-white-8 flex flex-row items-center justify-start py-3 px-4 box-border gap-[8px]">
        <Checkbox hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg" />
        <div className="flex-1 relative leading-[24px] font-semibold">
          {option1}
        </div>
      </div>
    </div>
  );
};

export default CheckboxContainer1;
