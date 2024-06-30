import PropTypes from "prop-types";

const QuestionAnswer = ({
  className = "",
  questionText = "When did you start dancing?",
  answerText = "2018",
}) => {
  return (
    <div
      className={`box-border flex flex-col items-start justify-start py-4 px-0 text-left text-base text-neutral-100 font-overline-regular self-stretch border-b-[1px] border-solid border-neutral-700 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-0.5 px-0">
        <b className="flex-1 relative leading-[24px]">{questionText}</b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-0.5 px-0 text-neutral-500">
        <div className="flex-1 relative leading-[24px]">{answerText}</div>
      </div>
    </div>
  );
};

QuestionAnswer.propTypes = {
  className: PropTypes.string,
  questionText: PropTypes.string,
  answerText: PropTypes.string,
};

export default QuestionAnswer;
