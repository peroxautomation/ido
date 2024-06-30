import { useMemo } from "react";
import PropTypes from "prop-types";

const StateTabletTextArea = ({
  className = "",
  questionText = "What aspects are inspired from elsewhere?",
  hugeIconinterfacesolidinf,
  answerText = "Answer for question",
  showInfo = true,
  stateTabletTextAreaWidth,
  stateTabletTextAreaAlignSelf,
  textAreaHeight,
  answerForQuestionColor,
}) => {
  const stateTabletTextAreaStyle = useMemo(() => {
    return {
      width: stateTabletTextAreaWidth,
      alignSelf: stateTabletTextAreaAlignSelf,
    };
  }, [stateTabletTextAreaWidth, stateTabletTextAreaAlignSelf]);

  const textAreaStyle = useMemo(() => {
    return {
      height: textAreaHeight,
    };
  }, [textAreaHeight]);

  const answerForQuestionStyle = useMemo(() => {
    return {
      color: answerForQuestionColor,
    };
  }, [answerForQuestionColor]);

  return (
    <div
      className={`w-[340px] flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={stateTabletTextAreaStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-end gap-[6px]">
        <div className="flex-1 relative leading-[24px]">{questionText}</div>
        {showInfo && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfacesolidinf}
          />
        )}
      </div>
      <div
        className="self-stretch rounded-xl bg-white-8 h-[140px] flex flex-row items-start justify-start py-2 px-4 box-border text-neutral-600"
        style={textAreaStyle}
      >
        <div
          className="flex-1 relative leading-[24px]"
          style={answerForQuestionStyle}
        >
          {answerText}
        </div>
      </div>
    </div>
  );
};

StateTabletTextArea.propTypes = {
  className: PropTypes.string,
  questionText: PropTypes.string,
  hugeIconinterfacesolidinf: PropTypes.string,
  answerText: PropTypes.string,
  showInfo: PropTypes.bool,

  /** Style props */
  stateTabletTextAreaWidth: PropTypes.any,
  stateTabletTextAreaAlignSelf: PropTypes.any,
  textAreaHeight: PropTypes.any,
  answerForQuestionColor: PropTypes.any,
};

export default StateTabletTextArea;
