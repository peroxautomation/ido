import FaqQuestion from "../components/mobile/FaqQuestion";
import FaqAnswer from "../components/mobile/FaqAnswer";
import Title from "../components/mobile/Title";

/**
 * Frequently asked questions page
 * @returns A JSX element
 */
const FAQ = () => {
  /**
   * Open FAQ answer
   */
  const onQuestionClick = (event) => {
    const plusIcon = event.currentTarget.children[1];
    plusIcon.children[0].classList.toggle("[transform:_rotate(90deg)]");

    const question = event.currentTarget.nextElementSibling;
    question.classList.toggle("hidden");
  };
  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden text-left text-[0.75rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title pageName="FAQ" />
      <div className="relative w-[100%] top-[6.188rem] h-[83vh] overflow-y-auto flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <FaqQuestion onClick={onQuestionClick} />
          <FaqAnswer />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
