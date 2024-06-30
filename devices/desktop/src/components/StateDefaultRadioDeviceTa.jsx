import { useMemo } from "react";
import PropTypes from "prop-types";

const StateDefaultRadioDeviceTa = ({
  className = "",
  questionText = "Question",
  radioButtonDefault,
  placeholderText = "Yes",
  question = true,
  questionAlignSelf,
  questionWidth,
}) => {
  const questionStyle = useMemo(() => {
    return {
      alignSelf: questionAlignSelf,
      width: questionWidth,
    };
  }, [questionAlignSelf, questionWidth]);

  return (
    <div
      className={`w-[340px] flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      {question && (
        <div
          className="self-stretch relative leading-[24px] font-semibold"
          style={questionStyle}
        >
          {questionText}
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={radioButtonDefault}
        />
        <div className="flex-1 relative leading-[24px] font-semibold">
          {placeholderText}
        </div>
      </div>
    </div>
  );
};

StateDefaultRadioDeviceTa.propTypes = {
  className: PropTypes.string,
  questionText: PropTypes.string,
  radioButtonDefault: PropTypes.string,
  placeholderText: PropTypes.string,
  question: PropTypes.bool,

  /** Style props */
  questionAlignSelf: PropTypes.any,
  questionWidth: PropTypes.any,
};

export default StateDefaultRadioDeviceTa;
