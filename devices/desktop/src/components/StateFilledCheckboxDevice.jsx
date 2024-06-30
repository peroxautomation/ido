import { useMemo } from "react";
import PropTypes from "prop-types";

const StateFilledCheckboxDevice = ({
  className = "",
  questionText = "Question",
  hugeIconinterfacesolidche,
  placeholderText = "Option 1 ",
  question = true,
  stateFilledCheckboxDeviceWidth,
  stateFilledCheckboxDeviceAlignSelf,
  questionWidth,
  questionAlignSelf,
}) => {
  const stateFilledCheckboxDeviceStyle = useMemo(() => {
    return {
      width: stateFilledCheckboxDeviceWidth,
      alignSelf: stateFilledCheckboxDeviceAlignSelf,
    };
  }, [stateFilledCheckboxDeviceWidth, stateFilledCheckboxDeviceAlignSelf]);

  const question1Style = useMemo(() => {
    return {
      width: questionWidth,
      alignSelf: questionAlignSelf,
    };
  }, [questionWidth, questionAlignSelf]);

  return (
    <div
      className={`w-[340px] flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={stateFilledCheckboxDeviceStyle}
    >
      {question && (
        <div
          className="w-[335px] relative leading-[24px] font-semibold inline-block"
          style={question1Style}
        >
          {questionText}
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidche}
        />
        <div className="flex-1 relative leading-[24px] font-semibold">
          {placeholderText}
        </div>
      </div>
    </div>
  );
};

StateFilledCheckboxDevice.propTypes = {
  className: PropTypes.string,
  questionText: PropTypes.string,
  hugeIconinterfacesolidche: PropTypes.string,
  placeholderText: PropTypes.string,
  question: PropTypes.bool,

  /** Style props */
  stateFilledCheckboxDeviceWidth: PropTypes.any,
  stateFilledCheckboxDeviceAlignSelf: PropTypes.any,
  questionWidth: PropTypes.any,
  questionAlignSelf: PropTypes.any,
};

export default StateFilledCheckboxDevice;
