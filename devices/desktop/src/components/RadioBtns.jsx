import StateDefaultRadioDeviceTa from "./StateDefaultRadioDeviceTa";
import PropTypes from "prop-types";

const RadioBtns = ({ className = "", question, question1 }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] ${className}`}
    >
      <StateDefaultRadioDeviceTa
        questionText="Does the title have any meaning?"
        radioButtonDefault="/radio-button-default.svg"
        placeholderText="No"
        question
        questionAlignSelf="stretch"
        questionWidth="unset"
      />
      <StateDefaultRadioDeviceTa
        questionText="Question"
        radioButtonDefault="/radio-button-filled.svg"
        placeholderText="Yes"
        question={false}
        questionAlignSelf="unset"
        questionWidth="335px"
      />
    </div>
  );
};

RadioBtns.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string,
  question1: PropTypes.string,
};

export default RadioBtns;
