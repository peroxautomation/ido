/**
 * Creator dance story section
 * @param {*} question Story section question
 * @param answer Story section answer
 * @returns
 */
const StorySection = (props) => {
  const { question, answer } = props;
  return (
    <div className={`moves-story-section`}>
      <div className="self-stretch flex flex-row items-center justify-start py-[0.125rem] px-[0rem]">
        <b className="flex-1 relative leading-[1.5rem]">{question}</b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-[0.125rem] px-[0rem] text-neutral-500">
        <div className="flex-1 relative leading-[1.5rem]">{answer}</div>
      </div>
    </div>
  );
};

export default StorySection;
