/**
 * FAQ question box
 * @param onClick On Question click
 * @param className Class to add rotation
 * @param id The question id
 * @param question  The question
 * @returns A JSX element
 */
const FaqQuestion = (props) => {
  const { onClick, className, id, question } = props;
  return (
    <div
      onClick={() => onClick(id)}
      className={`faq-question`}
    >
      <div className="relative leading-[1rem] font-semibold">{question}</div>
      <div className="w-[1.5rem] relative h-[1rem] overflow-hidden shrink-0 text-[#ecf0f1]">
        <span
          className={`duration-200 absolute bg-white rounded-sm border border-solid h-[85%] w-0 left-[45%] ${className}`}
        ></span>
        <span className="absolute bg-white rounded-sm border border-solid h-[85%] w-0 left-[45%] bottom-[15%] right-[25%] [transform:_rotate(90deg)]"></span>
      </div>
    </div>
  );
};

export default FaqQuestion;
