/**
 * Faq question box
 * @param answer The answer to the question
 * @returns 
 */
const FaqAnswer = (props) => {
  const { answer } = props;
  return (
    <div
      className={`faq-answer`}
    >
      <div className="flex-1 relative leading-[1rem]">{answer}</div>
    </div>
  );
};

export default FaqAnswer;
